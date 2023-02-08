import { it, expect } from 'vitest'
import { Promise } from '@/index'
import { isCallable } from '@/toolman'

it('The Promise constructor is a built-in function', () => {
  expect(isCallable(Promise)).toBe(true)
})
