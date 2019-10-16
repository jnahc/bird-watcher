console.log(`yup`)

const $form = $(`form`);

let $email = $(`#exampleInputEmail1`).val();
let $dropdown = $(`#exampleFormControlSelect1`).val();
let $password = $(`exampleInputPassword1`).val();
let $textform = $(`exampleFormControlTextarea1`).val();
let $event1 = $(`#event1`);
let $event2 = $(`#event2`);
let $event3 = $(`#event3`);
let $event4 = $(`#event4`);
let eventsArr = [];

$event1.click(function(event){
  console.log(`1 pressed`);
  eventsArr.push("event1");
  console.log(eventsArr)
})
$event2.click(function(event){
  console.log(`2 pressed`);
  eventsArr.push("event2");
  console.log(eventsArr)
})
$event3.click(function(event){
  console.log(`3 pressed`);
  eventsArr.push("event3");
  console.log(eventsArr)
})
$event4.click(function(event){
  console.log(`4 pressed`);
  console.log(eventsArr)
  eventsArr.push("event4");
})

let data = `{
  "email":"${$email}",
  "dropdown":"${$dropdown}",
  "password":"${$password}",
  "textform":"${$textform}",
  "events":"${eventsArr}"
}`



$form.submit(function(event){
  event.preventDefault();
  console.log(`submitted`)
  apiUrl = `http://localhost:4000/api/v1/subscribers`

  // let $email = $(`#exampleInputEmail1`).val();
  // let $dropdown = $(`#exampleFormControlSelect1`).val();
  // let $password = $(`#exampleInputPassword1`).val();
  // let $textform = $(`#exampleFormControlTextarea1`).val();

  // let testData = `{
  // "firstName":"${$email}",
  // "lastName":"${$dropdown}",
  // "email":"${$password}",
  // "region":"${$textform}"
  // "events":"${eventsArr}"
  // }`

  let testData = `{
    "firstName":"test",
    "lastName":"data",
    "email":"test@test.com",
    "region":["region"],
    "events":["event"],
    "frequency":"yup"
    }`

console.log (testData)
  
  $.ajax({
    method: `POST`,
    url: `${apiUrl}`,
    data: {
      "firstName":"testkjehfkjshefk",
      "lastName":"data",
      "email":"test@test.com",
      "region":["region"],
      "events":["event"],
      "frequency":"yup"
      },
    success: console.log(`success`),
    error: (error) => {
      console.log({error});
    }
  })
})

