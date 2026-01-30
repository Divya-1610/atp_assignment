// ================= ASSIGNMENT 1 =================
// User Profile Manager

const account = {
  userId: 101,
  fullName: "Ravi",
  mail: "ravi@gmail.com",
  role: "student",
  active: true
};

// Read and print name & email
console.log("Name:", account.fullName);
console.log("Email:", account.mail);

// Add new property: lastLogin
account.lastLogin = "2026-01-01";

// Update role
account.role = "admin";

// Remove active status
delete account.active;

// List remaining keys
console.log(Object.keys(account));



// ================= ASSIGNMENT 2 =================
// Student Marks Analyzer

const subjectMarks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};

let totalMarks = 0;
let maxMarks = 0;
let topSubject;

for (let subject in subjectMarks) {
  totalMarks += subjectMarks[subject];

  if (subjectMarks[subject] > maxMarks) {
    maxMarks = subjectMarks[subject];
    topSubject = subject;
  }
}

// Total marks
console.log("Total Marks:", totalMarks);

// Average marks
console.log("Average Marks:", totalMarks / Object.keys(subjectMarks).length);

// Highest scoring subject
console.log("Highest Scoring Subject:", topSubject);

// Add new subject
subjectMarks.computer = 90;



// ================= ASSIGNMENT 3 =================
// Application Settings Controller

const appSettings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// Toggle theme
appSettings.theme = appSettings.theme === "light" ? "dark" : "light";

// Enable autoSave
appSettings.autoSave = true;

// Remove notifications option
delete appSettings.notifications;

// Freeze settings
Object.freeze(appSettings);