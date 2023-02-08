import { it, expect } from 'vitest'
import { Promise } from '@/index'
import { isConstructor } from '@/toolman'

it('isConstructor(Promise) must return true', () => {
  expect(isConstructor(Promise)).toBe(true)
})
