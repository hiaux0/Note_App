var requirejs = require('requirejs'),
    port = process.env.PORT || 3000;


// requirejs.config({
//     baseUrl: "app",
//     paths: {
//         // lib path (external libs)
//         jquery: 'lib/jquery.min',
//         context_menu_lib: 'lib/jquery.contextMenu',
//         // app path (my js)
//         app_helper: 'myLib/app_helper/app_helper',
//         context_menu_logic: 'myLib/context_menu/cm_logic',
//         drag_drop: 'myLib/drag_drop/drag_drop',
//         inline_styles: 'myLib/inline_styles',
//         helper_lib: 'myLib/helper_lib',
//         test: 'test',
//         write_anywhere: 'myLib/write_anywhere/write_anywhere'
//     },
//     nodeRequire:require
// })

//     const dd = requirejs('drag_drop')
//     const wa = requirejs('write_anywhere')
//     dd.listeners.evListener()
//     wa.listeners.evListener()

requirejs(['test'], function (app) {
    app.listen(port);
    console.log("port conntected");
    
});










// let requirejs = require('requirejs')

// requirejs.config({
//     baseUrl: __dirname,
//     paths: {
//         // lib path (external libs)
//         jquery: 'lib/jquery.min',
//         context_menu_lib: 'lib/jquery.contextMenu',
//         // app path (my js)
//         app_helper: 'myLib/app_helper/app_helper',
//         context_menu_logic: 'myLib/context_menu/cm_logic',
//         drag_drop: 'myLib/drag_drop/drag_drop',
//         inline_styles: 'myLib/inline_styles',
//         helper_lib: 'myLib/helper_lib',
//         test: 'myLib/test',
//         write_anywhere: 'myLib/write_anywhere/write_anywhere'
//     },
//     nodeRequire:require
// })

// requirejs(['jquery','test','helper_lib','app_helper','drag_drop','write_anywhere'], function($,test,helper,ah,dd,wa) {
//     dd = requrequirejsire('drag_drop')
//     wa = requirejs('write_anywhere')
//     dd.listeners.evListener()
//     wa.listeners.evListener()
// })
    
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
// //    
// //      Routes
// //
// ////////////////////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////

// // basic requires
// var methodOverride = require("method-override"),
//     bodyParser 	   = require("body-parser"),
//     mongoose       = require("mongoose"),
//     express    	   = require("express"),
//     app        	   = express();

// //basic setup
// app.set("view engine" , "ejs");
// app.use(bodyParser.urlencoded({extended:true}));
// app.use(methodOverride("_method"));
// // app.use(methodOverride("_method"));

// // use jquery
// // app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

// //connect to mongoose
// // mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/hori_app");
//                             // test
//                             // mongoose.connect(process.env.MONGOLAB_URI || "mongodb://localhost/hori_app_test");

// // tell express to serve additinoal directories
// app.use(express.static(__dirname+'/models'));
// app.use(express.static(__dirname+'/public'));


// // add seed for database
// // var seedDB = require("./seed.js");
// // requiring models
// // var Hori = require("./models/hori");
// // console.log(Hori.find());


// // seedDB(); to check database
// // ===============================================================
// // ========================= Hori Routes =========================

// // =============== index routes

// //V1 Setting up routes before moving them out to seperate files
// app.get("/" , function(req, res) {
// 	res.render("index.html");
// });


// // tell express to listen to port 3000
// app.listen(3000, function(){
//     console.log("port connected")
// });







