// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE function
    console.log(`DB CONNECTED`)
})();

// If we are writing 2 IIFE so we have to add semi colun on the first IIFE

((name) => {
    // Simple IIFE function
    console.log(`DB CONNECTED TWO ${name}`)
})("Hasnain")