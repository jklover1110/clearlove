import { isCallable } from './is-callable'
import { ARRAY, CONSTRUCTOR } from '@/toolman'

const isConstructor = (argument: any) => {
  if (!isCallable(argument)) return false

  try {
    return !!Reflect.construct(CONSTRUCTOR, ARRAY, argument)
  } catch {
    return false
  }
}
export { isConstructor as default, isConstructor }
