 function solveQuadratic() {
    const a = parseFloat(document.getElementById('a').value);
    const b = parseFloat(document.getElementById('b').value);
    const c = parseFloat(document.getElementById('c').value);

    const discriminant = b*b - 4*a*c;

    if (discriminant > 0) {
      const x1 = (-b + Math.sqrt(discriminant)) / (2*a);
      const x2 = (-b - Math.sqrt(discriminant)) / (2*a);
      document.getElementById('solution').innerHTML = `The solutions are x1 = ${x1.toFixed(2)} and x2 = ${x2.toFixed(2)}`;
    } else if (discriminant === 0) {
      const x = -b / (2*a);
      document.getElementById('solution').innerHTML = `The solution is x = ${x.toFixed(2)}`;
    } else {
      document.getElementById('solution').innerHTML = "No real solutions";
    }
  }