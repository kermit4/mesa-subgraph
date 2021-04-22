// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class TemplateAdded extends ethereum.Event {
  get params(): TemplateAdded__Params {
    return new TemplateAdded__Params(this);
  }
}

export class TemplateAdded__Params {
  _event: TemplateAdded;

  constructor(event: TemplateAdded) {
    this._event = event;
  }

  get template(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get templateId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TemplateLaunched extends ethereum.Event {
  get params(): TemplateLaunched__Params {
    return new TemplateLaunched__Params(this);
  }
}

export class TemplateLaunched__Params {
  _event: TemplateLaunched;

  constructor(event: TemplateLaunched) {
    this._event = event;
  }

  get sale(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get templateId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TemplateRemoved extends ethereum.Event {
  get params(): TemplateRemoved__Params {
    return new TemplateRemoved__Params(this);
  }
}

export class TemplateRemoved__Params {
  _event: TemplateRemoved;

  constructor(event: TemplateRemoved) {
    this._event = event;
  }

  get template(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get templateId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class TemplateVerified extends ethereum.Event {
  get params(): TemplateVerified__Params {
    return new TemplateVerified__Params(this);
  }
}

export class TemplateVerified__Params {
  _event: TemplateVerified;

  constructor(event: TemplateVerified) {
    this._event = event;
  }

  get template(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get templateId(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class UpdatedTemplateRestriction extends ethereum.Event {
  get params(): UpdatedTemplateRestriction__Params {
    return new UpdatedTemplateRestriction__Params(this);
  }
}

export class UpdatedTemplateRestriction__Params {
  _event: UpdatedTemplateRestriction;

  constructor(event: UpdatedTemplateRestriction) {
    this._event = event;
  }

  get restrictedTemplates(): boolean {
    return this._event.parameters[0].value.toBoolean();
  }
}

export class TemplateLauncher__templateInfoResult {
  value0: boolean;
  value1: BigInt;
  value2: BigInt;
  value3: boolean;

  constructor(
    value0: boolean,
    value1: BigInt,
    value2: BigInt,
    value3: boolean
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromBoolean(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    map.set("value2", ethereum.Value.fromUnsignedBigInt(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    return map;
  }
}

export class TemplateLauncher extends ethereum.SmartContract {
  static bind(address: Address): TemplateLauncher {
    return new TemplateLauncher("TemplateLauncher", address);
  }

  factory(): Address {
    let result = super.call("factory", "factory():(address)", []);

    return result[0].toAddress();
  }

  try_factory(): ethereum.CallResult<Address> {
    let result = super.tryCall("factory", "factory():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTemplate(_templateId: BigInt): Address {
    let result = super.call("getTemplate", "getTemplate(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(_templateId)
    ]);

    return result[0].toAddress();
  }

  try_getTemplate(_templateId: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getTemplate",
      "getTemplate(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(_templateId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getTemplateId(_template: Address): BigInt {
    let result = super.call(
      "getTemplateId",
      "getTemplateId(address):(uint256)",
      [ethereum.Value.fromAddress(_template)]
    );

    return result[0].toBigInt();
  }

  try_getTemplateId(_template: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "getTemplateId",
      "getTemplateId(address):(uint256)",
      [ethereum.Value.fromAddress(_template)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  restrictedTemplates(): boolean {
    let result = super.call(
      "restrictedTemplates",
      "restrictedTemplates():(bool)",
      []
    );

    return result[0].toBoolean();
  }

  try_restrictedTemplates(): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "restrictedTemplates",
      "restrictedTemplates():(bool)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  templateId(): BigInt {
    let result = super.call("templateId", "templateId():(uint256)", []);

    return result[0].toBigInt();
  }

  try_templateId(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("templateId", "templateId():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  templateInfo(param0: Address): TemplateLauncher__templateInfoResult {
    let result = super.call(
      "templateInfo",
      "templateInfo(address):(bool,uint64,uint128,bool)",
      [ethereum.Value.fromAddress(param0)]
    );

    return new TemplateLauncher__templateInfoResult(
      result[0].toBoolean(),
      result[1].toBigInt(),
      result[2].toBigInt(),
      result[3].toBoolean()
    );
  }

  try_templateInfo(
    param0: Address
  ): ethereum.CallResult<TemplateLauncher__templateInfoResult> {
    let result = super.tryCall(
      "templateInfo",
      "templateInfo(address):(bool,uint64,uint128,bool)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new TemplateLauncher__templateInfoResult(
        value[0].toBoolean(),
        value[1].toBigInt(),
        value[2].toBigInt(),
        value[3].toBoolean()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _factory(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AddTemplateCall extends ethereum.Call {
  get inputs(): AddTemplateCall__Inputs {
    return new AddTemplateCall__Inputs(this);
  }

  get outputs(): AddTemplateCall__Outputs {
    return new AddTemplateCall__Outputs(this);
  }
}

export class AddTemplateCall__Inputs {
  _call: AddTemplateCall;

  constructor(call: AddTemplateCall) {
    this._call = call;
  }

  get _template(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class AddTemplateCall__Outputs {
  _call: AddTemplateCall;

  constructor(call: AddTemplateCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class LaunchTemplateCall extends ethereum.Call {
  get inputs(): LaunchTemplateCall__Inputs {
    return new LaunchTemplateCall__Inputs(this);
  }

  get outputs(): LaunchTemplateCall__Outputs {
    return new LaunchTemplateCall__Outputs(this);
  }
}

export class LaunchTemplateCall__Inputs {
  _call: LaunchTemplateCall;

  constructor(call: LaunchTemplateCall) {
    this._call = call;
  }

  get _templateId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _data(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }
}

export class LaunchTemplateCall__Outputs {
  _call: LaunchTemplateCall;

  constructor(call: LaunchTemplateCall) {
    this._call = call;
  }

  get newSale(): Address {
    return this._call.outputValues[0].value.toAddress();
  }
}

export class RemoveTemplateCall extends ethereum.Call {
  get inputs(): RemoveTemplateCall__Inputs {
    return new RemoveTemplateCall__Inputs(this);
  }

  get outputs(): RemoveTemplateCall__Outputs {
    return new RemoveTemplateCall__Outputs(this);
  }
}

export class RemoveTemplateCall__Inputs {
  _call: RemoveTemplateCall;

  constructor(call: RemoveTemplateCall) {
    this._call = call;
  }

  get _templateId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RemoveTemplateCall__Outputs {
  _call: RemoveTemplateCall;

  constructor(call: RemoveTemplateCall) {
    this._call = call;
  }
}

export class UpdateTemplateRestrictionCall extends ethereum.Call {
  get inputs(): UpdateTemplateRestrictionCall__Inputs {
    return new UpdateTemplateRestrictionCall__Inputs(this);
  }

  get outputs(): UpdateTemplateRestrictionCall__Outputs {
    return new UpdateTemplateRestrictionCall__Outputs(this);
  }
}

export class UpdateTemplateRestrictionCall__Inputs {
  _call: UpdateTemplateRestrictionCall;

  constructor(call: UpdateTemplateRestrictionCall) {
    this._call = call;
  }

  get _restrictedTemplates(): boolean {
    return this._call.inputValues[0].value.toBoolean();
  }
}

export class UpdateTemplateRestrictionCall__Outputs {
  _call: UpdateTemplateRestrictionCall;

  constructor(call: UpdateTemplateRestrictionCall) {
    this._call = call;
  }
}

export class VerifyTemplateCall extends ethereum.Call {
  get inputs(): VerifyTemplateCall__Inputs {
    return new VerifyTemplateCall__Inputs(this);
  }

  get outputs(): VerifyTemplateCall__Outputs {
    return new VerifyTemplateCall__Outputs(this);
  }
}

export class VerifyTemplateCall__Inputs {
  _call: VerifyTemplateCall;

  constructor(call: VerifyTemplateCall) {
    this._call = call;
  }

  get _templateId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class VerifyTemplateCall__Outputs {
  _call: VerifyTemplateCall;

  constructor(call: VerifyTemplateCall) {
    this._call = call;
  }
}