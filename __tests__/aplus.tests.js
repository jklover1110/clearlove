import test from 'promises-aplus-tests'
import Promise from '../dist/esn-promise.js'

const value = function () {
  const deferred = Object.create(null)

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}

Reflect.defineProperty(Promise, 'deferred', {
  value,
  configurable: true,
  writable: true
})

test(Promise, console.log)
