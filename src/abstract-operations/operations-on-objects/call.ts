import { ARRAY } from '@/toolman/constants'
import { isCallable } from '../testing-and-comparison-operations/is-callable'

/* refactor */
const call = (f: Function, v: any, argumentsList = ARRAY) => {
  if (!isCallable(f)) throw TypeError()

  return Reflect.apply(f, v, argumentsList)
}

export { call as default, call }
