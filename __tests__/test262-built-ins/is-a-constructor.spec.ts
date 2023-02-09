import { it, expect } from 'vitest'
import { Promise } from '@/index'
import { isConstructor } from '@/abstract-operations'

it('isConstructor(Promise) must return true', () => {
  expect(isConstructor(Promise)).toBe(true)
})
