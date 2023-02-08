import { suite, it, expect } from 'vitest'
import { Promise } from '@/index'

suite('If IsCallable(executor) is false, throw a TypeError exception.', () => {
  it('If executor is a string, throw a TypeError exception.', () => {
    expect(() => new Promise('not callable')).toThrow(TypeError())
  })

  it('If executor is a number, throw a TypeError exception.', () => {
    expect(() => new Promise(9)).toThrow(TypeError())
  })

  it('If executor is null, throw a TypeError exception.', () => {
    expect(() => new Promise(null)).toThrow(TypeError())
  })

  it('If executor is a object, throw a TypeError exception.', () => {
    expect(() => new Promise({})).toThrow(TypeError())
  })
})
