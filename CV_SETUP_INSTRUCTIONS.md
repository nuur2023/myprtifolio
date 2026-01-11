# How to Add Your CV to the Portfolio

## Option 1: Create a PDF (Recommended for Web)

PDF files are the standard for web portfolios because they:
- Display consistently across all devices
- Can't be easily edited (professional)
- Load quickly
- Work on all browsers

### Steps:

1. **Create your CV in Word/Google Docs** using the content in `CV_CONTENT.md`

2. **Convert to PDF:**
   - **Microsoft Word:** File → Save As → Choose PDF format
   - **Google Docs:** File → Download → PDF Document (.pdf)
   - **Online:** Use any PDF converter (e.g., SmallPDF, PDF24)

3. **Rename the file to:** `cv.pdf`

4. **Place it in the `public` folder:**
   - The file should be at: `public/cv.pdf`

5. **Done!** The "Download CV" button will now work.

---

## Option 2: Create a Word Document

If you specifically need a Word document:

1. Create your CV in Microsoft Word using the content from `CV_CONTENT.md`

2. Format it professionally:
   - Use clear headings
   - Consistent fonts (e.g., Calibri or Arial)
   - Proper spacing
   - Professional colors

3. **Rename to:** `cv.docx`

4. **Place in:** `public/cv.docx`

5. **Update the download link** in `src/data/personalInfo.js`:
   ```javascript
   cvDownloadLink: "/cv.docx", // Change from /cv.pdf to /cv.docx
   ```

---

## Option 3: Host CV Separately

You can also host your CV on:
- Google Drive (make it shareable/public)
- Dropbox
- Your own server
- GitHub (for public CVs)

Then update the link in `src/data/personalInfo.js`:
```javascript
cvDownloadLink: "https://your-cv-url.com/cv.pdf",
```

---

## Quick Tips for Professional CV

1. **Keep it clean and simple** - Use clear sections
2. **1-2 pages maximum** - Recruiters prefer concise CVs
3. **Use bullet points** - Easy to scan
4. **Include keywords** - Match job descriptions
5. **Proofread** - Check for typos and grammar
6. **Save as PDF** - Most professional format for web

---

## Testing the Download

After adding your CV:

1. Start your development server: `npm run dev`
2. Go to your portfolio website
3. Click the "Download CV" button
4. Check if the file downloads correctly

---

**Note:** The CV content has already been updated in your portfolio data files (`personalInfo.js`, `experience.js`, `skills.js`). You just need to create and add the PDF/Word file!

