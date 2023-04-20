const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('..//')
const { Channel } = require('..//')

// Créer une nouvelle chaîne pour l'utilisateur connecté
router.post(
  '/api/channels',
  auth,
  [
    check('name').not().isEmpty().withMessage('Name is required'),
    check('description').not().isEmpty().withMessage('Description is required')
  ],
  async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
    }

    const { name, description } = req.body
    const userId = req.user.id

    try {
      const channel = new Channel({ name, description, owner: userId })
      await channel.save()

      res.status(201).json(channel)
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server Error')
    }
  }
)

module.exports = router
