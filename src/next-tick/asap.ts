type Noop = () => void
/* refactor */
const queue: Set<Noop> = new Set()
const flush = () => (queue.size && queue.forEach(job => job()), queue).clear()

export default (fn: Noop) =>
  void (queue.add(fn).size === 1 && queueMicrotask(flush))
