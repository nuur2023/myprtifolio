# Deployment Guide

This portfolio is ready to deploy on various platforms. Follow these instructions for each platform.

## 📦 Building for Production

First, build the project:

```bash
npm install
npm run build
```

This creates an optimized production build in the `dist` folder.

## 🚀 Vercel Deployment

### Option 1: Via Vercel Dashboard (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Configure:
   - Framework Preset: Vite
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `dist`
6. Click "Deploy"

### Option 2: Via Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts to deploy.

## 🌐 Netlify Deployment

### Option 1: Drag & Drop

1. Run `npm run build`
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
3. Drag and drop the `dist` folder

### Option 2: Via Netlify Dashboard

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Configure:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

### Option 3: Via Netlify CLI

```bash
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

## 📄 GitHub Pages Deployment

1. Install gh-pages package:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  },
  "homepage": "https://yourusername.github.io/your-repo-name"
}
```

3. Update `vite.config.js`:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## ☁️ AWS S3 + CloudFront

1. Install AWS CLI and configure credentials
2. Build the project: `npm run build`
3. Sync to S3:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```
4. Configure CloudFront for CDN
5. Set up custom domain

## 🔒 Environment Variables

If using EmailJS for the contact form, add environment variables to your hosting platform:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

**Note**: Vite uses `VITE_` prefix for client-side environment variables.

## ✅ Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify images load correctly
- [ ] Test contact form (if configured)
- [ ] Check responsive design on mobile/tablet
- [ ] Test dark mode toggle
- [ ] Verify CV download link works
- [ ] Check all external links (GitHub, LinkedIn, etc.)
- [ ] Test project filters
- [ ] Verify smooth scrolling works
- [ ] Check SEO meta tags

## 🔄 Updating Your Portfolio

1. Make changes to data files in `src/data/`
2. Commit and push to GitHub
3. If using Vercel/Netlify, deployment happens automatically
4. If using GitHub Pages, run `npm run deploy` again

## 🐛 Troubleshooting

### Images not loading
- Ensure images are in the `public/` folder or use absolute URLs
- Check file paths start with `/` for public folder assets

### Routes not working
- For GitHub Pages, ensure `base` is set correctly in `vite.config.js`
- For SPA routing, configure redirects on your hosting platform

### Build errors
- Clear `node_modules` and `dist` folder
- Run `npm install` again
- Check for any console errors

## 📧 Contact Form Setup

See `CONTRIBUTING.md` for detailed EmailJS setup instructions.


