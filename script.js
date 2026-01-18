let resumeText = "";

// Extract text from PDF
async function extractPDFText(file) {
  const buffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument(buffer).promise;
  let text = "";

  for (let i = 1; i <= pdf.numPages; i++) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    content.items.forEach(i => text += i.str + " ");
  }

  return text.toLowerCase();
}

// Main ATS checker
async function checkATS() {
  const file = document.getElementById("resumeFile").files[0];
  const jobDesc = document.getElementById("jobDesc").value.toLowerCase();

  if (!file || !jobDesc) {
    alert("Please upload resume and job description");
    return;
  }

  resumeText = await extractPDFText(file);

  let score = 0;
  let tips = [];

  // ✅ Section check
  const sections = ["summary", "skills", "education", "experience", "projects"];
  const foundSections = sections.filter(s => resumeText.includes(s)).length;
  score += foundSections * 5;

  if (foundSections < sections.length)
    tips.push("Add missing standard resume sections.");

  // ✅ Keyword matching
  const keywords = [...new Set(jobDesc.split(/\W+/))].filter(w => w.length > 4);
  const matched = keywords.filter(k => resumeText.includes(k)).length;
  const keywordScore = Math.min(40, (matched / keywords.length) * 40);
  score += keywordScore;

  if (keywordScore < 25)
    tips.push("Increase keyword match from job description.");

  // ✅ Action verbs
  const verbs = ["developed", "managed", "designed", "created", "implemented"];
  const verbCount = verbs.filter(v => resumeText.includes(v)).length;
  score += verbCount * 3;

  if (verbCount < 3)
    tips.push("Use more action verbs in experience section.");

  // ✅ Contact info
  if (/\S+@\S+\.\S+/.test(resumeText)) score += 5;
  else tips.push("Add a professional email address.");

  if (/\d{10}/.test(resumeText)) score += 5;
  else tips.push("Add a phone number.");

  // ✅ Images / icons
  if (resumeText.includes("image") || resumeText.includes("icon")) {
    tips.push("Remove images or icons (ATS cannot read them).");
  } else {
    score += 10;
  }

  score = Math.min(100, Math.round(score));

  // Display result
  document.getElementById("result").innerHTML =
    `ATS Score: <span style="color:${score >= 70 ? "green" : "red"}">${score}%</span>`;

  document.getElementById("recommendations").innerHTML =
    "<h3>Recommendations:</h3><ul>" +
    tips.map(t => `<li>${t}</li>`).join("") +
    "</ul>";
}
