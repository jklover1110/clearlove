export default (argument: any): argument is object =>
  Object(argument) === argument
