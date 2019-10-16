


console.log(`ADMIN`)
const $userList = $(`#userlist`)



const getSubscribersSuccess = (jsonData) => {
  console.log(jsonData.data[0]);
  $userList.empty();
  jsonData.data.forEach((subscriber) => {
    $userList.prepend(`
    <div id="${subscriber._id}">
      <h4>${subscriber.firstName}</h4>
      <h4>${subscriber.lastName}</h4>
      <p>Regions are ${subscriber.region} <br> email is ${subscriber.email}</p>
      
    </div>
    `);
  })
}
    // $(students.hobbies.map)((hobby) =>{
    // 
    
    // }).join("") get rid of commas

const handleError = (error) => {
  console.log(error);
}

const getSubscribers = () => {
  console.log(`Getting all subscribers`);
  $.ajax({
    method: `GET`, // GET POST PUT DELETE
    url: `http://localhost:4000/api/v1/subscribers`,
    success: getSubscribersSuccess,
    error: handleError,
  });
};

getSubscribers()


// ---------------------------- this was all to go over sync vs async
// document -> async queue -> event queue -> call stack
// getStudents();

// let students = null;

// const logStudents = () => {
//   students = studentData.data;
//   console.log(students);
// }

// console.log(students);

// // setTimeout(() => {
// //   students = [{name: "John"},{name: "Sally"},{name: "Joe"}];
// //   logStudents();
// // },0);

// $.ajax({
//   method: `GET`,
//   url: `http://localhost:3000/api/v1/students`,
//   success: logStudents,
//   error: handleError,

// });


// logStudents();