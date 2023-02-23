import { ARRAY } from '@/toolman'
import { isCallable } from '../testing-and-comparison-operations'

export default <T, U extends readonly any[], V>(
  f: (this: T, ...args: U) => V,
  v: T,
  argumentsList = ARRAY
): V => {
  if (!isCallable(f)) throw TypeError()

  return Reflect.apply(f, v, argumentsList)
}
