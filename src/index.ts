import express from 'express'
import templateRouter from './routes/content'

const app = express()
app.use(express.json())

const port = process.env.PORT || 8080

app.get('/ping', (_req, res) => {
  console.log('Someone pinged here!')
  res.send('Pong')
})

app.use('/', templateRouter)

app.listen(port, () => {
  console.log(`Server is on post ${port}`)
})
