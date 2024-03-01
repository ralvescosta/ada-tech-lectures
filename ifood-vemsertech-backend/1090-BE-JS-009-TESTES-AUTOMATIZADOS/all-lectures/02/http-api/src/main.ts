import express from 'express'
import helmet from 'helmet'
import cors from 'cors'

;(() => {
  const app = express()

  app.use(express.json())
  app.use(helmet())
  app.use(cors())

  //cadastro de carros
  //listas carros por marca
  //buscar carro por identificador

  app.get('/hello', (req, res) => {
    res.status(200).json({ok: 'ok'})
  })

  app.listen(3000, () => console.log('running'))
})()