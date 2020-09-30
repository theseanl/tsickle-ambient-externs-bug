export declare interface thisIsAmbient {
    good: unknown
}

export interface thisIsNot {
    bad: unknown
}

export function usingAmbientParamTypeInOwnModule(a: thisIsAmbient): unknown;
export function usingNonAmbientParamTypeInOwnModule(a: thisIsNot): unknown;
