router.post('/verify', function (req, res, secretToken, done ) {

    secretToken = req.body.secretToken;

    console.log('start');

    User.findOne({'secretToken': secretToken}, function(err, user){

        console.log(user);
        if(err){
            console.log('error');
            return done(err);
        }
        if (!user) {
            console.log('token not ok');

            return done(null, false, {message: 'No User found'});

        }
        console.log(user.secretToken);
        if (user.secretToken == secretToken){

            console.log('token ok');

            user.secretToken = ' ';
            user.active = true;
            user.save(function (err, result) {
                if(err){
                    return done(err);
                }

                return done(null, user);

            });


        }

    });