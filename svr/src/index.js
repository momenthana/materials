const Koa = require('koa')
const Router = require('koa-router')
const cors = require('@koa/cors')
const mongoose = require('mongoose')

const app = new Koa()
const router = new Router()
const root = require('./root')

mongoose.Promise = global.Promise

mongoose.connect(process.env.MONGO, {
	useNewUrlParser: true,
	useUnifiedTopology: true
}).then(() => {
	console.log('Successfully connected to mongodb')
}).catch(e => {
	console.error(e)
})

router.use('', root.routes())

app.use(cors())

app.use(router.routes()).use(router.allowedMethods())

app.listen(process.env.PORT, () => {
	console.log(`Server is listening to port ${process.env.PORT}`)
})
