import SpecError from './api/SpecError';
import SpecValidator from './api/SpecValidator';
import Validator from './api/Validator';

const Spec: any = {}

const
  validatorNames = getValidatorNames(),
  validator: any = ():any => null;

validator.validate = (): any => null;
validator.usingHint = (): any => validator;

for (let i = 0; i < validatorNames.length; ++i) {
  Spec[validatorNames[i]] = validator;
}

Object.freeze(Spec)

export {
  Spec,
  SpecError,
  SpecValidator,
  Validator
}

function getValidatorNames(): string[] {
  return [
    'from',
    'any',
    'boolean',
    'number',
    'positiveNumber',
    'nonpositiveNumber',
    'negativeNumber',
    'nonnegativeNumber',
    'float',
    'positiveFloat',
    'nonpositiveFloat',
    'negativeFloat',
    'nonnegativeFloat',
    'integer',
    'positiveInteger',
    'nonpositiveInteger',
    'negativeInteger',
    'nonnegativeInteger',
    'finite',
    'infinite',
    'string',
    'function',
    'object',
    'array',
    'iterable',
    'observable',
    'unique',
    'date',
    'something',
    'nothing',
    'hasSomeKeys',
    'prop',
    'between',
    'when',
    'lazy',
    'is',
    'isNot',
    'equal',
    'notEqual',
    'optional',
    'nullable',
    'nullableOptional',
    'oneOf',
    'instanceOf',
    'extends',
    'arrayOf',
    'singleOf',
    'match',
    'valid',
    'greater',
    'greaterOrEqual',
    'less',
    'lessOrEqual',
    'keysOf',
    'valuesOf',
    'shape',
    'extensibleShape',
    'and',
    'or',
    'in',
    'notIn',
  ];
}