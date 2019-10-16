console.log(`yup`)

let $form = $(`form`);

$form.submit(function(event){
  event.preventDefault();
  console.log(`submitted`)
  apiUrl = `http://localhost:4000/api/v1/subscribers`

  let $firstName = $(`#first-name`).val();
  let $lastName = $(`#last-name`).val();
  let $email = $(`#email`).val();
  let $frequency = $(`#frequency`).val();
  let $socialEvent = $(`#social-event`).is(`:checked`);
  let $academicEvent = $(`#academic-event`).is(`:checked`)
  let $outingsEvent = $(`#outings-event`).is(`:checked`)
  let $pacificNorthwest = $(`#pacific-northwest`).is(`:checked`)
  let $californiaSoutwest = $(`#california-southwest`).is(`:checked`)
  let $midwest = $(`#midwest`).is(`:checked`)
  let $newEngland = $(`#new-england`).is(`:checked`)
  let $atlanticCoast = $(`#atlantic-coast`).is(`:checked`)

  let subscriberData = {
    "firstName": `${$firstName}`,
    "lastName": `${$lastName}`,
    "email": `${$email}`,
    "pNWRegion":`${$pacificNorthwest}`,
    "cSWRegion":`${$californiaSoutwest}`,
    "mWRegion":`${$midwest}`,
    "nERegion":`${$newEngland}`,
    "aCRegion":`${$atlanticCoast}`,
    "frequency":`${$frequency}`,
    "socialEvent":`${$socialEvent}`,
    "academicEvent":`${$academicEvent}`,
    "outingsEvent":`${$outingsEvent}`
  }
 
  
  console.log(subscriberData);
  // console.log($socialEvent)

  $.ajax({
    method: `POST`,
    url: `${apiUrl}`,
    data: subscriberData,
    success: console.log(`db entry success`),
    error: (error) => {
      console.log({error});
    }
  })
})

