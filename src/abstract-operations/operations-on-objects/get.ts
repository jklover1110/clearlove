export default <T extends object, P extends keyof T>(o: T, p: P) => {
  return Reflect.get(o, p, o)
}
