export default (argument: any) => {
  if (argument == null) throw TypeError()

  return Object(argument)
}
