const Koa = require('koa');
const Router = require('koa-router');
const config = require('./config/config');
const db = require('./config/database');
const body = require('koa-better-body');
const static = require('koa-static');
const cors = require('koa2-cors');
const proving = require('./app/token/proving');
const path = require('path');

let server = new Koa()
server.listen(config.port)

// 中间件
// koa-better-body https://www.jianshu.com/p/694b413ac2a3
server.use(body({
    // uploadDir: './static/upload'
    uploadDir: path.resolve(__dirname, './static/upload')
}))

// 静态文件托管，上传的图片可以通过路径访问
server.use(static(path.resolve(__dirname, './static/')))

// 解决跨域
server.use(cors({
    origin: function (ctx) {
        return '*'
    },
    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
    maxAge: 5,
    credentials: true,
    allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}))
/* 数据库连接并且挂载到context 对象上  */ 
server.context.db = db;
server.context.config = config;

let router = new Router();

// 统一处理token
router.use(async (ctx, next) => {
    // 登录注册直接通过
    if (ctx.request.url.includes('login') || ctx.request.url.includes('register')) {
        await next()
    } else {
        // 其他接口检测有没有携带token
        let token = ctx.request.header.authorization
        if (token) {
            let res = proving(token)
            if (res && res.exp <= (new Date() / 1000)){
                ctx.body = {
                    code: 101,
                    data: '',
                    // msg: 'token过期'
                    msg: '登录过期，请重新登录'
                }
            } else {
                await next()
            }
        } else {
            ctx.body = {
                code: 101,
                data: '',
                // msg: '没有token'
                msg: '请登录'
            }
        }
    }
})

// 登录注册接口
router.use('/api/admin', require('./app/api/admin'));
// 分类接口
router.use('/api/category', require('./app/api/category'));
// 文章接口
router.use('/api/article', require('./app/api/article'));
// 图片上传
router.use('/api/upload', require('./app/api/upload'));
// 评论
router.use('/api/comments', require('./app/api/comments'));

server.use(router.routes());
