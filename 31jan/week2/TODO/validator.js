//  i. validator.js - Input validation
                      // TODO: Export these validation functions
                      
                      // 1. Validate task title (not empty, min 3 chars)
                    //   function validateTitle(title) {
                        // Your code here
                    //   }
                      
                      // 2. Validate priority (must be: low, medium, high)
                    //   function validatePriority(priority) {
                        // Your code here
                    //   }
                      
                      // 3. Validate due date (must be future date)
                    //   function validateDueDate(date) {
                        // Your code here
                    //   }
                
                    function validateTitle(title) {
                        if (typeof title !== 'string' || title.trim().length < 3) {
                            return false;
                        }   
                        else{
                            return true;
                        }
                    }
                    function validatePriority(priority) {
                        let validPriorities=["low","medium","high"]//array of valid priorities
                        if(validPriorities.includes(priority)){
                            return true;
                        }   else
                        {
                            return false;
                        }
                       
                    }
                    function validateDueDate(date) {
                        let currentDate = new Date();
                        let duedate=new Date(date)// converting string to date
                        if (duedate > currentDate) {
                            return true;
                        } else {
                            return false;
                        }


                    }
                    export {validateTitle,validatePriority,validateDueDate};