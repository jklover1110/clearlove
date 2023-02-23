import assert from 'assert'
import aplusTests from 'promises-aplus-tests'
// import es6Tests from 'promises-es6-tests'
import Promise from '@/index'

Reflect.defineProperty(Promise, 'deferred', {
  value() {
    const deferred = Object.create(null)

    deferred.promise = new Promise((resolve, reject) => {
      deferred.resolve = resolve
      deferred.reject = reject
    })

    return deferred
  }
})
Reflect.defineProperty(Promise, 'defineGlobalPromise', {
  value(global: { Promise: any; assert: typeof assert }) {
    global.Promise = Promise
    global.assert = assert
  }
})

aplusTests(Promise, console.log)
// es6Tests(Promise, console.log)
