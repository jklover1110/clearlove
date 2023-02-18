const VOID = void 0
const ARRAY = Array.prototype
const NOOP = Function.prototype
const CONSTRUCTOR = function constructor() {} // eslint-disable-line @typescript-eslint/no-empty-function
const ALREADY_RESOLVED = Symbol(`alreadyResolved`)
const THEN = `then`

export { VOID, ARRAY, CONSTRUCTOR, NOOP, ALREADY_RESOLVED, THEN }
