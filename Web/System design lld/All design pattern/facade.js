/*
If you are building a service11 which can extended with similar kind of service we can use this
*/

class BaseAuthSystem {
    authenticate(username) {
        throw new Error('This is base class');
    }
}

class GoogleAuthProvider extends BaseAuthSystem {
    authenticate(userName) {
        console.log(`Google authenticated with user name ${userName}`);
    }
}

class LinkedInAuthProvider extends BaseAuthSystem {
    authenticate(userName) {
        console.log(`LinkedIn authenticated with user name ${userName}`);
    }
}

class Auth {
    constructor() {
        this.google = new GoogleAuthProvider();
        this.linkedIn = new LinkedInAuthProvider();
    }

    googleAuth(username) {
        this.google.authenticate(username);
    }
    linkedInAuth(username) {
        this.linkedIn.authenticate(username);
    }
}

const auth = new Auth();
console.log(auth.googleAuth('Amit kumar'));
console.log(auth.linkedInAuth('Amit kumar'));