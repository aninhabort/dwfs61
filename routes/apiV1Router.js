const express = require('express');
const apiV1Router = express.Router();
const knexConfig = require('../knexfile')[process.env.NODE_ENV || 'development']
const knex = require('knex')(knexConfig)

apiV1Router.get('/produtos', (req, res) => {
    knex('produtos').select('id', 'descricao', 'marca', 'valor')
        .then(dados => res.status(200).json(dados))
        .catch(err => {
            console.log(err)
            res.status(500).json({ message: `Erro ao recuperar lista de produtos: ${err.message}` })
        })
})

module.exports = apiV1Router;