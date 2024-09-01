import { displayEventDetails } from './modules/functions.js';

const params = new URLSearchParams(window.location.search);
  const eventId = params.get('id');
if(eventId){
  
  fetch('https://aulamindhub.github.io/amazing-api/events.json')
  .then(response => response.json()) 
  .then(info => { 
    const event = info.events.find(e => e._id === parseInt(eventId));
    if (event) {
      
      displayEventDetails(event)
    }
      console.log(info);
    
      console.log(displayEventDetails);
      
      

  
  })
  

}
