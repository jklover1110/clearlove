# ESNext Promise

<p align='center'>下一代的 ECMAScript `Promise` 对象</p>

<br>

<p align='center'>
  <a href='./README.md'>English</a> | 简体中文
</p>

ESNext Promise，亦称“后 ES6 时代的 `Promise`”，基于 ECMAScript 语言规范(亦称 ECMA-262 标准)和 Promises/A+ 规范。

## TDD(Test-Driven Development, 测试驱动开发)

- [x] Promises/A+ Compliance Test Suite(兼容性测评全家桶)

## Promise Objects(Promise 对象)

- [x] The Promise Constructor(`Promise` 构造函数)
  - [x] Promise(executor)
- [ ] Properties of the Promise Prototype Object(`Promise` 原型属性)
  - [x] Promise.prototype.then(onFulfilled, onRejected)
- [x] Properties of Promise Instances(`Promise` 实例属性)

## How to run unit tests

```bash
# step1: 克隆仓库
git clone https://github.com/jklover1110/esn-promise.git

# step 2: 安装第三方依赖模块
npm i -g pnpm
pnpm install

# step 3: 运行单元测试
pnpm test

# step 4: 使用 Promises/A+ 兼容性测评全家桶
pnpm aplus

```
