// Assignment 1: Daily Temperature Analyzer

const dailyTemps = [32, 35, 28, 40, 38, 30, 42];

// 1. filter() temperatures above 35
let highTemps = dailyTemps.filter(t => t > 35);
console.log("Temperatures above 35:", highTemps);

// 2. map() Celsius → Fahrenheit
let fahrenheitTemps = dailyTemps.map(t => (t * 9/5) + 32);
console.log("Temperatures in Fahrenheit:", fahrenheitTemps);

// 3. reduce() to calculate average temperature
let totalTemp = dailyTemps.reduce((sum, t) => sum + t, 0);
let avgTemp = totalTemp / dailyTemps.length;
console.log("Average Temperature:", avgTemp);

// 4. find() first temperature above 40
let aboveForty = dailyTemps.find(t => t > 40);
console.log("Temperature above 40:", aboveForty);

// 5. findIndex() of temperature 28
let index28 = dailyTemps.findIndex(t => t === 28);
console.log("Index of 28:", index28);


// Assignment 2: Online Course Name Processor

const courseList = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
let longCourses = courseList.filter(c => c.length > 5);
console.log(longCourses);

// 2. map() to uppercase
let upperCourses = courseList.map(c => c.toUpperCase());
console.log(upperCourses);

// 3. reduce() to single string
let courseString = upperCourses.reduce((acc, c) => acc + " | " + c);
console.log(courseString);

// 4. find() the course "react"
let reactCourse = courseList.find(c => c === "react");
console.log(reactCourse);

// 5. findIndex() of "node"
let nodeIndex = courseList.findIndex(c => c === "node");
console.log(nodeIndex);


// Assignment 3: Student Marks List

const studentMarks = [78, 92, 35, 88, 40, 67];

// 1. filter() marks ≥ 40
let passedStudents = studentMarks.filter(m => m >= 40);
console.log("Passed count:", passedStudents.length);

// 2. map() add 5 grace marks
let graceMarks = studentMarks.map(m => m + 5);
console.log("Grace Marks:", graceMarks);

// 3. reduce() highest mark
let highestMark = studentMarks.reduce((max, m) => m > max ? m : max);
console.log("Highest Mark:", highestMark);

// 4. find() first mark below 40
let failedMark = studentMarks.find(m => m < 40);
console.log("First failed mark:", failedMark);

// 5. findIndex() of mark 92
let index92 = studentMarks.findIndex(m => m === 92);
console.log("Index of 92:", index92);