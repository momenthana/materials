const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()
const root = require('./root')

router.use('', root.routes())

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT, () => {
    console.log(`Server is listening to port ${process.env.PORT}`)
});
