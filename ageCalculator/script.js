function calculateAge() {
    const birthYear = document.getElementById('birthYear').value;
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    document.getElementById('ageResult').textContent = `Your age is ${age} years.`;
  }