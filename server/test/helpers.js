var chai = require('chai');
var app = require('../app.js');
var supertest = require('supertest');  

global.app = app;  
global.expect = chai.expect;  
global.should = chai.should;  
global.request = supertest(app);  