// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import { ethereum, JSONValue, TypedMap, Entity, Bytes, Address, BigInt } from '@graphprotocol/graph-ts'

export class AuctionCleared extends ethereum.Event {
  get params(): AuctionCleared__Params {
    return new AuctionCleared__Params(this)
  }
}

export class AuctionCleared__Params {
  _event: AuctionCleared

  constructor(event: AuctionCleared) {
    this._event = event
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt()
  }

  get priceNumerator(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }

  get priceDenominator(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }
}

export class CancellationSellOrder extends ethereum.Event {
  get params(): CancellationSellOrder__Params {
    return new CancellationSellOrder__Params(this)
  }
}

export class CancellationSellOrder__Params {
  _event: CancellationSellOrder

  constructor(event: CancellationSellOrder) {
    this._event = event
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt()
  }

  get userId(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }

  get buyAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }

  get sellAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt()
  }
}

export class ClaimedFromOrder extends ethereum.Event {
  get params(): ClaimedFromOrder__Params {
    return new ClaimedFromOrder__Params(this)
  }
}

export class ClaimedFromOrder__Params {
  _event: ClaimedFromOrder

  constructor(event: ClaimedFromOrder) {
    this._event = event
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt()
  }

  get userId(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }

  get buyAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }

  get sellAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt()
  }
}

export class NewAuction extends ethereum.Event {
  get params(): NewAuction__Params {
    return new NewAuction__Params(this)
  }
}

export class NewAuction__Params {
  _event: NewAuction

  constructor(event: NewAuction) {
    this._event = event
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt()
  }

  get _auctioningToken(): Address {
    return this._event.parameters[1].value.toAddress()
  }

  get _biddingToken(): Address {
    return this._event.parameters[2].value.toAddress()
  }

  get orderCancellationEndDate(): BigInt {
    return this._event.parameters[3].value.toBigInt()
  }

  get auctionEndDate(): BigInt {
    return this._event.parameters[4].value.toBigInt()
  }

  get _auctionedSellAmount(): BigInt {
    return this._event.parameters[5].value.toBigInt()
  }

  get _minBuyAmount(): BigInt {
    return this._event.parameters[6].value.toBigInt()
  }

  get minimumBiddingAmountPerOrder(): BigInt {
    return this._event.parameters[7].value.toBigInt()
  }

  get minFundingThreshold(): BigInt {
    return this._event.parameters[8].value.toBigInt()
  }
}

export class NewSellOrder extends ethereum.Event {
  get params(): NewSellOrder__Params {
    return new NewSellOrder__Params(this)
  }
}

export class NewSellOrder__Params {
  _event: NewSellOrder

  constructor(event: NewSellOrder) {
    this._event = event
  }

  get auctionId(): BigInt {
    return this._event.parameters[0].value.toBigInt()
  }

  get userId(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }

  get buyAmount(): BigInt {
    return this._event.parameters[2].value.toBigInt()
  }

  get sellAmount(): BigInt {
    return this._event.parameters[3].value.toBigInt()
  }
}

export class NewUser extends ethereum.Event {
  get params(): NewUser__Params {
    return new NewUser__Params(this)
  }
}

export class NewUser__Params {
  _event: NewUser

  constructor(event: NewUser) {
    this._event = event
  }

  get userId(): BigInt {
    return this._event.parameters[0].value.toBigInt()
  }

  get userAddress(): Address {
    return this._event.parameters[1].value.toAddress()
  }
}

export class UserRegistration extends ethereum.Event {
  get params(): UserRegistration__Params {
    return new UserRegistration__Params(this)
  }
}

export class UserRegistration__Params {
  _event: UserRegistration

  constructor(event: UserRegistration) {
    this._event = event
  }

  get user(): Address {
    return this._event.parameters[0].value.toAddress()
  }

  get userId(): BigInt {
    return this._event.parameters[1].value.toBigInt()
  }
}

export class EasyAuction extends ethereum.SmartContract {
  static bind(address: Address): EasyAuction {
    return new EasyAuction('EasyAuction', address)
  }
}

export class EmitAuctionClearedCall extends ethereum.Call {
  get inputs(): EmitAuctionClearedCall__Inputs {
    return new EmitAuctionClearedCall__Inputs(this)
  }

  get outputs(): EmitAuctionClearedCall__Outputs {
    return new EmitAuctionClearedCall__Outputs(this)
  }
}

export class EmitAuctionClearedCall__Inputs {
  _call: EmitAuctionClearedCall

  constructor(call: EmitAuctionClearedCall) {
    this._call = call
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt()
  }

  get priceNumerator(): BigInt {
    return this._call.inputValues[1].value.toBigInt()
  }

  get priceDenominator(): BigInt {
    return this._call.inputValues[2].value.toBigInt()
  }
}

export class EmitAuctionClearedCall__Outputs {
  _call: EmitAuctionClearedCall

  constructor(call: EmitAuctionClearedCall) {
    this._call = call
  }
}

export class EmitCancellationSellOrderCall extends ethereum.Call {
  get inputs(): EmitCancellationSellOrderCall__Inputs {
    return new EmitCancellationSellOrderCall__Inputs(this)
  }

  get outputs(): EmitCancellationSellOrderCall__Outputs {
    return new EmitCancellationSellOrderCall__Outputs(this)
  }
}

export class EmitCancellationSellOrderCall__Inputs {
  _call: EmitCancellationSellOrderCall

  constructor(call: EmitCancellationSellOrderCall) {
    this._call = call
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt()
  }

  get userId(): BigInt {
    return this._call.inputValues[1].value.toBigInt()
  }

  get buyAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt()
  }

  get sellAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt()
  }
}

export class EmitCancellationSellOrderCall__Outputs {
  _call: EmitCancellationSellOrderCall

  constructor(call: EmitCancellationSellOrderCall) {
    this._call = call
  }
}

export class EmitClaimedFromOrderCall extends ethereum.Call {
  get inputs(): EmitClaimedFromOrderCall__Inputs {
    return new EmitClaimedFromOrderCall__Inputs(this)
  }

  get outputs(): EmitClaimedFromOrderCall__Outputs {
    return new EmitClaimedFromOrderCall__Outputs(this)
  }
}

export class EmitClaimedFromOrderCall__Inputs {
  _call: EmitClaimedFromOrderCall

  constructor(call: EmitClaimedFromOrderCall) {
    this._call = call
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt()
  }

  get userId(): BigInt {
    return this._call.inputValues[1].value.toBigInt()
  }

  get buyAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt()
  }

  get sellAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt()
  }
}

export class EmitClaimedFromOrderCall__Outputs {
  _call: EmitClaimedFromOrderCall

  constructor(call: EmitClaimedFromOrderCall) {
    this._call = call
  }
}

export class EmitNewAuctionCall extends ethereum.Call {
  get inputs(): EmitNewAuctionCall__Inputs {
    return new EmitNewAuctionCall__Inputs(this)
  }

  get outputs(): EmitNewAuctionCall__Outputs {
    return new EmitNewAuctionCall__Outputs(this)
  }
}

export class EmitNewAuctionCall__Inputs {
  _call: EmitNewAuctionCall

  constructor(call: EmitNewAuctionCall) {
    this._call = call
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt()
  }

  get _auctioningToken(): Address {
    return this._call.inputValues[1].value.toAddress()
  }

  get _biddingToken(): Address {
    return this._call.inputValues[2].value.toAddress()
  }

  get orderCancellationEndDate(): BigInt {
    return this._call.inputValues[3].value.toBigInt()
  }

  get auctionEndDate(): BigInt {
    return this._call.inputValues[4].value.toBigInt()
  }

  get _auctionedSellAmount(): BigInt {
    return this._call.inputValues[5].value.toBigInt()
  }

  get _minBuyAmount(): BigInt {
    return this._call.inputValues[6].value.toBigInt()
  }

  get minimumBiddingAmountPerOrder(): BigInt {
    return this._call.inputValues[7].value.toBigInt()
  }

  get minFundingThreshold(): BigInt {
    return this._call.inputValues[8].value.toBigInt()
  }
}

export class EmitNewAuctionCall__Outputs {
  _call: EmitNewAuctionCall

  constructor(call: EmitNewAuctionCall) {
    this._call = call
  }
}

export class EmitNewSellOrderCall extends ethereum.Call {
  get inputs(): EmitNewSellOrderCall__Inputs {
    return new EmitNewSellOrderCall__Inputs(this)
  }

  get outputs(): EmitNewSellOrderCall__Outputs {
    return new EmitNewSellOrderCall__Outputs(this)
  }
}

export class EmitNewSellOrderCall__Inputs {
  _call: EmitNewSellOrderCall

  constructor(call: EmitNewSellOrderCall) {
    this._call = call
  }

  get auctionId(): BigInt {
    return this._call.inputValues[0].value.toBigInt()
  }

  get userId(): BigInt {
    return this._call.inputValues[1].value.toBigInt()
  }

  get buyAmount(): BigInt {
    return this._call.inputValues[2].value.toBigInt()
  }

  get sellAmount(): BigInt {
    return this._call.inputValues[3].value.toBigInt()
  }
}

export class EmitNewSellOrderCall__Outputs {
  _call: EmitNewSellOrderCall

  constructor(call: EmitNewSellOrderCall) {
    this._call = call
  }
}

export class EmitNewUserCall extends ethereum.Call {
  get inputs(): EmitNewUserCall__Inputs {
    return new EmitNewUserCall__Inputs(this)
  }

  get outputs(): EmitNewUserCall__Outputs {
    return new EmitNewUserCall__Outputs(this)
  }
}

export class EmitNewUserCall__Inputs {
  _call: EmitNewUserCall

  constructor(call: EmitNewUserCall) {
    this._call = call
  }

  get userId(): BigInt {
    return this._call.inputValues[0].value.toBigInt()
  }

  get userAddress(): Address {
    return this._call.inputValues[1].value.toAddress()
  }
}

export class EmitNewUserCall__Outputs {
  _call: EmitNewUserCall

  constructor(call: EmitNewUserCall) {
    this._call = call
  }
}

export class EmitUserRegistrationCall extends ethereum.Call {
  get inputs(): EmitUserRegistrationCall__Inputs {
    return new EmitUserRegistrationCall__Inputs(this)
  }

  get outputs(): EmitUserRegistrationCall__Outputs {
    return new EmitUserRegistrationCall__Outputs(this)
  }
}

export class EmitUserRegistrationCall__Inputs {
  _call: EmitUserRegistrationCall

  constructor(call: EmitUserRegistrationCall) {
    this._call = call
  }

  get user(): Address {
    return this._call.inputValues[0].value.toAddress()
  }

  get userId(): BigInt {
    return this._call.inputValues[1].value.toBigInt()
  }
}

export class EmitUserRegistrationCall__Outputs {
  _call: EmitUserRegistrationCall

  constructor(call: EmitUserRegistrationCall) {
    this._call = call
  }
}