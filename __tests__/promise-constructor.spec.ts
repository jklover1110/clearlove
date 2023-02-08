import { suite, it, expect } from 'vitest'
import { Promise } from '@/index'

suite('The Promise Constructor', () => {
  suite('Promise(executor)', () => {
    it('If NewTarget is undefined, throw a TypeError exception.', () => {
      expect(() => Promise()).toThrow()
    })

    it('If IsCallable(executor) is false, throw a TypeError exception', () => {
      expect(() => new Promise()).toThrow()
    })
  })
})

suite('Promise Abstract Operations', () => {
  suite('Promise Resolve Functions', () => {
    it('selfResolutionError', async () => {
      let _resolve: (v: Promise<unknown>) => void
      const p = new Promise(resolve => {
        _resolve = resolve
      })

      _resolve!(p)

      await expect(p).rejects.toThrow(TypeError('selfResolutionError'))
    })

    it('resolution is not an Object', async () => {
      const result = 'primitive'
      const p = new Promise(resolve => resolve(result))

      await expect(p).resolves.toBe(result)
    })

    it('then is an abrupt completion', async () => {
      /* refactor */
      const thenable = {
        get then() {
          throw Error()
        }
      }
      const p = new Promise(resolve => resolve(thenable))

      await expect(p).rejects.toThrow()
    })

    it('thenAction is not callable', async () => {
      const thenable = { then: 'not a function' }
      const p = new Promise(resolve => resolve(thenable))

      await expect(p).resolves.toBe(thenable)
    })

    it('resolution is a thenable', async () => {
      const result = 'thenable'
      const thenable = new Promise(resolve => resolve(result))
      const p = new Promise(resolve => resolve(thenable))

      await expect(p).resolves.toBe(result)
    })
  })
})
