import test from 'promises-aplus-tests'
import Promise from '@/index'

const value = function () {
  const deferred = Object.create(null)

  deferred.promise = new Promise((resolve, reject) => {
    deferred.resolve = resolve
    deferred.reject = reject
  })

  return deferred
}

Reflect.defineProperty(Promise, 'deferred', {
  value
})

test(Promise, console.log)
