# 全局依赖

- tslint : typescript 代码质量检测
- typescript: typescript编译
- jest: 单元测试框架
- nodemon: 热启动工具
- pm2: 进程守护工具

```bash
npm install -g tslint
npm install -g typescript
npm install -g jest
npm install -g nodemon
npm install -g pm2
```

# 目录说明

### 目录功能说明

- dist 项目编译后产生的文件目录
- src
  - bin - www.js 程序的入口文件
  - config - web服务配置文件
  - controller - controller层（轻量级的control层，没有复杂业务逻辑，逻辑下沉到model层）
  - lib - 公共库（与业务逻辑完全无关的公共库）
  - middleware - 全局中间件（全局的中间件）
  - model - 业务逻辑层（与传承MVC的model不一致，是原子化逻辑的封装）
  - router - 路由映射（路径与controller的映射关系）
  - service - 服务抽象层（包含数据层的一些枚举定义，数据模型映射）
  - app.ts - web app配置

### 目录间依赖关系

```Bash
bin - www.js
   		|
  	  app.js
  	    |
      router
  	    |
     controller & middleware
  	            |
  	          model
  	            |
  	         service
```

### 说明

- controller和middleware 调用model层的逻辑，并对model层的原子业务逻辑进行组合
- model 层调用service层的抽象的服务

### 注意事项

- controller 之间禁止相互引用
- model 之间禁止相互引用
- service 之间禁止相互引用

# 运行代码

开发环境下运行代码（环境依赖）

- npm install -g typescript

```bash
npm run build
npm run dev
```

预发布环境下运行的代码

```Bash
npm run pre
```

生产环境下运行代码

```bash
npm run pro
```

# 运行测试

环境依赖

- npm install -g jest

```bash
npm run test
```

# 编译代码

编译后的代码存在于dist文件目录下，任意的代码修改后会自动触发编译

```bash
npm run build
```

