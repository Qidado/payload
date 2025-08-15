# Jungl Payload CMS Backend

This is the backend deployment package for the Jungl Payload CMS.

## Deployment Instructions

### Railway Deployment (Recommended)

1. **Create Railway Account**: Sign up at [railway.app](https://railway.app)

2. **Deploy from GitHub**:
   - Push this `backend` folder to a new GitHub repository
   - Connect Railway to your GitHub account
   - Create a new project and select your backend repository

3. **Set Environment Variables** in Railway:
   ```
   PAYLOAD_SECRET=jungl-payload-cms-secret-key-2024
   DATABASE_URI=postgresql://postgres.ehfsfqmzmrwzlgnbpyzz:Gu1rad0-100694@aws-0-us-east-1.pooler.supabase.com:5432/postgres
   NODE_ENV=production
   ```

4. **Deploy**: Railway will automatically build and deploy your app

5. **Access Admin**: Your admin panel will be available at `https://your-app.railway.app/admin`

### Local Development

```bash
npm install
npm run dev
```

Admin panel available at: http://localhost:3001/admin

### API Endpoints

Once deployed, your API will be available at:
- `https://your-app.railway.app/api/posts`
- `https://your-app.railway.app/api/resources`
- `https://your-app.railway.app/api/categories`

## Frontend Integration

Update your frontend's Payload API URL to point to your Railway deployment:

```typescript
// In your frontend lib/payload.ts
const PAYLOAD_API_URL = 'https://your-app.railway.app'
```

## Features

- ✅ Payload CMS 3.x
- ✅ PostgreSQL (Supabase) integration
- ✅ CORS enabled for frontend
- ✅ SEO plugin configured
- ✅ User authentication
- ✅ Blog posts management
- ✅ Resources management
- ✅ Categories management