import { suite, it, expect } from 'vitest'
import { Promise } from '@/index'

suite(`Promise.prototype.catch()`, () => {
  it(`Promise.prototype.catch() API`, () => {
    const RESULT = `OOPS`
    const p = new Promise((_, reject) => void reject(RESULT))

    expect(p).rejects.toBe(RESULT)
  })
})
