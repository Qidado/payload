import { buildConfig } from 'payload'
import { viteBundler } from '@payloadcms/bundler-vite'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { slateEditor } from '@payloadcms/richtext-slate'
import { seoPlugin } from '@payloadcms/plugin-seo'
import path from 'path'

// Import collections
import { Posts } from './src/payload/collections/Posts'
import { Resources } from './src/payload/collections/Resources'
import { Categories } from './src/payload/collections/Categories'
import { Users } from './src/payload/collections/Users'

export default buildConfig({
  secret: process.env.PAYLOAD_SECRET || 'your-secret-here',
  admin: {
    user: Users.slug,
  },
  editor: slateEditor({}),
  collections: [Users, Posts, Resources, Categories],
  typescript: {
    outputFile: path.resolve(__dirname, 'src/payload/payload-types.ts'),
  },
  plugins: [
    seoPlugin({
      collections: ['posts', 'resources'],
      generateTitle: ({ doc }) => `${doc.title} | Jungl`,
      generateDescription: ({ doc }) => doc.excerpt || doc.description,
    }),
  ],
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || process.env.SUPABASE_DB_URL,
    },
  }),
  cors: [
    'https://jungl.lovableproject.com',
    'http://localhost:5173',
    'http://localhost:3000',
  ],
})