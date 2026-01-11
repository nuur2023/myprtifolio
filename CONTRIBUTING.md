# How to Update Your Portfolio Content

This guide will help you easily update your portfolio content without modifying component code.

## 📝 Updating Personal Information

Edit `src/data/personalInfo.js`:

- Update your name, title, introduction, and bio
- Modify contact information (email, phone, location)
- Add or update social media links
- Update profile image path (place image in `public/` folder)
- Update CV download link (place PDF in `public/` folder)

## 🎨 Updating Skills

Edit `src/data/skills.js`:

- Modify skill categories (Frontend, Backend, Mobile, Tools)
- Add or remove skills from each category
- Adjust skill proficiency levels (0-100)
- Change category icons if needed

## 💼 Updating Projects

Edit `src/data/projects.js`:

- Add new project objects
- Update existing project details:
  - `name`: Project name
  - `description`: Project description
  - `image`: Project screenshot URL (or path in public/)
  - `type`: "web", "mobile", or "system"
  - `techStack`: Array of technologies used
  - `liveUrl`: Live website URL (or null)
  - `playStoreUrl`: Google Play Store URL (or null)
  - `githubUrl`: GitHub repository URL (or null)
  - `featured`: true/false (shown in featured section)

## 🏢 Updating Experience

Edit `src/data/experience.js`:

### Work Experience:
- Add or modify work experience entries
- Update company, role, location, period
- Modify responsibilities array
- Update technologies used

### Education:
- Add or modify education entries
- Update degree, institution, location, period
- Modify achievements array

## 📸 Adding Images

1. **Profile Photo**: Place as `public/profile.jpg`
2. **CV/Resume**: Place as `public/cv.pdf`
3. **Project Screenshots**: Either:
   - Place in `public/` folder and reference as `/image-name.jpg`
   - Use external URLs (e.g., Unsplash, your CDN)

## 📧 Setting Up Contact Form (EmailJS)

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service template
3. Get your Service ID, Template ID, and Public Key
4. Update `src/components/Contact.jsx`:
   - Uncomment EmailJS imports and code
   - Replace placeholder values with your actual IDs

Alternatively, the form currently uses `mailto:` as a fallback which will open the user's email client.

## 🚀 Deploying

### Vercel:
```bash
npm run build
# Then deploy the dist folder or connect via Git
```

### Netlify:
```bash
npm run build
# Drag and drop the dist folder or connect via Git
```

### GitHub Pages:
1. Update `vite.config.js` to add `base: '/your-repo-name/'`
2. Build: `npm run build`
3. Deploy the `dist` folder to gh-pages branch

## 🎨 Customizing Colors & Styling

- Edit `tailwind.config.js` to change primary colors
- Modify `src/index.css` for global styles
- Component-specific styles are in each component file

## 📱 Testing Responsiveness

The portfolio is fully responsive. Test on:
- Mobile (375px, 414px)
- Tablet (768px)
- Desktop (1024px, 1280px, 1440px+)


