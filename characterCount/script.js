function countCharacters() {
    const textInput = document.getElementById('textInput').value;
    const charCount = textInput.length;
    document.getElementById('charCount').textContent = `Total characters: ${charCount}`;
  }