// ================= HANDS-ON 1 =================
// Smart Login Status Engine

let loggedIn = true;
let profileDone = false;

let statusMessage;

// Check login & profile status
if (!loggedIn) {
    statusMessage = "Please login";
} 
else if (!profileDone) {
    statusMessage = "Complete your profile";
} 
else {
    statusMessage = "Welcome back!";
}

console.log("Result:", statusMessage);



// ================= HANDS-ON 2 =================
// Course Price Tag Labeler

let coursePrice = 1299;
let priceLabel;

if (coursePrice < 500) {
    priceLabel = "Budget Course";
}
else if (coursePrice >= 500 && coursePrice <= 1000) {
    priceLabel = "Standard Course";
}
else {
    priceLabel = "Premium Course";
}

console.log("Course Type:", priceLabel);



// ================= HANDS-ON 3 =================
// Enrollment Eligibility Checker

let paymentDone = true;
let basicsCompleted = false;

// Ternary operator
let enrollMessage = (paymentDone && basicsCompleted)
    ? "Enroll Now"
    : "Complete Requirements";

console.log("Enrollment Status:", enrollMessage);