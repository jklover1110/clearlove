import { ARRAY } from '@/toolman'
import { call, getV } from './index'

export default <T, P extends keyof T>(v: T, p: P, argumentsList = ARRAY) => {
  return call(getV(v, p), v, argumentsList)
}
