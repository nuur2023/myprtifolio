# Portfolio Website

Professional portfolio website for Nuur Hassan Mohamed - Software Engineer.

A modern, responsive, and fully-featured portfolio website built with React, Vite, and Tailwind CSS. Showcase your skills, projects, experience, and get in touch with potential employers or clients.

## ✨ Features

- 🎨 Modern, clean, and professional design
- 🌓 Dark mode support (default: enabled)
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎭 Smooth animations with Framer Motion
- 🚀 SEO optimized
- 📧 Contact form (EmailJS integration ready)
- 🔍 Project filtering system
- 📄 Easy content management through data files
- ⚡ Fast and optimized with Vite

## 🛠️ Tech Stack

- **Frontend**: React 18 with Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Contact Form**: EmailJS (optional)
- **Deployment Ready**: Vercel, Netlify, GitHub Pages

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn/pnpm

### Installation

1. Clone or download this repository
2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio.

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

All content is managed through easy-to-edit data files:

1. **Personal Information**: Edit `src/data/personalInfo.js`
   - Update name, title, bio, contact info
   - Add your profile photo to `public/profile.jpg`
   - Add your CV PDF to `public/cv.pdf`

2. **Skills**: Edit `src/data/skills.js`
   - Modify skill categories
   - Update skill levels and names

3. **Projects**: Edit `src/data/projects.js`
   - Add/update projects
   - Include images, links, tech stack

4. **Experience & Education**: Edit `src/data/experience.js`
   - Update work experience
   - Modify education background

**See `CONTRIBUTING.md` for detailed customization guide.**

## 📧 Contact Form Setup

The contact form currently uses `mailto:` as a fallback. To enable EmailJS:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create an email service template
3. Get your Service ID, Template ID, and Public Key
4. Update the EmailJS configuration in `src/components/Contact.jsx`

See `CONTRIBUTING.md` for detailed instructions.

## 🚀 Deployment

This project is ready to deploy on:

- **Vercel** (Recommended): Connect your GitHub repo or use Vercel CLI
- **Netlify**: Drag and drop the `dist` folder or connect via Git
- **GitHub Pages**: Configure base path and deploy `dist` folder

**See `DEPLOYMENT.md` for detailed deployment instructions.**

## 📁 Project Structure

```
mycv/
├── public/              # Static assets (images, CV, etc.)
├── src/
│   ├── components/      # React components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/           # Content data files (easy to edit)
│   │   ├── experience.js
│   │   ├── personalInfo.js
│   │   ├── projects.js
│   │   └── skills.js
│   ├── App.jsx         # Main app component
│   ├── main.jsx        # Entry point
│   └── index.css       # Global styles
├── index.html          # HTML template
├── package.json        # Dependencies
├── tailwind.config.js  # Tailwind configuration
├── vite.config.js      # Vite configuration
├── README.md           # This file
├── CONTRIBUTING.md     # Customization guide
└── DEPLOYMENT.md       # Deployment guide
```

## 🎨 Sections

- **Hero**: Introduction with CTA buttons
- **About**: Professional biography and overview
- **Skills**: Categorized skills with progress indicators
- **Projects**: Portfolio with filtering (Web/Mobile/Systems)
- **Experience**: Work experience timeline
- **Education**: Educational background
- **Contact**: Contact form and information
- **Footer**: Social links and navigation

## 🎯 Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Update content in `src/data/` files
3. ✅ Add your profile photo to `public/profile.jpg`
4. ✅ Add your CV PDF to `public/cv.pdf`
5. ✅ Update social media links
6. ✅ Customize colors in `tailwind.config.js` (optional)
7. ✅ Test locally: `npm run dev`
8. ✅ Build and deploy: `npm run build`

## 📚 Documentation

- `CONTRIBUTING.md` - Detailed guide for updating content
- `DEPLOYMENT.md` - Step-by-step deployment instructions

## 🤝 Support

For issues or questions:
- Check the documentation files
- Review the code comments
- Ensure all dependencies are installed

## 📄 License

MIT License - feel free to use this for your own portfolio!

---

Built with ❤️ by Nuur Hassan Mohamed

