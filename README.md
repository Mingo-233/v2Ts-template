# web-dispatch

## Project setup

```
yarn install
```

# 说明

技术选型

- vue2
- vuex
- vue-cli
- antdesgin
- less
- typescript
- eslint 和 prettier .vscode
- yarn

## 一、编码规范

- .vscode 文本编辑器默认格式化规则
- prettier 代码格式化工具
- eslint 代码校验和修复工具
- Vetur VSCode 的 Vue 工具

#### 发出格式化命令

- prettier-eslint 这个库，按照 code -> prettier -> eslint --fix 的流程格式化代码 （不推荐）
- 使用 Linters 按照 Prettier 的规则格式化

#### eslint-config-prettier

Prettier 将会作为 Linters 中 Formatting Rules 的完全替代品参与到代码格式化的过程中。为了达成这个目标，我们有两件事需要做：

1 禁用掉 Linters 中所有与 Prettier 冲突的 Formatting Rules
2 针对 Prettier 自身的规则，使用 Prettier 进行格式化

这两件事需要分别借助两个库来实现

使用 eslint-config-prettier 禁用掉 ESLint 中与 Prettier 冲突的规则，使用可以被继承的 eslint 规则
使用 eslint-plugin-prettier 添加 ESLint 的 Prettier 功能的实现

#### extends

批量设置规则集
先后顺序存在覆盖关系

### 二、css 预处理器

less

#### 变量

解决变量导入问题
"style-resources-loader"
解决变量打包问题
"vue-cli-plugin-style-resources-loader"

#### 样式原子化

--
