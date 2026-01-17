# ATS Resume Checker

A simple web-based tool to analyze your resume against Applicant Tracking System (ATS) criteria and get an instant compatibility score with actionable recommendations.

---

## 1. Overview

The ATS Resume Checker helps you optimize your resume for better compatibility with Applicant Tracking Systems. Simply upload your resume and paste a job description to get:

- An ATS compatibility score (0-100%)
- Detailed recommendations for improvement
- Analysis of keywords, sections, and formatting
- Tips to pass ATS filters

**No installation required** - Everything runs in your browser!

---

## 2. Setup Instructions

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- Your resume in PDF format
- A job description to analyze against

### Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/ats-checker.git
cd ats-checker

# Open in browser
start index.html          # Windows
open index.html           # macOS
xdg-open index.html       # Linux
```

Or simply download the files and open `index.html` directly.

**That's it! No server, no installation required.**

---

## 3. How to Use

### Step 1: Upload Resume
- Click "Upload Resume (PDF)" button
- Select your resume PDF file
- Wait for text extraction to complete

### Step 2: Paste Job Description
- Copy the job description from the job posting
- Paste it into the "Job Description" field

### Step 3: Get Score
- Click "Get ATS Score" button
- View your ATS compatibility score
- Read the personalized recommendations

### Step 4: Optimize
- Update your resume based on recommendations
- Re-upload and check score again
- Target a score of 70%+ for best results

---

## 4. Scoring System

Your ATS score is calculated based on:

```
Resume Sections (25 pts)
├─ Summary (5 pts)
├─ Skills (5 pts)
├─ Education (5 pts)
├─ Experience (5 pts)
└─ Projects (5 pts)

Keyword Matching (40 pts)
└─ % of job description keywords found in resume

Action Verbs (15 pts)
├─ Developed (3 pts)
├─ Managed (3 pts)
├─ Designed (3 pts)
├─ Created (3 pts)
└─ Implemented (3 pts)

Contact Information (10 pts)
├─ Email address (5 pts)
└─ Phone number (5 pts)

Format Quality (10 pts)
└─ No images or icons detected

TOTAL: 100 POINTS
```

### Score Interpretation

- **80-100%** - Excellent ✓ Ready to apply
- **70-79%** - Good ✓ Should pass most ATS
- **60-69%** - Fair ⚠ Needs improvements
- **Below 60%** - Poor ✗ Significant updates needed

---

## 5. Tips for Better Scores

### Keywords
- Use exact words from job description in your resume
- Mirror technical skills and qualifications listed
- Include industry-specific terminology

### Structure
- Use clear section headings: Summary, Skills, Education, Experience, Projects
- Keep formatting simple and clean
- Use bullet points for easy scanning

### Content
- Start experience bullets with action verbs (developed, managed, designed, etc.)
- Quantify achievements when possible
- Focus on results, not just responsibilities

### Formatting
- Save as text-based PDF (not scanned images)
- Use standard fonts: Arial, Calibri, Times New Roman
- Avoid images, graphics, icons, and tables
- Single column layout works best

### Contact
- Always include professional email address
- Always include phone number
- Consider adding LinkedIn URL

---

## 6. File Structure

```
ats-checker/
├── index.html           # Main application UI
├── script.js            # Resume analysis logic
├── style.css            # Styling and layout
└── README.md            # This file
```

---

## 7. Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **PDF Parsing**: PDF.js v2.16.105
- **Architecture**: Client-side only (no backend)

### Dependencies

```
PDF.js v2.16.105 - Loaded via CDN
https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.16.105/pdf.min.js
```

---

## 8. Browser Support

| Browser | Support |
|---------|---------|
| Chrome  | ✓ Recommended |
| Firefox | ✓ Full support |
| Safari  | ✓ Full support |
| Edge    | ✓ Full support |
| IE      | ✗ Not supported |

---

## 9. Privacy & Security

✓ **100% Private** - All processing happens in your browser  
✓ **No Upload** - Your resume never leaves your computer  
✓ **No Tracking** - No data collection or analytics  
✓ **No Cookies** - No persistent data storage  

Your resume data is completely private and secure.

---

## 13. Contributing

Found a bug? Have an idea? We'd love your help!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 14. License

MIT License - Free for personal and commercial use

---

## Output
![ATS RESUME ANALYZER](https://drive.usercontent.google.com/download?id=1NkuuQcA2rq9qoRLF-0G37Y2lgFfLccAe)


 
