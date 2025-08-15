import express from 'express'
import payload from 'payload'
import { config } from 'dotenv'
import payloadConfig from '../payload.config'

// Load environment variables
config()

const app = express()
const PORT = process.env.PORT || 3001

// Enable CORS for frontend
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})

// Redirect root to admin
app.get('/', (req, res) => {
  res.redirect('/admin')
})

// Initialize Payload
const start = async (): Promise<void> => {
  await payload.init({
    config: payloadConfig,
    onInit: async () => {
      payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
    },
  })

  // Payload handles its own routing

  app.listen(PORT, async () => {
    payload.logger.info(`Server listening on port ${PORT}`)
    payload.logger.info(`Admin panel: http://localhost:${PORT}/admin`)
  })
}

start()