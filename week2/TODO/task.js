/* 

 task.js - Task operations
                    // TODO: Import validator functions
                    // import { ... } from './validator.js';
                    
                    const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      // If valid, add to tasks array
                      // Return success/error message
                    }
                    
                    // 2. Get all tasks
                    function getAllTasks() {
                      // Return all tasks
                    }
                    
                    // 3. Mark task as complete
                    function completeTask(taskId) {
                      // Find task and mark as complete
                    }


*/
import {addTask, getAllTasks, completeTask} from './task.js';
console.log(addTask("Complete assignment", "high", "2024-12-31"));
console.log(addTask("Go", "medium", "2022-01-01"));
console.log(getAllTasks());
console.log(completeTask(0));
console.log(getAllTasks());



import {validateTitle,validatePriority,validateDueDate} from './validator.js';
const tasks = [];
                    
                    // 1. Add new task
                    function addTask(title, priority, dueDate) {
                      // Validate using imported functions
                      if (!validateTitle(title)) {
                        return "Invalid title";
                      }
                      if (!validatePriority(priority)) {
                        return "Invalid priority";
                      }
                      if (!validateDueDate(dueDate)) {
                        return "Invalid due date";
                      }
                      if (validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)) {
                        tasks.push({ title, priority, dueDate, completed: false });
                        return "Task added successfully";
                      }
                      return "Task not added";
                    }
                    
                    // // 2. Get all tasks
                     function getAllTasks() {
                        return tasks;
                     }
                    
                    // }
                    
                    // 3. Mark task as complete
                     function completeTask(taskId) {
                        const task = tasks.find((t, index) => index === taskId);    
                        if (task) {
                            task.completed = true;
                            return "Task  complete";
                        }
                        return " not complete";
                    }
                      // Find task and mark as complete
                    // }

                export {addTask, getAllTasks, completeTask};