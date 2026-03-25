import { Router } from 'express'

import packageJson from '../../package.json'

export const baseRoutes = Router()

baseRoutes.get('/', (_, res) => {
  const { name, version, description, author } = packageJson

  res.status(200).json({ name, version, description, author })
})

baseRoutes.get('/health', (_, res) => {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date()
  })
})
