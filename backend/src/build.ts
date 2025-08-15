import payload from 'payload'
import payloadConfig from '../payload.config'

const build = async (): Promise<void> => {
  // Initialize Payload for build
  await payload.init({
    config: payloadConfig,
    onInit: () => {
      payload.logger.info('Payload initialized for build')
    },
  })
  
  // Build process complete
  payload.logger.info('Payload build completed')
  process.exit(0)
}

build().catch((error) => {
  console.error('Build failed:', error)
  process.exit(1)
})