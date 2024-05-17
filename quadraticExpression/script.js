// Get the input elements
const coefficientAElement = document.getElementById('coefficientA');
const coefficientBElement = document.getElementById('coefficientB');
const coefficientCElement = document.getElementById('coefficientC');
const solutionElement = document.getElementById('solution');

function solveQuadratic() {
   const a = parseFloat(coefficientAElement.value);
   const b = parseFloat(coefficientBElement.value);
   const c = parseFloat(coefficientCElement.value);

   const quadratic = quadraticEq(a, b, c);
   if (quadratic) {
     solutionElement.innerHTML = `The solutions are x1 = ${quadratic.x1} and x2 = ${quadratic.x2}`;
   } else {
     solutionElement.innerHTML = "No real solutions";
   }
}

function quadraticEq(a, b, c) {
     const discriminant = b*b - 4*a*c;

     if (discriminant > 0) {
         const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
         const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
         return {
             x1: x1.toFixed(2),
             x2: x2.toFixed(2)
         };
     } else if (discriminant === 0) {
         const x = -b / (2*a);
         return {
             x1: x.toFixed(2),
             x2: x.toFixed(2)
         };
     } else {
         return null;
     }
}