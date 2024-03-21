import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const content = req.body
    res.json(content)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
