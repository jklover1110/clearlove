const isObject = (argument: any): argument is object =>
  Object(argument) === argument

export { isObject as default, isObject }
