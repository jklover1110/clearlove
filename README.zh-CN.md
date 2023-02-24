# CLEARLOVE

<p align='center'>下一代的 ECMAScript `Promise` 对象</p>

<br>

<p align='center'>
  <a href='./README.md'>English</a> | 简体中文
</p>

## 简介

Clearlove 是下一代 ECMAScript `Promise` 对象，亦称“后 ES6 时代的 `Promise`”，基于 ECMAScript 语言规范(亦称 ECMA-262 标准)和 Promises/A+ 规范。

## TDD(Test-Driven Development, 测试驱动开发)

- [x] Promises/A+ Compliance Test Suite(兼容性测评全家桶)
- [ ] ECMAScript6 Promises Test Suite

## Promise Objects(Promise 对象)

- [x] The Promise Constructor(`Promise` 构造函数)
  - [x] Promise(executor)
- [ ] Properties of the Promise Constructor(`Promise` 构造函数属性)
  - [ ] Promise.all(iterable)
  - [ ] Promise.allSettled(iterable)
  - [ ] Promise.any(iterable)
  - [x] Promise.prototype
  - [ ] Promise.race(iterable)
  - [ ] Promise.reject(r)
  - [ ] Promise.resolve(x)
  - [ ] get Promise[@@species]
- [ ] Properties of the Promise Prototype Object(`Promise` 原型属性)
  - [x] Promise.prototype.catch(onRejected)
  - [x] Promise.prototype.constructor
  - [ ] Promise.prototype.finally(onFinally)
  - [x] Promise.prototype.then(onFulfilled, onRejected)
  - [ ] Promise.prototype[@@toStringTag]
- [x] Properties of Promise Instances(`Promise` 实例属性)
  - [x] [[PromiseState]]
  - [x] [[PromiseResult]]
  - [x] [[PromiseFulfillReactions]]
  - [x] [[PromiseRejectReactions]]
  - [x] [[PromiseIsHandled]]

## 单元测试

```bash
# 步骤 1: 克隆仓库
git clone https://github.com/jklover1110/clearlove.git

# 步骤 2: 安装第三方依赖模块
npm i -g pnpm
pnpm install

# 步骤 3: 运行单元测试
pnpm test

# step4: use Promises/A+ compliance test suite & ECMAScript6 Promises Test Suite
pnpm suites

```
