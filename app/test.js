define(['express'], function (express) {
    //V1
    var path = require("path")
    let __dirname = path.resolve(path.dirname(''));

    // basic requires
    var methodOverride = require("method-override"),
        bodyParser = require("body-parser"),
        mongoose = require("mongoose"),
        express = require("express"),
        mime = require("mime")
        app = express();

    //basic setup
    // app.set("view engine", "html");
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(methodOverride("_method"));
    // app.use(methodOverride("_method"));

    // use jquery
    // app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

    //connect to mongoose
    // mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/hori_app");
    // test
    // mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/hori_app_test");

    // tell express to serve additinoal directories
    // app.use(express.static(__dirname + '/stylesheets'));
    // app.use(express.static('/stylesheets'));
    app.use(express.static('public'));
    app.use(express.static('node_modules'));
    app.use(express.static('app'));

    // requiring models
    // var Hori = require("./models/hori");

    // =============== index routes

    //V1 Setting up routes before moving them out to seperate files
    app.get("/", function (req, res) {
        const filepath = path.join(__dirname + '/views/index.html')
        const csspath = path.join(__dirname + 'stylesheets/master.css')
        let type = mime.lookup(csspath)
        console.log(type);
        
        res.sendFile(filepath);
    });

    return app
});







// var express = require('express'),
//     app = express(),
//     port = process.env.PORT || 3000,
//     path = require('path');

// app.use('/public', express.static('public'));
// app.use('/', function (req, res) {
//     res.sendfile(path.join(__dirname + '/index.html'));
// });