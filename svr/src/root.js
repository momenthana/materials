const Router = require('koa-router')

const root = new Router()
const groupCtrl = require('./controller/group')

root.get('/', ctx => {
  ctx.status = 200
})

root.get('/group', groupCtrl.list)
root.post('/group', groupCtrl.create)

module.exports = root
