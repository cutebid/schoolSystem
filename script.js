


    // getAllStudents: function(){},
    // getStudent: function(id){},
    // modifyStudent: function(id){},
    // deleteStudent: function(id){},
    // employStaff: function(name, gender, subject, yearsofexperience, qualification, contact){},
    // getAllStaffs: function(){},
    // getStaffId: function(id){},
    // modifyStaff: function(id){},
    // deleteStaff: function(id){},
    // getSchoolAccount: function(){},
    // getSchoolInfo: function(){},
//}



//function constructor
//  function Person(age, color) {
//      this.Age = age;
//      this.Color = color
//  }
// create a new object
//  var michael = new Person(13, "Blue");
//  console.log(michael.Age + " " + michael.Color );
 
 // create a School Object
 let studentid = 1

let School = {
    name: " King's College",
    address: " Lagos ",
    student: [],
    staff: [],
    
 };     

   
 // register students

 School.registerStudent= function( name, middleName, surname, state,sex, age, gender, sClass, schoolFee ){
    let id = studentid++
    let studentinfo = { 
                        id, name, middleName, surname,state, sex, age, gender, sClass, schoolFee
                      };
            return  this.student.push(studentinfo);

        //  for(let i = 0; i < School.student.length; i++) {
        // if(name == this.student[i].name && middleName == this.student[i].middleName && surname == this.student[i].surname){
        //     console.log("this name has been entered")
        // }

        //            }
     }
  
    // employ staffs 
   
   let staffid = 1
     School.employStaff = function(name, middleName, surname, state, age, gender, subject, yearsOfExperience, qualification, contact, salary){
        let id = staffid++
        let staffinfo = {id, name, middleName, surname, state, age, gender, subject, yearsOfExperience, qualification, contact, salary};
          return this.staff.push(staffinfo);
         }
    
 // retrieve all student

       School.getAllStudents = function(){
       for(let i = 0; i < School.student.length; i++) {
            return School.student;
       }
}

  // retrieve allstaff

  School.getAllStaff = function(){
       for(let i = 0; i < this.staff.length; i++) {
       return this.staff;
       }
}

// retrieve School info
 
School.getSchoolInfo = function(){
     for(let schinfo in School) {
        //  console.log(Object.values(School));
        return School

     }
 }
 

 // get student by their id

    School.getStudentById = function(id){
         for(let i = 0; i < this.student.length; i++) {
             if(id === this.student[i].id) {
                 return( this.student[i])
             }
         }
    }

    //  get student by name

    School.getStudentByName = function(name){
                    for(let i = 0; i < this.student.length; i++) {
                               if(name === this.student[i].name) {
                                   return this.student[i];
                               }
                    }
       }

    //     get staff by id

    School.getStaffById = function(id){
        for(let i = 0; i < this.staff.length; i++) {
            if(id === this.staff[i].id) {
                return( this.staff[i])
            }
        }
   }

   // get staff by name

   School.getStaffByName = function(name){
    for(let i = 0; i < this.staff.length; i++) {
               if(name === this.staff[i].name) {
                   return this.staff[i];
               }
    }
}


    // Modify student

   School.modifyStudent = function(id, keys, value){
        for(let i = 0; i < this.student.length; i++){
            if (id === this.student[i].id){
                this.student[i][keys] = value
                return this.student[i]
            }  
        }  
    }

    // deletestudent
    School.delStudent = function(id){
        for(let i = 0; i < this.student.length; i++) {
            if(id === this.student[i].id) {
                      this.student.splice(i,1)
                     return this.student
            }
        }
   }

   // modify staff
   School.modifyStaff = function(id, keys, value){
    for(let i = 0; i < School.staff.length; i++){
        if (id === this.staff[i].id){
            this.staff[i][keys] = value
            return this.staff[i]
        }  
    }  
}
// delete Staff
School.delStaff = function(id){
    for(let i = 0; i < this.staff.length; i++) {
        if(id === this.staff[i].id) {
                  this.staff.splice(i,1)
                 return this.staff
        }
    }
}


//     get student account
let studentfee = 0;
let staffsalary = 0;
let schoolaccount= 0
  School.getSchoolAccount = function(){
          for(let i = 0; i < this.student.length; i++) {
               studentfee += parseInt(this.student[i].schoolFee)
               staffsalary += parseInt(this.staff[i].salary)
           return    schoolaccount = studentfee - staffsalary
          }

  }


   School.registerStudent("shola","hawa", "audu", "lagos",  "19", "female", "jss2", "10000");  
   School.registerStudent("tola","bola", "adamu", "lagos",  "19", "female", "jss2", '10000');   
   School.registerStudent("abdul","ige", "usman", "lagos",  "19", "female", "jss2", '10000');   
   School.registerStudent("lola","fola", "adewale", "lagos",  "19", "female", "jss2", '10000');   
   School.registerStudent("biola","mujib", "mujiba", "lagos",  "19", "female", "jss2", '10000');   
   School.registerStudent("sholar","peter", "john", "lagos",  "19", "female", "jss2", '10000');   
   School.registerStudent("fola","dotun", "sule", "lagos",  "19", "female", "jss2", '10000');   
   
  
 School.employStaff("shola", "lola", "adewale", "abuja", "30", "male",  "english", "2years","firstclass","ibadan", '80000');
 School.employStaff("shola", "lola", "adewale", "abuja", "30", "male",  "english", "2years","firstclass","ibadan", '80000');
 School.employStaff("shola", "lola", "adewale", "abuja", "30", "male",  "english", "2years","firstclass","ibadan", '80000');
 School.employStaff("shola", "lola", "adewale", "abuja", "30", "male",  "english", "2years","firstclass","ibadan", '80000');
 School.employStaff("shola", "lola", "adewale", "abuja", "30", "male",  "english", "2years","firstclass","ibadan", '80000');
 School.employStaff("shola", "lola", "adewale", "abuja", "30", "male",  "english", "2years","firstclass","ibadan", '80000');
   // using object constructor to create the object and the push the object inside the student array
 
/*let School = {
    name: " King's College",
    address: " Lagos ",
    student: [],
    staff: [],
    get getAllStudents(){
        for(let i = 0; i < this.student.length; i++) {
             console.log(this.student[i]);
         }
}
 
}
 console.log(School.getAllStudents) 
       

function Studentinfo(name, age, sex){
    this.name = name
    this.age = age                    
    this.sex = sex                
      };  
   
    let student1 = new Studentinfo("bola", 15, "female")
    let student2= new Studentinfo("bola", 15, "female")
    let student3 = new Studentinfo("bola", 15, "female")
    let student4 = new Studentinfo("bola", 15, "female")

    School.student.push(student1, student2, student3, student4);
    
    console.log(School.student);*/
    

    //  Asiyah
