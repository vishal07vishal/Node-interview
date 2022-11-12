//          👇🙂DAY 1🙂👇

// Que-1.What is node.js ?
// Node. js (Node) is an open source development platform for executing JavaScript code server-side.
// Node.js is cross-platform and runs on Windows, Linux, Unix, Mac OS, etc. Node.js is a back-end JavaScript runtime environment.
// Node is useful for developing applications that require a persistent connection from the browser to the
// server and is often used for real-time applications such as chat, news feeds and web push notifications.

// Que-2.What is NPM?
// 1.	NPM stands for the node package manager, npm is used for node dependency management. 
// 2.	Most of the time, we use npm as a server-side node dependency tool 
// 3.	NPM gets installed with NodeJs installation. NPM uses nested dependencies, so we can use different versions of any module in our code.
// 4.	Nested dependencies mean that any dependency is again dependent on another dependency npm: It is a package manager for the JavaScript programming language.
// 5.	It is the default package manager for the JavaScript runtime environment Node.js. Help to manage a project’s dependencies. npm is installed with Node automatically.
// 6.	npm: NPM generates a ‘package-lock.json’ file. the package-lock will generate the same node_modules folder for different npm versions

// Que-3.What are the different modules in Node.js?
//  In Node.js, Modules are the blocks of encapsulated code that communicates with an external application on the basis of their related functionality. Modules can be a single file or a collection of multiples files/folders. The reason programmers are heavily reliant on modules is because of their re-usability as well as the ability to break down a complex piece of code into manageable chunks.
//  Modules are of three types:
//  Core Modules
//  local Modules
//  Third-party Modules


// Que-4.What is the purpose of the module.exports?
//	Module.exports is the instruction that tells Node. js which bits of code (functions, objects, strings, etc.) to “export” from a given file so other files are allowed to access the exported code. 
//	The module.exports is actually a property of the module object in node.js. module. Exports is the object that is returned to the require() call.
//	 By module.exports, we can export functions, objects, and their references from one file and can use them in other files by importing them by require() method. easy to maintain and manage the code base in different modules. 

// Que-5.Difference between default export and named export
//Named Exports: Named exports are useful to export several values. During the import, it is mandatory to use the same name of the corresponding object.
// Named exports allow us to share multiple objects, functions or variables from a single file and were introduced with the release of ES2015.
// Named exports are imported with curly braces in various files and must be imported using the name of the object, function or variable that was exported.
// //Exporting individual features:
//     export var name1 = …, name2 = …, …, nameN; // also let, const
//     // Export list :
//     export {name1, name2, …, nameN };
//     //Exporting everything at once :
//     export {object, number, x, y, boolean, string}
//     // Renaming exports:
//     export {variable1 as name1, variable2 as name2, …, nameN };
//     // export features declared earlier:
//     export {myFunction, myVariable};
//     Default Exports: Default exports are useful to export only a single object, function, variable. During the import, we can use any name to import.Exports without a default tag are Named exports. Exports with the default tag are Default exports.
//     default export:- Using Named and Default Exports at the same time: It is possible to use Named and Default exports in the same file. It means both will be imported in the same file. Example: javascript.
//     function defau(req,res){
//         res.send("default exports")
//     }
//     function named(req,res) {
//         res.send('named exports')
//     }

//     module.exports = default;//default export
//     module.exports = {named};//named export



// Que-6.How do you import any module in Node.js?
// Importing functions or modules enhances the reusability of code.
//     Importing a Module: We need to import the module to use the functions defined in the imported module in another file. The result returned by require() is stored in a variable which is used to invoke the functions using the dot notation.
//     const f = require('./func')