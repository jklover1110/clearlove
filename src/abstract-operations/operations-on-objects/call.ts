import { ARRAY } from '@/toolman'
import { isCallable } from '../testing-and-comparison-operations'

export default <T>(
  f: (...args: T[]) => any,
  v: ThisParameterType<typeof f>,
  argumentsList: T[] = ARRAY
) => {
  if (!isCallable(f)) throw TypeError()

  return Reflect.apply(f, v, argumentsList)
}
