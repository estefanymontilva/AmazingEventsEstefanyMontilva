import { displayEvents, generateFilters,getSelectedCategories,filterEvents,setupEventListeners, filterPastEvents } from './modules/functions.js';
//....................................

  

    fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json())  
    .then(info => { 
        console.log(info);
  
        displayEvents(info.events);
        getSelectedCategories(info);
        generateFilters(info);
        filterEvents (info) 
        setupEventListeners(info);
        filterEventsByCategory(info)

    
    })
  
