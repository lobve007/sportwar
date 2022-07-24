# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn install`

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


## 钱包连接

### 相关依赖

```
   {
    "@web3-react/core": "^6.1.9",
    "@web3-react/injected-connector": "^6.0.7",
   }
```

### 合约调用

1. 在页面顶层使用We3ReactProvider。`src/index.tsx`
```
    <Web3ReactProvider getLibrary={getLibrary}>
      <Demo />
    </Web3ReactProvider>
```
2. 根据业务需求，调用钱包连接。`src/pages/demo/index.tsx` 参考`DisconnectedContent`组件。
3.  需要claim的地方使用`useClaim`的hooks，在`sec/hooks/useClaim.ts`暴露两个参数 `handleClaim`,执行合约调用, `claimed` 表示当前钱包连接者的claim状态。
```
const {handleClaim, claimed} = useClaim()
```