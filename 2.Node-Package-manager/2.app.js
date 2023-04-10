console.log(global);
console.log(module);

/*in node every file is a module. variables and functions in that files are scoped to that file.when 
 Node automatically wraps the code in each file with an IIFE (Immediately-invoked Function Expression) to create 
 scope.other files only can access them if the file is exported only*/
