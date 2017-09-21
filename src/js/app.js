(function(){
    "use strict";
  getuserData();

  function getuserData(){
    fetch('http://localhost:8000/data/data.json')  
      .then(  
        function(response) {  
          if (response.status !== 200) {  
            console.log('Looks like there was a problem. Status Code: ' +  
              response.status);  
            return;  
          }

          response.json().then(function(data) {  
            console.log(data); 
          });  
        }  
      )  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
      }); 
  }
})();