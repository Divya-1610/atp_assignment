//---------------------------------------------------------------------------------
// TASKS
// ------
// MODULE-1 :USER PROCESSING ENGINE
//   -> Get only active users
//   -> Extract names of active users
//   -> Check if any admin exists
//   -> Find user by id
//   -> Deactivate a user immutably

// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
//   -> Sort courses by price (high → low)
//   -> Extract { title, price } only
//   -> Calculate total value of published courses
//   -> Add a new course immutably

// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
//   -> Calculate total cart amount
//   -> Increase quantity of a course (immutably)
//   -> Remove a course from cart
//   -> Check if all cart items are paid courses

// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
//   -> Check if student can delete
//   -> Create a flat list of all unique permissions
//   -> Add new role moderator immutably

const users = [
  { id: 1, name: "Ravi", role: "student", active: true },
  { id: 2, name: "Anil", role: "admin", active: true },
  { id: 3, name: "Suman", role: "student", active: false }
];const courses = [
  { id: 101, title: "JavaScript", price: 999, published: true },
  { id: 102, title: "React", price: 1499, published: false },
  { id: 103, title: "Node", price: 1299, published: true }
];

const cart = [
  { courseId: 101, qty: 1 },
  { courseId: 103, qty: 2 }
];

const roles = {
  admin: ["create", "update", "delete", "view"],
  student: ["view"]
};
//module 1
let activeusers=users.filter(i=>i.active)
console.log("active users:",activeusers)
let activenames=activeusers.map(i=>i.name)
console.log("activeusers names:",activenames)
let anyadmin=users.some(i=>i.role==="admin")
console.log("any admin exists:",anyadmin)
let finduserid=users.find(i=>i.id===2)
console.log(finduserid)   

//module2
let publishedcourses=courses.filter(i=>i.published)
console.log(publishedcourses)
let pricesortingorder=courses.sort((i,j)=>j.price-i.price)
console.log(pricesortingorder)
let details=courses.map(({title,price})=>({
  title,price
}))
console.log("details:",details)
let totalprice=courses.reduce((t,c)=>t+c.price,0)
console.log(totalprice)
courses.push({id: 104, title: "Nodejs", price: 1499, published: true })
console.log(courses)
//module3
let fullcourseinfo=cart.map(i=>{
  let course=courses.find(j=>j.id===i.courseId)
  return {...i,...course}
} )
console.log("full course info:",fullcourseinfo)
let totalcartamount=fullcourseinfo.reduce((t,c)=>t+c.price*c.qty,0)
console.log("total cart amount:",totalcartamount)   
let increasequantity=cart.map(i=>{
  if(i.courseId===101)
  {
    return {...i,qty:i.qty+1}
  }
  return i
})
console.log("increased quantity:",increasequantity)
let removecourse=cart.filter(i=>i.courseId!==103)
console.log("after removing course:",removecourse)
let allpaidcourses=fullcourseinfo.every(i=>i.price>0)
console.log("all cart items are paid courses:",allpaidcourses)
//module4
let rolenames=Object.keys(roles)
console.log("role names:",rolenames)
let studentdelete=roles.student.includes("delete")
console.log("student can delete:",studentdelete)
let allpermissions=new Set()
Object.values(roles).forEach(perms=>{
  perms.forEach(perm=>allpermissions.add(perm))
})
console.log("all unique permissions:",Array.from(allpermissions))
let newroles={...roles,moderator:["update","view"]}
console.log("new roles with moderator:",newroles)
//---------------------------------------------------------------------------------
