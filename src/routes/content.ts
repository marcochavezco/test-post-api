import express from 'express'

const router = express.Router()

router.post('/', (req, res) => {
  try {
    const content = req.body

    const idList = content.map((template: { id: string, content: string }) => {
      const { id } = template
      return id
    })
    res.send(idList)
  } catch (error: any) {
    res.status(400).send(error.message)
  }
})

export default router
