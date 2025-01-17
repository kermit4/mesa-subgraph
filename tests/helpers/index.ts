import { BigNumber, ContractFactory, Signer, providers, ethers, BigNumberish } from 'ethers'
import { writeFile, readFile } from 'fs/promises'
import { exec as execBase } from 'child_process'
import { render } from 'mustache'

// Contract interfaces and classes
import { ERC20Mintable } from './contracts'
import { Dayjs } from 'dayjs'

export const SUBGRAPH_SYNC_SECONDS = 5000

export const ETH_ZERO_ADDRESS = '0x0000000000000000000000000000000000000000'

/**
 * Wraps `child_process.exec` in a promise
 * @param command
 */
export function execAsync(command: string) {
  return new Promise<string>((resolve, reject) => {
    return execBase(command, (err, stdut) => {
      if (err) {
        return reject(err)
      }

      return resolve(stdut)
    })
  })
}

interface BuildSubgraphYmlProps {
  network: string | 'mainnet' | 'ropsten' | 'rinkeby' | 'kovan' | 'local'
  startBlock: number
  contracts: {
    factory: {
      address: string
    }
    saleLauncher: {
      address: string
    }
    templateLauncher: {
      address: string
    }
  }
}

export async function buildSubgraphYaml(viewProps: BuildSubgraphYmlProps) {
  // Get the template
  const subgraphYamlTemplate = await readFile('./subgraph.template.yaml', {
    encoding: 'utf8'
  })

  const subgraphYamlOut = render(subgraphYamlTemplate, viewProps)

  // Write the file
  await writeFile('./subgraph.yaml', subgraphYamlOut)

  return
}

export async function wait(ms: number) {
  return new Promise<void>(resolve => {
    setTimeout(resolve, ms)
  })
}

// The Graph GraphQL endpoint
export const GRAPHQL_ENDPOINT = 'http://localhost:8000/subgraphs/name/adamazad/mesa'

// Ganache EVM endpoint
export const EVM_ENDPOINT = 'http://localhost:8545'

export type ContractFactories =
  | 'FairSale'
  | 'MesaFactory'
  | 'ERC20Mintable'
  | 'SaleLauncher'
  | 'TemplateLauncher'
  | 'FixedPriceSale'
  | 'FairSaleTemplate'
  | 'FixedPriceSaleTemplate'
/**
 * Creates and returns a `ContractFactory` from ethers
 * @param contract the contract name. See `ContractFactories`
 * @param signer the signer that deploys the contract
 */
export function getContractFactory(contract: ContractFactories, signer: Signer) {
  const contractArtifact = require(`../../artifacts/${contract}.json`)

  return new ContractFactory(contractArtifact.abi, contractArtifact.bytecode, signer)
}

interface CreateTokensAndMintAndApproveProps {
  name: string
  symbol: string
  numberOfTokens: BigNumberish
  addressToApprove: string
  users: providers.JsonRpcSigner[]
  signer: Signer
}

export async function createTokenAndMintAndApprove({
  name,
  symbol,
  addressToApprove,
  numberOfTokens = BigNumber.from(10).pow(30),
  users,
  signer
}: CreateTokensAndMintAndApproveProps): Promise<ERC20Mintable> {
  const token = (await getContractFactory('ERC20Mintable', signer).deploy(symbol, name)) as ERC20Mintable

  for (const user of users) {
    await token.mint(await user.getAddress(), numberOfTokens)
    await token.connect(user).approve(addressToApprove, ethers.constants.MaxUint256)
  }

  return token
}

interface CreateBiddingTokenAndMintAndApproveProps {
  numberOfTokens: BigNumber
  addressesToApprove?: string[]
  users: providers.JsonRpcSigner[]
  deployer: providers.JsonRpcSigner
}

export async function createBiddingTokenAndMintAndApprove({
  numberOfTokens,
  addressesToApprove,
  users,
  deployer
}: CreateBiddingTokenAndMintAndApproveProps) {
  // Deploy the token
  const biddingToken = (await getContractFactory('ERC20Mintable', deployer).deploy('BT', 'BT')) as ERC20Mintable

  for (const user of users) {
    await biddingToken.mint(user._address, numberOfTokens)
    // Approve each address to spend the token
    if (addressesToApprove) {
      for (const addressToApprove of addressesToApprove) {
        await biddingToken.connect(user).approve(addressToApprove, numberOfTokens)
      }
    }
  }

  return biddingToken
}

export async function createWETH(signer: Signer) {
  // Get factories and deploy BiddingToken and AuctioningToken
  return (await getContractFactory('ERC20Mintable', signer).deploy('WETH', 'WETH')) as ERC20Mintable
}

/**
 * Gets the first 10 signers
 * @param provider
 */
export function getSigners(provider: providers.JsonRpcProvider): providers.JsonRpcSigner[] {
  const signers: providers.JsonRpcSigner[] = []

  for (let index = 0; index < 10; index++) {
    signers.push(provider.getSigner(index))
  }

  return signers
}

interface EncodeInitDataFairSaleOptions {
  saleLauncher: string
  saleTemplateId: BigNumberish
  tokenOut: string
  tokenIn: string
  duration: BigNumberish
  tokenOutSupply: BigNumberish
  minPrice: BigNumberish
  minBuyAmount: BigNumberish
  minRaise: BigNumberish
  tokenSupplier: string
}

/**
 * Encodes
 */
export function encodeInitDataFairSale({
  saleLauncher,
  saleTemplateId,
  tokenOut,
  tokenIn,
  duration,
  tokenOutSupply,
  minPrice,
  minBuyAmount,
  minRaise,
  tokenSupplier
}: EncodeInitDataFairSaleOptions) {
  return ethers.utils.defaultAbiCoder.encode(
    ['address', 'uint256', 'address', 'address', 'uint256', 'uint256', 'uint96', 'uint96', 'uint256', 'address'],
    [
      saleLauncher,
      saleTemplateId,
      tokenOut,
      tokenIn,
      duration,
      tokenOutSupply,
      minPrice,
      minBuyAmount,
      minRaise,
      tokenSupplier
    ]
  )
}

interface EncodeInitDataFixedPriceOptions {
  saleLauncher: string
  saleTemplateId: BigNumberish
  tokenSupplier: string
  tokenOut: string
  tokenIn: string
  tokenPrice: BigNumberish
  tokensForSale: BigNumberish
  startDate: BigNumberish
  endDate: BigNumberish
  allocationMin: BigNumberish
  allocationMax: BigNumberish
  minimumRaise: BigNumberish
  owner: string
}

export function encodeInitDataFixedPrice({
  saleLauncher,
  saleTemplateId,
  tokenSupplier,
  tokenOut,
  tokenIn,
  tokenPrice,
  tokensForSale,
  startDate,
  endDate,
  allocationMin,
  allocationMax,
  minimumRaise,
  owner
}: EncodeInitDataFixedPriceOptions) {
  return ethers.utils.defaultAbiCoder.encode(
    [
      'address',
      'uint256',
      'address',
      'address',
      'address',
      'uint256',
      'uint256',
      'uint256',
      'uint256',
      'uint256',
      'uint256',
      'uint256',
      'address'
    ],
    [
      saleLauncher,
      saleTemplateId,
      tokenSupplier,
      tokenOut,
      tokenIn,
      tokenPrice,
      tokensForSale,
      startDate,
      endDate,
      allocationMin,
      allocationMax,
      minimumRaise,
      owner
    ]
  )
}

export function toUTC(dayjs: Dayjs): Dayjs {
  const utcMinutesOffset = dayjs.utcOffset()
  return dayjs.add(utcMinutesOffset, 'minutes')
}
