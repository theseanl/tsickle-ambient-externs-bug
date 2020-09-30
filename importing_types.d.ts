import { thisIsAmbient, thisIsNot } from './types/types';

export function usingAmbientParamTypeInAnotherModule(a: thisIsAmbient): unknown;
export function usingNonAmbientParamTypeInAnotherModule(a: thisIsNot): unknown;
