// ================= ASSIGNMENT 1 =================
// Shopping Cart Summary

const shoppingCart = [
  { id: 101, product: "Laptop", price: 60000, qty: 1, available: true },
  { id: 102, product: "Mouse", price: 800, qty: 2, available: true },
  { id: 103, product: "Keyboard", price: 1500, qty: 1, available: false },
  { id: 104, product: "Monitor", price: 12000, qty: 1, available: true }
];

// filter() in-stock products
const availableItems = shoppingCart.filter(item => item.available);
console.log(availableItems);

// map() → { name, totalCost }
const priceList = shoppingCart.map(item => ({
  name: item.product,
  totalCost: item.price * item.qty
}));
console.log(priceList);

// reduce() → grand total
const cartTotal = shoppingCart.reduce(
  (sum, item) => sum + item.price * item.qty,
  0
);
console.log(cartTotal);

// find() Mouse
const mouseItem = shoppingCart.find(item => item.product === "Mouse");
console.log(mouseItem);

// findIndex() Keyboard
const keyboardPos = shoppingCart.findIndex(item => item.product === "Keyboard");
console.log(keyboardPos);



// ================= ASSIGNMENT 2 =================
// Student Performance Dashboard

const studentList = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

// filter() passed students
const passed = studentList.filter(s => s.marks >= 40);
console.log(passed);

// map() add grade
const gradedStudents = studentList.map(s => {
  let grade =
    s.marks >= 90 ? "A" :
    s.marks >= 75 ? "B" :
    s.marks >= 60 ? "C" : "D";
  return { ...s, grade };
});
console.log(gradedStudents);

// reduce() average marks
const avgMarks =
  studentList.reduce((total, s) => total + s.marks, 0) /
  studentList.length;
console.log(avgMarks);

// find() marks 92
const topper = studentList.find(s => s.marks === 92);
console.log(topper);

// findIndex() Kiran
const kiranPos = studentList.findIndex(s => s.name === "Kiran");
console.log(kiranPos);



// ================= ASSIGNMENT 3 =================
// Employee Payroll Processor

const staff = [
  { id: 201, name: "Amit", salary: 45000, dept: "IT" },
  { id: 202, name: "Neha", salary: 60000, dept: "HR" },
  { id: 203, name: "Rahul", salary: 75000, dept: "IT" },
  { id: 204, name: "Pooja", salary: 30000, dept: "Sales" }
];

// filter() IT department
const itStaff = staff.filter(e => e.dept === "IT");
console.log(itStaff);

// map() add netSalary
const payroll = staff.map(e => ({
  ...e,
  netSalary: e.salary * 1.1
}));
console.log(payroll);

// reduce() total payout
const totalPayout = staff.reduce((sum, e) => sum + e.salary, 0);
console.log(totalPayout);

// find() salary 30000
const lowSalaryEmp = staff.find(e => e.salary === 30000);
console.log(lowSalaryEmp);

// findIndex() Neha
const nehaPos = staff.findIndex(e => e.name === "Neha");
console.log(nehaPos);



// ================= ASSIGNMENT 4 =================
// Movie Streaming Platform

const movieList = [
  { id: 1, title: "Inception", genre: "Sci-Fi", rating: 8.8 },
  { id: 2, title: "Joker", genre: "Drama", rating: 8.4 },
  { id: 3, title: "Avengers", genre: "Action", rating: 8.0 },
  { id: 4, title: "Interstellar", genre: "Sci-Fi", rating: 8.6 }
];

// filter() Sci-Fi movies
const sciFi = movieList.filter(m => m.genre === "Sci-Fi");
console.log(sciFi);

// map() title with rating (FIXED)
const movieLabels = movieList.map(
  m => `${m.title} (${m.rating})`
);
console.log(movieLabels);

// reduce() average rating
const avgRating =
  movieList.reduce((sum, m) => sum + m.rating, 0) /
  movieList.length;
console.log(avgRating);

// find() Joker
const joker = movieList.find(m => m.title === "Joker");
console.log(joker);

// findIndex() Avengers
const avengersPos = movieList.findIndex(m => m.title === "Avengers");
console.log(avengersPos);



// ================= ASSIGNMENT 5 =================
// Bank Transaction Analyzer

const bankTxns = [
  { id: 1, mode: "credit", amount: 5000 },
  { id: 2, mode: "debit", amount: 2000 },
  { id: 3, mode: "credit", amount: 10000 },
  { id: 4, mode: "debit", amount: 3000 }
];

// filter() credit transactions
const credits = bankTxns.filter(t => t.mode === "credit");
console.log(credits);

// map() amounts
const txnAmounts = bankTxns.map(t => t.amount);
console.log(txnAmounts);

// reduce() final balance
const balance = bankTxns.reduce((bal, t) =>
  t.mode === "credit" ? bal + t.amount : bal - t.amount
, 0);
console.log(balance);

// find() first debit
const firstDebitTxn = bankTxns.find(t => t.mode === "debit");
console.log(firstDebitTxn);

// findIndex() amount 10000
const txnIndex = bankTxns.findIndex(t => t.amount === 10000);
console.log(txnIndex);
