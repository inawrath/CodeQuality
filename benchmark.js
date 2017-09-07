'use strict';

const Login = require('./class/Login.js'),
    LoginOptimized = require('./class/LoginOptimized.js'),
    Benchmark = require('benchmark'),
    suiteRegister = new Benchmark.Suite,
    suiteLogin = new Benchmark.Suite,
    suiteUpdatePassword = new Benchmark.Suite,
    suiteLogout = new Benchmark.Suite;
let login = new Login({}),
    loginOptimized = new LoginOptimized({});

const rango = 100;

suiteRegister.add('Register-Login', () => {
    for(let index = 0; index < rango; index++) {
        login.registerUser('user' + index, 'pass' + index);
    }
})
    .add('Register-LoginOptimized', () => {
        for(let index = 0; index < rango; index++) {
            loginOptimized.registerUser('user' + index, 'pass' + index);
        }
    }).on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();
console.log();

suiteLogin.add('Login-Login', () => {
    for(let index = 0; index < rango; index++) {
        login.login('user' + index, 'pass' + index);
    }
})
    .add('Login-LoginOptimized', () => {
        for(let index = 0; index < rango; index++) {
            loginOptimized.login('user' + index, 'pass' + index);
        }
    }).on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();
console.log();
console.log();
console.log('Solo se realizan 5 cambios de contraseña con el primer updatePassword, ya que al no ser optimo, demora demasiado en realizar el benchmark');

suiteUpdatePassword.add('UpdatePassword-LoginOptimized', () => {
    for(let index = 0; index < rango; index++) {
        loginOptimized.updatePassword('user' + index, 'pass' + index, 'pass' + index + index);
    }
})
    .add('UpdatePassword-Login', () => {
        for(let index = 0; index < rango / 20; index++) {
            login.updatePassword('user' + index, 'pass' + index, 'pass' + index + index);
        }
    }).on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();
console.log();

suiteLogout.add('Logout-Login', () => {
    for(let index = 0; index < rango; index++) {
        login.logout('user' + index);
    }
})
    .add('Logout-LoginOptimized', () => {
        for(let index = 0; index < rango; index++) {
            loginOptimized.logout('user' + index);
        }
    }).on('cycle', (event) => {
        console.log(String(event.target));
    })
    .on('complete', function() {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run();
console.log();