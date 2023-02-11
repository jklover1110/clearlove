import { ARRAY } from '@/toolman'
import { isCallable } from '../testing-and-comparison-operations/is-callable'

const call = <T>(
  f: (...args: T[]) => any,
  v: ThisParameterType<typeof f>,
  argumentsList: T[] = ARRAY
) => {
  if (!isCallable(f)) throw TypeError()

  return Reflect.apply(f, v, argumentsList)
}

export { call as default, call }
