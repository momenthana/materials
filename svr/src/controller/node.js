const Node = require('../models/node')

exports.list = async ctx => {
  const { group } = ctx.query

  let node

  try {
    node = await Node.find({ group: group }).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = node;
}

exports.id = async (ctx) => {
  const {
    id
  } = ctx.params

  let node

  try {
    node = await Node.findById(id).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = node
}

exports.create = async ctx => {
  const {
    img,
    title,
    description,
    name,
    group
  } = ctx.request.body

  const node = new Node({
    img,
    title,
    description,
    name,
    group
  })

  try {
    await node.save()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = node
}

exports.delete = async (ctx) => {
  const {
    id
  } = ctx.params
  
  try {
    await Node.findOneAndDelete({ _id: id }).exec()
  } catch (e) {
    if (e.name === 'CastError') {
      ctx.status = 400
      return
    }
  }

  ctx.status = 204
}
