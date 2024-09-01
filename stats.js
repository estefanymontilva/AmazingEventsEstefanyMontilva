import { displayStatistics} from './modules/functions.js';
//....................................

  function principal() {


    let array = {}
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json()) // comvierte de txt a (objeto) en json 
    .then(info => { 
        console.log(info);
        displayStatistics(info)
        
    })
  }

principal()
