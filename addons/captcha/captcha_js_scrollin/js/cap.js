

    function submitUserForm(){
      var response = grecaptcha.getResponse();
      console.log(response.length);
      if(response.length == 0){
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red" > this field is required </span>';
        return false;
      }
      return true;
    }

   function verifyCaptcha(){
     console.log('verified');
     document.getElementById('g-recaptcha-error').innerHTML = '';
   }


