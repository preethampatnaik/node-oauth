module.exports=function(app,passport){
    
    app.get('/',function(req,res){
        res.render('index.ejs');
    })

    app.get('/logout',function(req,res){
        req.logout();
        res.redirect('/');
    })
    app.get('/profile', isLoggedIn, function(req, res) {
        console.log("test");
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    app.get('/oauth',passport.authenticate('google',{scope:['profile','email']}))

    app.get('/oauth/redirect',passport.authenticate('google',{
        successRedirect : '/profile',
        failureRedirect : '/'
    }))    
    // facebook -------------------------------

        // send to facebook to do the authentication
        app.get('/auth/facebook', passport.authenticate('facebook', { scope : 'email' }));

        // handle the callback after facebook has authorized the user
        app.get('/auth/facebook/callback',
            passport.authenticate('facebook', {
                successRedirect : '/profile',
                failureRedirect : '/'
            }));

    function isLoggedIn(req,res,next){
        if(req.isAuthenticated()){
            return next()
        }else{
            res.redirect('/');
        }
    }
}