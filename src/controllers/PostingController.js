const Posting = require('../models/Posting')

module.exports ={
    async show(req, res){
        const postings = await Posting.findAll()

        return res.json(postings)
    },

    async store(req, res){
        const {title, content} = req.body

        const post = await Posting.create({title, content})

        return res.json(post)
    }
}