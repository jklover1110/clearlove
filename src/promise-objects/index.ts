import {
  VOID,
  isOrdinaryObject,
  identity,
  thrower,
  ALREADY_RESOLVED
} from '@/toolman'
import { call, isCallable } from '@/abstract-operations'
import { enqueueJob } from '@/next-tick'

type Optional<T> = T | undefined
type OptionalList = Optional<Set<(v: any) => any>>
type Thenable<T> = PromiseLike<T> | T

enum PromiseState {
  fulfilled = 1,
  rejected = 1 << 1,
  pending = ~(fulfilled | rejected),
  settled = ~pending
}

const triggerReactions = (reactions: OptionalList, result: any) => {
  reactions?.size && reactions.forEach(fn => fn(result))
}

class Promise<T> {
  #state = PromiseState.pending
  #result: any
  #fulfillReactions: OptionalList = new Set()
  #rejectReactions: OptionalList = new Set()
  #isHandled = false /* todo */

  constructor(
    executor: (
      resolve: (value: Thenable<T>) => void,
      reject: (reason?: any) => void
    ) => void
  ) {
    if (!new.target) throw TypeError()
    if (!isCallable(executor)) throw TypeError()

    const createResolvingFunctions = () => {
      const fulfill = (value: any) => {
        if (this.#state & PromiseState.settled) return

        const reactions = this.#fulfillReactions
        ;[
          this.#state = PromiseState.fulfilled,
          this.#result = value,
          this.#fulfillReactions,
          this.#rejectReactions
        ] = [] as any[]

        triggerReactions(reactions, value)
      }
      const reject = (reason?: any) => {
        if (this.#state & PromiseState.settled) return

        const reactions = this.#rejectReactions
        ;[
          this.#state = PromiseState.rejected,
          this.#result = reason,
          this.#fulfillReactions,
          this.#rejectReactions
        ] = [] as any[]

        if (!this.#isHandled) {
          /* todo：Promise.#isHandled */
        }

        triggerReactions(reactions, reason)
      }
      const resolve = (resolution: Thenable<T>) => {
        if (resolution === (this as unknown as Thenable<T>))
          return reject(TypeError('selfResolutionError'))

        if (!isOrdinaryObject(resolution)) return fulfill(resolution)

        try {
          const thenAction = resolution.then
          if (!isCallable(thenAction)) return fulfill(resolution)

          enqueueJob(() => {
            const { resolve, reject } = createResolvingFunctions()

            try {
              call(thenAction, resolution, [resolve, reject])
            } catch (e) {
              reject(e)
            }
          })
        } catch (e) {
          reject(e)
        }
      }
      const zeroSum: {
        (resolvingFunction: any): (...result: any[]) => void
        [ALREADY_RESOLVED]?: boolean
      } =
        resolvingFunction =>
        (...result) => {
          if (zeroSum[ALREADY_RESOLVED]) return

          zeroSum[ALREADY_RESOLVED] = true
          call(resolvingFunction, VOID, result)
        }

      return { resolve: zeroSum(resolve), reject: zeroSum(reject) }
    }
    const { resolve, reject } = createResolvingFunctions()

    try {
      call(executor as any, VOID, [resolve, reject])
    } catch (e) {
      reject(e)
    }
  }

  then(onFulfilled?: any, onRejected?: any) {
    return new (this.constructor as any)(
      (
        resolve: (value: Thenable<T>) => void,
        reject: (reason?: any) => void
      ) => {
        const makeReaction =
          (onSettled: (result?: any) => any) => (result: any) =>
            enqueueJob(() => {
              try {
                resolve(onSettled(result))
              } catch (e) {
                reject(e)
              }
            })
        onFulfilled = makeReaction(
          isCallable(onFulfilled) ? onFulfilled : identity
        )
        onRejected = makeReaction(isCallable(onRejected) ? onRejected : thrower)

        new Map([
          [
            PromiseState.pending,
            () => {
              this.#fulfillReactions?.add(onFulfilled)
              this.#rejectReactions?.add(onRejected)
            }
          ],
          [PromiseState.fulfilled, onFulfilled],
          [PromiseState.rejected, onRejected]
        ]).get(this.#state)(this.#result)
      }
    )
  }
}

export { Promise as default, Promise }
