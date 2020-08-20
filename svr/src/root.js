const Router = require('koa-router')

const root = new Router()
const groupCtrl = require('./controller/group')

root.post('/group', groupCtrl.create)

module.exports = root
