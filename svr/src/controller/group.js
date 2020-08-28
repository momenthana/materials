const Group = require('../models/group')

exports.list = async (ctx) => {
  let group

  try {
    group = await Group.find().exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = group
}

exports.id = async (ctx) => {
  const {
    id
  } = ctx.params

  let group

  try {
    group = await Group.findById(id).exec()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = group
}

exports.create = async (ctx) => {
  const {
    img,
    title,
    description,
    name
  } = ctx.request.body

  const group = new Group({
    img,
    title,
    description,
    name
  })

  try {
    await group.save()
  } catch (e) {
    return ctx.throw(500, e)
  }

  ctx.body = group
}

exports.delete = async (ctx) => {
  const {
    id
  } = ctx.params
  
  try {
    await Group.findOneAndDelete({ _id: id }).exec()
  } catch (e) {
    if (e.name === 'CastError') {
      ctx.status = 400
      return
    }
  }

  ctx.status = 204
}
