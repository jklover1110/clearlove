import { suite, it, expect } from 'vitest'
import { Promise } from '@/index'
import { call } from '@/abstract-operations'
import { NOOP } from '@/toolman'

suite('If NewTarget is undefined, throw a TypeError exception.', () => {
  it('', () => expect(1).toBe(1))
  it('Call Promise as a built-in constructor without the new operator, throw a TypeError exception.', () => {
    expect(() => Promise(NOOP)).toThrow()
  })

  it('Call Promise as a function, throw a TypeError exception.', () => {
    expect(() => call(Promise, null, NOOP)).toThrow()
  })

  it('Call Promise as a method, throw a TypeError exception.', () => {
    expect(() => call(Promise, new Promise(NOOP as any), NOOP)).toThrow()
  })
})
