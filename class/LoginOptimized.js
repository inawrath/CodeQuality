'use strict';

// This class is used for logins
class LoginOptimized {
    constructor(list_users) {
        this.sessions = new Map();
        this.users = new Map();
        for(let user in list_users){
            this.users.set(user, list_users[user]);
        }
    }

    logout(user) {
        if (this.sessions.has(user)) {
            this.sessions.delete(user);
        }
    }

    // Checks if user exists
    userExists(user) {
        return this.users.has(user);
    }

    // Register user
    registerUser(user, password) {
        if (this.userExists(user)) return;
        this.users.set(user, password);
    }

    removeUser(user) {
        if (this.userExists(user)) {
            this.users.delete(user);
        }
    }

    checkPassword(user, password) {
        return this.userExists(user) && this.users.get(user) == password;
    }

    updatePassword(user, oldPassword, newPassword) {
        // First we check if the user exists
        if (this.userExists(user) && this.users.get(user) == oldPassword) {
            this.users.set(user, newPassword);
            return true;
        }
        return false;
    }

    login(user, password) {

        if (this.userExists(user) && this.users.get(user) == password) {
            this.sessions.set(user, true);
        }
    }
}

module.exports = LoginOptimized;