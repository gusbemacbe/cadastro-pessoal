$('#phone').click( function( event ) {
 console.log('phone');
       this.oninvalid = function(e) {
           e.target.setCustomValidity("");
           if (!e.target.validity.valid) {
               e.target.setCustomValidity("Please enter a valid phone");
           }
       };
       this.oninput = function(e) {
           e.target.setCustomValidity("");
       };
});