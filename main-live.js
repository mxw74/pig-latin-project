const pigLatin = (word) => {
    word = document.getElementById('user-input').value
    word = word.toLowerCase().trim();
    const vowel = ['a','e','i','o','u'];
    let translated = "";
    let firstLetter = word.slice(0, 1);
  
      if (vowel.includes(firstLetter)) {
  
        // console.log( word + 'yay')
        translated = word + 'yay'
        document.getElementById('pigLatin').innerHTML = response = translated
        return word + 'yay'
  
      } else {
  
        // console.log(word.slice(1) + word.slice(0,1) + 'ay' )
        translated = word.slice(1) + word.slice(0,1) + 'ay'
        document.getElementById('pigLatin').innerHTML = response = translated

        // return word.slice(1) + word.slice(0,1) + 'ay'
  
    }
  }
  
  const clearDisplay = () => {

    document.getElementById('pigLatin').innerHTML = "Your Translated Text will Show Here!"

  }

  // the first function called in the program to get an input from the user
  // to run the function use the command: node main.js
  // to close it ctrl + C
  const getPrompt = () => {
    rl.question('word ', (answer) => {
      console.log( pigLatin(answer) );
      getPrompt();
    });
  }
  