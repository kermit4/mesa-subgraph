// Externals
import { Address, BigInt } from '@graphprotocol/graph-ts'

// Contract ABIs and Events
import {
  FairSale as FairSaleContract,
  CancellationOrder,
  UserRegistration,
  ClaimedFromOrder,
  SaleCleared,
  NewOrder,
  NewUser
} from '../../../generated/FairSale/FairSale'

// GraphQL Schemas
import * as Schemas from '../../../generated/schema'

// Helpers
import { SALE_STATUS, BID_STATUS } from '../../helpers/sales'

/**
 * Handles any Auction that has cleared
 * @param event
 */
export function handleSaleCleared(event: SaleCleared): void {
  if (!isFairSaleBelongsToMesa(event.address)) {
    return
  }

  let sale = Schemas.FairSaleBid.load(event.address.toHexString()) // event.address is the contract that emits the event

  if (!sale) {
    return
  }

  sale.updatedAt = event.block.timestamp.toI32()
  sale.status = SALE_STATUS.SETTLED
  sale.save()
}

export function handleCancellationOrder(event: CancellationOrder): void {
  if (!isFairSaleBelongsToMesa(event.address)) {
    return
  }

  // ToDo: concatenate unique id
  let bid = Schemas.FairSaleBid.load(event.transaction.hash.toHexString())

  if (!bid) {
    return
  }

  bid.updatedAt = event.block.timestamp.toI32()
  bid.deletedAt = event.block.timestamp.toI32()
  bid.status = BID_STATUS.CANCELLED
  bid.save()
}

export function handleClaimedFromOrder(event: ClaimedFromOrder): void {
  if (!isFairSaleBelongsToMesa(event.address)) {
    return
  }

  // ToDo: concatenate unique id
  let bid = Schemas.FairSaleBid.load(event.transaction.hash.toHexString())
  if (!bid) {
    return
  }
  bid.updatedAt = event.block.timestamp.toI32()
  bid.status = BID_STATUS.CLAIMED
  bid.save()
}

/**
 * Handles new Order (Bid) placement on the Auction
 * @param event
 */
export function handleNewOrder(event: NewOrder): void {
  if (!isFairSaleBelongsToMesa(event.address)) {
    return
  }

  let orderId = encodeOrderData(event.params.ownerId, event.params.orderTokenOut, event.params.orderTokenIn)
  let bid = new Schemas.FairSaleBid(orderId)
  // bid.auction = event.address.toHexString()
  bid.createdAt = event.block.timestamp.toI32()
  bid.updatedAt = event.block.timestamp.toI32()
  bid.tokenInAmount = event.params.orderTokenIn
  bid.tokenOutAmount = event.params.orderTokenOut
  bid.address = event.transaction.from
  bid.status = BID_STATUS.SUBMITTED
  bid.save()
}

/**
 * Handles NewUser
 * @param event
 */
export function handleNewUser(event: NewUser): void {
  if (!isFairSaleBelongsToMesa(event.address)) {
    return
  }

  let saleUser = new Schemas.SaleUser(event.params.ownerId.toHexString())
  saleUser.address = event.params.userAddress
  saleUser.save()
}

export function handleUserRegistration(event: UserRegistration): void {}

/**
 * Encodes a Order into a Bytes string
 * @param param0
 * @returns
 */
export function encodeOrderData(ownerId: BigInt, orderTokenOut: BigInt, orderTokenIn: BigInt): string {
  return (
    '0x' +
    ownerId
      .toString()
      .slice(2)
      .padStart(16, '0') +
    orderTokenOut
      .toString()
      .slice(2)
      .padStart(24, '0') +
    orderTokenIn
      .toString()
      .slice(2)
      .padStart(24, '0')
  )
}

/**
 * Checks if the contract that emitted the event belongs to Mesa
 * @param auctionAddress
 */
function isFairSaleBelongsToMesa(fairSaleContractAddress: Address): boolean {
  // Find the from
  let fairSale = Schemas.FairSale.load(fairSaleContractAddress.toHexString())

  if (fairSale != null) {
    return true
  }

  return false
}
