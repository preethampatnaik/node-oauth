module.exports = {
    "googleAuth":{
        "clientID":"786607517955-6qeunh5nlvef2vloka66pgjmlhqdb08m.apps.googleusercontent.com",
        "clientSecret":"Zp---SqK2TyHf1RVxJLJksjB",
        "callbackURL":"http://localhost:9090/oauth/redirect"
    },
     'facebookAuth' : {
        'clientID'        : '872644406216877', // your App ID
        'clientSecret'    : '809873bae438d58c9654fb0fd1dec920', // your App Secret
        'callbackURL'     : 'http://localhost:9090/auth/facebook/callback',
        'profileURL': 'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email'

    }
}