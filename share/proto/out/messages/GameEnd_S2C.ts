// @ts-nocheck
import {
  tsValueToJsonValueFns,
  jsonValueToTsValueFns,
} from "../runtime/json/scalar.ts";
import {
  WireMessage,
} from "../runtime/wire/index.ts";
import {
  default as serialize,
} from "../runtime/wire/serialize.ts";
import {
  tsValueToWireValueFns,
  wireValueToTsValueFns,
} from "../runtime/wire/scalar.ts";
import {
  default as deserialize,
} from "../runtime/wire/deserialize.ts";

export declare namespace $ {
  export type GameEnd_S2C = {
    seatNumber: number;
  }
}

export type Type = $.GameEnd_S2C;

export function getDefaultValue(): $.GameEnd_S2C {
  return {
    seatNumber: 0,
  };
}

export function createValue(partialValue: Partial<$.GameEnd_S2C>): $.GameEnd_S2C {
  return {
    ...getDefaultValue(),
    ...partialValue,
  };
}

export function encodeJson(value: $.GameEnd_S2C): unknown {
  const result: any = {};
  if (value.seatNumber !== undefined) result.seatNumber = tsValueToJsonValueFns.uint32(value.seatNumber);
  return result;
}

export function decodeJson(value: any): $.GameEnd_S2C {
  const result = getDefaultValue();
  if (value.seatNumber !== undefined) result.seatNumber = jsonValueToTsValueFns.uint32(value.seatNumber);
  return result;
}

export function encodeBinary(value: $.GameEnd_S2C): Uint8Array {
  const result: WireMessage = [];
  if (value.seatNumber !== undefined) {
    const tsValue = value.seatNumber;
    result.push(
      [1, tsValueToWireValueFns.uint32(tsValue)],
    );
  }
  return serialize(result);
}

export function decodeBinary(binary: Uint8Array): $.GameEnd_S2C {
  const result = getDefaultValue();
  const wireMessage = deserialize(binary);
  const wireFields = new Map(wireMessage);
  field: {
    const wireValue = wireFields.get(1);
    if (wireValue === undefined) break field;
    const value = wireValueToTsValueFns.uint32(wireValue);
    if (value === undefined) break field;
    result.seatNumber = value;
  }
  return result;
}
