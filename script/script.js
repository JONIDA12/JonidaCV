const words = [
    "hard working",
    "disciplined",
    "results-driven"
  ];
  const paragraph = document.querySelector(".typing-animation span");
  
  let currentWordIndex = 0;
  
  function typeOutWord(word) {
    for (let i = 0; i < word.length; i++) {
      setTimeout(() => {
        paragraph.textContent += word[i];
      }, i * 120);
    }
  }
  
  function deleteWord() {
    const word = paragraph.textContent;
    if (word.length > 0) {
      paragraph.textContent = word.slice(0, -1);
      setTimeout(deleteWord, 120);
    } else {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      typeOutWord(words[currentWordIndex]);
      setTimeout(deleteWord, 3000);
    }
  }
  
  typeOutWord(words[currentWordIndex]);
  setTimeout(deleteWord, 3000);