

    var CaptchaCallback = function() {
        grecaptcha.render('RecaptchaField', {'sitekey' : '6LfFBZIUAAAAAK6tBMFZL51aWitAL1pYFInu0lip'});

    };


    function submitForm(){
      var response = grecaptcha.getResponse();
      console.log(response.length);
      if(response.length == 0){
        document.getElementById('g-recaptcha-error').innerHTML = '<span style="color:red" > captcha required </span>';
        
        return false;
      }
      return true;
    }

    function verifyCaptcha(){
     console.log('verified');
     document.getElementById('g-recaptcha-error').innerHTML = '';
    }
