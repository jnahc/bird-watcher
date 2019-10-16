


console.log(`ADMIN`)
const $userList = $(`#userlist`)



const getSubscribersSuccess = (jsonData) => {
  console.log(jsonData.data[0]);
  $userList.empty();
  jsonData.data.forEach((subscriber) => {
    $userList.prepend(`
    <div id="${subscriber._id}">
      <h4>User ID: ${subscriber._id}"</h4>
      <h4>Full Name: ${subscriber.firstName} ${subscriber.lastName}</h4>
      <h4>Email: ${subscriber.email}</h4>
      <p>Email Frequency: ${subscriber.frequency}</p>
      <p>Locations Subscribed:
      <ul>
      <li>Pacific Northwest Region: ${subscriber.pNWRegion}</li>
      <li>California Southwest Region: ${subscriber.cSWRegion}</li>
      <li>Midwest Region: ${subscriber.MWRegion}</li>
      <li>New England Region: ${subscriber.nERegion}</li>
      <li>Atlantic Coast Region: ${subscriber.aCRegion}</li>
      </ul>
      <p>Event Types Subscribed:
      <ul>
      <li>Social Events: ${subscriber.socialEvent}</li>
      <li>Academic Events: ${subscriber.academicEvent}</li>
      <li>Outings: ${subscriber.outingsEvent}</li>
      </ul>
      </p>
      
    </div>
    `);
  })
}


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