import express from 'express'
import templateRouter from './routes/content'

const app = express()
app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!')
  res.send('Pong')
})

app.use('/', templateRouter)

app.listen(PORT, () => {
  console.log(`Server is on post ${PORT}`)
})
