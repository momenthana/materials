const Node = require('../models/node')

exports.list = async ctx => {
  let node

  try {
    node = await Node.find().exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = node;
}

exports.create = async ctx => {
  const {
    img,
    title,
    description,
    name
  } = ctx.request.body

  const node = new Node({
    img,
    title,
    description,
    name
  })

  try {
    await node.save()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = node
}
