const VOID = void 0
const ARRAY = Array.prototype
const NOOP = Function.prototype
const CONSTRUCTOR = function constructor() {} // eslint-disable-line @typescript-eslint/no-empty-function
const alreadyResolved = Symbol('alreadyResolved')

export { VOID, ARRAY, CONSTRUCTOR, NOOP, alreadyResolved }
