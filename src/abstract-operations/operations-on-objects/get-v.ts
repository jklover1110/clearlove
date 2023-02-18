import { toObject } from './index'

export default <T, P extends keyof T>(v: T, p: P) => {
  return Reflect.get(toObject(v), p, v)
}
