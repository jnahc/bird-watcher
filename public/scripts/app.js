console.log(`yup`)

let $form = $(`form`);

$('div').on('click', function() {
  $(this).toggleClass('show-description');
});

$form.submit(function(event){
  event.preventDefault();
  console.log(`submitted`)
  apiUrl = `http://localhost:4000/api/v1/subscribers`

  let $firstName = $(`#firstname`).val();
  let $lastName = $(`#lastname`).val();
  let $email = $(`#email`).val();
  let $frequency = $(`#frequency`).val();
  let $socialEvent = $(`#social-events`).is(`:checked`);
  let $academicEvent = $(`#academic-events`).is(`:checked`)
  let $outingsEvent = $(`#outings-events`).is(`:checked`)
  let $pacificNorthwest = $(`#pacific-northwest-region`).is(`:checked`)
  let $californiaSoutwest = $(`#california-southwest-region`).is(`:checked`)
  let $midwest = $(`#midwest-region`).is(`:checked`)
  let $newEngland = $(`#new-england-region`).is(`:checked`)
  let $atlanticCoast = $(`#atlantic-region`).is(`:checked`)

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

