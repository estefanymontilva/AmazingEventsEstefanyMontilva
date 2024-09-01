import { displayEvents, generateFilters,getSelectedCategories,filterEvents,setupEventListeners } from './modules/functions.js';
//....................................

 
    fetch('https://aulamindhub.github.io/amazing-api/events.json')
    .then(response => response.json()) // comvierte de txt a (objeto) en json 
    .then(info => { 
        console.log(info);
  
        displayEvents(info.events);
        getSelectedCategories(info);
        generateFilters(info);
        filterEvents (info) 
        setupEventListeners(info);

    
    })

