import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const { id } = req.body
    res.json(id)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
