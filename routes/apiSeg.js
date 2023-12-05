const express = require('express');
const apiSeg = express.Router();

const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(knexConfig)

apiSeg.post(`/register`, (req, res) => {

})

apiSeg.post(`/login`, (req, res) => {
    let { login, senha } = req.body
    knex('usuarios').where({ login }).then((res) => {
        if (res.length === 0) {
            res.status(401).json({ message: `Usuário não encontrado` })
        } else {
            let usuario = res[0]
            if (bcrypt.compareSync(senha, usuario.senha)) {
                res.status(200).json({ token: '1234567890' })
            } else {
                res.status(401).json({ message: `Usuário ou senha inválida` })
            }
        }
    }).catch((err) => {
        res.status(500).json({ erro: err })
    })
})

module.exports = apiSeg;