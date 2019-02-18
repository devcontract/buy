
    var CaptchaCallback = function() {
        grecaptcha.render('RecaptchaField1', {'sitekey' : '6LfFBZIUAAAAAK6tBMFZL51aWitAL1pYFInu0lip'});
        grecaptcha.render('RecaptchaField2', {'sitekey' : '6LfFBZIUAAAAAK6tBMFZL51aWitAL1pYFInu0lip'});
    };


    function submitLoginForm(){
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

    function submitRegForm(){
      var response = grecaptcha.getResponse();
      console.log(response.length);
      if(response.length == 0){
        document.getElementById('g-recaptcha-error0').innerHTML = '<span style="color:red" > this field is required </span>';
        return false;
      }
      return true;
    }

    function verifyCaptcha(){
     console.log('verified');
     document.getElementById('g-recaptcha-error0').innerHTML = '';
    }
