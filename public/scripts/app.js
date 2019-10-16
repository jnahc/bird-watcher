console.log(`yup`)

let $form = $(`form`);

$form.submit(function(event){
  event.preventDefault();
  console.log(`submitted`)
  apiUrl = `http://localhost:4000/api/v1/subscribers`

  let $firstName = $(`#firstname`).val();
  let $lastName = $(`#lastname`).val();
  let $email = $(`#email`).val();
  let $frequency = $(`#frequency`).val();
  let $socialEvent = $(`#social-event`).is(`:checked`);
  let $academicEvent = $(`#academic-event`).is(`:checked`)
  let $outingsEvent = $(`#outings-event`).is(`:checked`)
  let $pacificNorthwest = $(`#pnw`).is(`:checked`)
  let $californiaSoutwest = $(`#csw`).is(`:checked`)
  let $midwest = $(`#m`).is(`:checked`)
  let $newEngland = $(`#ne`).is(`:checked`)
  let $atlanticCoast = $(`#a`).is(`:checked`)

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

