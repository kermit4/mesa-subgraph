import { Bytes, BigInt, ethereum, Value } from '@graphprotocol/graph-ts'

export class Order {
  _ownerId: String
  _tokenIn: Bytes
  _tokenOut: Bytes

  private constructor(bytes: Bytes) {
    let byesString = bytes.toString()

    this._ownerId = (bytes.subarray(2,18) as Bytes).toString()
    this._tokenOut =    BigInt.fromUnsignedBytes(bytes.subarray(19,42) as Bytes)
    this._tokenIn =     BigInt.fromUnsignedBytes(bytes.subarray(43,66) as Bytes)
  }

    get ownerId(): String {
    return this._ownerId
  }

  get tokenOut(): BigInt {
      return this._tokenOut
  }

  get tokenIn(): BigInt {
      return this._tokenIn
  }

  static decodeFromBytes(bytes: Bytes): Order {
    return new Order(bytes)
  }
}

/**
 * Encodes a Order into a Bytes string
 */
export function encodeOrder(ownerId: BigInt, orderTokenOut: BigInt, orderTokenIn: BigInt): string {
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
