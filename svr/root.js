const Router = require('koa-router')

const root = new Router()

root.get('/', (ctx, next) => {
    ctx.body = 'GET ' + ctx.request.path
})

module.exports = root;
