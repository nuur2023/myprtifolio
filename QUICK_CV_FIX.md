# Quick Fix: CV Download Error

## The Problem
The CV PDF file is missing from your `public` folder, so the download button shows an error.

## Solution: Add Your CV PDF

### Step 1: Create Your CV PDF

1. **Option A: Use the CV content I created**
   - Open `CV_CONTENT.md` in your project
   - Copy all the content
   - Paste it into Microsoft Word or Google Docs
   - Format it nicely (use headings, bullets, etc.)
   - Save as PDF: **File → Save As → Choose PDF format**
   - Name it: `cv.pdf`

2. **Option B: Use an existing CV**
   - If you already have a CV PDF, use that one
   - Make sure it's named `cv.pdf`

### Step 2: Place the PDF in the Public Folder

1. Copy your `cv.pdf` file
2. Paste it into: `C:\Users\sanaq\OneDrive\Documents\mycv\public\`
3. The file should be at: `public/cv.pdf`

### Step 3: Test It

1. Restart your development server (if running):
   - Stop the server (Ctrl+C)
   - Run: `npm run dev`
2. Go to your portfolio website
3. Click the "Download CV" button
4. It should download successfully!

---

## File Structure Should Look Like This:

```
mycv/
├── public/
│   ├── images/
│   │   └── image.png
│   └── cv.pdf          ← Your CV file goes here
├── src/
└── ...
```

---

## Alternative: Use Word Document

If you prefer a Word document:

1. Save your CV as `cv.docx` (not `.pdf`)
2. Place it in the `public` folder: `public/cv.docx`
3. Update `src/data/personalInfo.js`:
   ```javascript
   cvDownloadLink: "/cv.docx",  // Change from /cv.pdf to /cv.docx
   ```

---

## Still Having Issues?

1. **Check the file name**: Must be exactly `cv.pdf` (lowercase, no spaces)
2. **Check the location**: Must be in `public/cv.pdf`
3. **Restart dev server**: After adding the file, restart `npm run dev`
4. **Check browser console**: Press F12 to see any errors

