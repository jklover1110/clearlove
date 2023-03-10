# CLEARLOVE

<p align='center'>Next Generation ECMAScript Promise Objects</p>

<br>

<p align='center'>
  English | <a href='./README.zh-CN.md'>简体中文</a>
</p>

## Intro

Clearlove are Next Generation ECMAScript Promise Objects, AKA "Post-ES6-era Promise", is based on ECMAScript Language Specification(AKA ECMA-262 Standards) & Promises/A+ Specification.

## TDD(Test-Driven Development)

- [x] Promises/A+ Compliance Test Suite
- [ ] ECMAScript6 Promises Test Suite

## Promise Objects

- [x] The Promise Constructor
  - [x] Promise(executor)
- [ ] Properties of the Promise Constructor
  - [ ] Promise.all(iterable)
  - [ ] Promise.allSettled(iterable)
  - [ ] Promise.any(iterable)
  - [x] Promise.prototype
  - [ ] Promise.race(iterable)
  - [ ] Promise.reject(r)
  - [ ] Promise.resolve(x)
  - [ ] get Promise[@@species]
- [ ] Properties of the Promise Prototype Object
  - [x] Promise.prototype.catch(onRejected)
  - [x] Promise.prototype.constructor
  - [ ] Promise.prototype.finally(onFinally)
  - [x] Promise.prototype.then(onFulfilled, onRejected)
  - [ ] Promise.prototype[@@toStringTag]
- [x] Properties of Promise Instances
  - [x] [[PromiseState]]
  - [x] [[PromiseResult]]
  - [x] [[PromiseFulfillReactions]]
  - [x] [[PromiseRejectReactions]]
  - [x] [[PromiseIsHandled]]

## How to run unit tests

```bash
# step1: clone the repo
git clone https://github.com/jklover1110/clearlove.git

# step2: install 3rd-party node modules
npm i -g pnpm
pnpm install

# step3: run unit tests
pnpm test

# step4: use Promises/A+ compliance test suite & ECMAScript6 Promises Test Suite
pnpm suites

```
