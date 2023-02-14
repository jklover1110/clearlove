import { isCallable } from './index'
import { ARRAY, CONSTRUCTOR } from '@/toolman'

export default (argument: any) => {
  if (!isCallable(argument)) return false

  try {
    return !!Reflect.construct(CONSTRUCTOR, ARRAY, argument)
  } catch {
    return false
  }
}
