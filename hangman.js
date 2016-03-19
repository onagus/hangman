var myArray = [ 
"https://farm1.staticflickr.com/566/21605549925_89b036c583.jpg",  "https://farm1.staticflickr.com/756/21418561659_481f2f0fd4.jpg", "https://farm1.staticflickr.com/763/21579304506_c88492b140.jpg", "https://farm1.staticflickr.com/590/21417449070_529a609b5b.jpg", "https://farm6.staticflickr.com/5808/21418561559_9605d95aa9.jpg", "https://farm1.staticflickr.com/702/21417639368_a48de37465.jpg", "https://farm6.staticflickr.com/5747/21418561839_712eae1e74.jpg", "https://farm6.staticflickr.com/5625/21417448840_8f9b0004d4.jpg" 
];

var words = [
  {
    topic : "Across from SF",
    word : "Oakland"
  },
  {
    topic : "Nissan's EV",
    word : "Leaf"
  }, 
  {
    topic : "Internet Spying",
    word : "NSA"
  }, 
  {
    topic : "Corporate Coffee",
    word : "Starbucks"
  }, 
  {
    topic : "90's Alt Rock Band",
    word : "Smashing Pumpkins"
  }, 
  {
    topic : "Aka Go-Go Yubari",
    word : "Chiaki Kuriyama"
  }, 
  {
    topic : "Black Actor not from Washington",
    word : "Denzel Washington"
  }, 
  {
    topic : "Miniature Cabbage",
    word : "Brussel Sprouts"
  }, 
  {
    topic : "Like ocean grass",
    word : "seaweed"
  }, 
  {
    topic : "Smashed avocado",
    word : "guacamole"
  }, 
  {
    topic : "Fast food chain with no gmo",
    word : "Chipotle"
  }, {
    topic : "Evil GMO giant",
    word : "Monsanto"
  }, 
  {
    topic : "Liquor Aphrodisiac ",
    word : "courvoisier"
  },
  {
    topic : "Annoying yippy dog",
    word : "chihuahua"
  }, 
  {
    topic : "Mexican sausage",
    word : "butter"
  }, 
  {
    topic : "1.. 2...",
    word : "Cha cha cha"
  }, 
  {
    topic : "Primitive underwear",
    word : "loin cloth"
  }, 
  {
    topic : "Pug-like Chinese Dog",
    word : "Shih Tzu"
  }, 
  {
    topic : "Makers of Pac Man",
    word : "Namco"
  }, {
    topic : "Makers of Super Mario Bros.",
    word : "Nintendo"
  }, 
  {
    topic : "Save money for...",
    word : "Retirement"
  },  
  {
    topic : "US President",
    word : "Barack Obama"
  }, 
  {
    topic : "Google's JS MVC",
    word : "AngularJS"
  }, 
  {
    topic : "Javascript Library",
    word : "JQuery"
  }, 
  {
    topic : "Before AngularJS",
    word : "BackboneJS"
  }, 
  {
    topic : "After AngularJS",
    word : "ReactJS"
  }, 
  {
    topic : "Hawaiian Coffee",
    word : "Kona"
  }, 
  {
    topic : "Where Buddhists congregate",
    word : "Temple"
  }, 
  {
    topic : "Gets the stains out",
    word : "Bleach"
  }, 
  {
    topic : "JS Object Notation",
    word : "JSON"
  }, 
  {
    topic : "AKA Ecmascript",
    word : "Javascript"
  }, 
  {
    topic : "Jewish Bread",
    word : "Bagel"
  }, 
  {
    topic : "Famous female photographer",
    word : "Cindy Sherman"
  },
  {
    topic : "Lazy Boy's cousin",
    word : "Lazy Susan"
  }, 
  {
    topic : "Red and yellow",
    word : "orange"
  }, 
  {
    topic : "Why the universe is expanding",
    word : "Big bang"
  }, 
  {
    topic : "Ice cream and milk",
    word : "milk shake"
  }, 
  {
    topic : "Jimmy Carter's political party",
    word : "Democrat"
  }, 
  {
    topic : "Italian Yakuza",
    word : "Mafia"
  }, 
  {
    topic : "Non-religious Musical",
    word : "Jesus Christ Superstar"
  },
  {
    topic : "90's Boy Band",
    word : "Backstreet Boys"
  },
  {
    topic : "90's R&B Band",
    word : "Boyz II Men"
  }, 
  {
    topic : "Scottish electronic music duo",
    word : "Boards of Canada"
  }, 
  {
    topic : "Korean Sauerkraut",
    word : "Kim Chee"
  }, 
  {
    topic : "Russian beet soup",
    word : "Borscht"
  }, 
  {
    topic : "Indian Butter",
    word : "Ghee"
  }, 
  {
    topic : "High protein grain like millet",
    word : "Quinoa"
  }, 
  {
    topic : "Mexican Boogeyman",
    word : "Chupacabra"
  }, 
  {
    topic : "Like ocean grass",
    word : "seaweed"
  }, 
  {
    topic : "Mike D and Flavor Flav",
    word : "Public Enemy"
  }, 
  {
    topic : "Fast food chain no gmo",
    word : "Chipotle"
  }, 
  {
    topic : "Across from SF",
    word : "Oakland"
  },
  {
    topic : "Nissan's EV",
    word : "Leaf"
  }, 
  {
    topic : "Internet Spying",
    word : "NSA"
  }, 
  {
    topic : "Corporate Coffee",
    word : "Starbucks"
  }, 
  {
    topic : "90's Alt Rock Band",
    word : "Smashing Pumpkins"
  }, 
  {
    topic : "Aka Go-Go Yubari",
    word : "Chiaki Kuriyama"
  }, 
  {
    topic : "Black Actor not from Washington",
    word : "Denzel Washington"
  }, 
  {
    topic : "Miniature Cabbage",
    word : "Brussel Sprouts"
  }, 
  {
    topic : "Like ocean grass",
    word : "seaweed"
  }, 
  {
    topic : "Smashed avocado",
    word : "guacamole"
  }, 
  {
    topic : "Fast food chain with no gmo",
    word : "Chipotle"
  }, {
    topic : "Evil GMO giant",
    word : "Monsanto"
  }, 
  {
    topic : "Liquor Aphrodisiac ",
    word : "courvoisier"
  },
  {
    topic : "Annoying yippy dog",
    word : "chihuahua"
  }, 
  {
    topic : "Mexican sausage",
    word : "butter"
  }, 
  {
    topic : "1.. 2...",
    word : "Cha cha cha"
  }, 
  {
    topic : "Primitive underwear",
    word : "loin cloth"
  }, 
  {
    topic : "Pug-like Chinese Dog",
    word : "Shih Tzu"
  }, 
  {
    topic : "Makers of Pac Man",
    word : "Namco"
  }, {
    topic : "Makers of Super Mario Bros.",
    word : "Nintendo"
  }, 
  {
    topic : "Save money for...",
    word : "Retirement"
  },  
  {
    topic : "US President",
    word : "Barack Obama"
  }, 
  {
    topic : "Google's JS MVC",
    word : "AngularJS"
  }, 
  {
    topic : "Javascript Library",
    word : "JQuery"
  }, 
  {
    topic : "Before AngularJS",
    word : "BackboneJS"
  }, 
  {
    topic : "After AngularJS",
    word : "ReactJS"
  }, 
  {
    topic : "Hawaiian Coffee",
    word : "Kona"
  }, 
  {
    topic : "Where Buddhists congregate",
    word : "Temple"
  }, 
  {
    topic : "Gets the stains out",
    word : "Bleach"
  }, 
  {
    topic : "JS Object Notation",
    word : "JSON"
  }, 
  {
    topic : "AKA Ecmascript",
    word : "Javascript"
  }, 
  {
    topic : "Jewish Bread",
    word : "Bagel"
  }, 
  {
    topic : "Famous female photographer",
    word : "Cindy Sherman"
  },
  {
    topic : "Lazy Boy's cousin",
    word : "Lazy Susan"
  }, 
  {
    topic : "Red and yellow",
    word : "orange"
  }, 
  {
    topic : "Why the universe is expanding",
    word : "Big bang"
  }, 
  {
    topic : "Ice cream and milk",
    word : "milk shake"
  }, 
  {
    topic : "Jimmy Carter's political party",
    word : "Democrat"
  }, 
  {
    topic : "Italian Yakuza",
    word : "Mafia"
  }, 
  {
    topic : "Non-religious Musical",
    word : "Jesus Christ Superstar"
  },
  {
    topic : "90's Boy Band",
    word : "Backstreet Boys"
  },
  {
    topic : "90's R&B Band",
    word : "Boyz II Men"
  }, 
  {
    topic : "Scottish electronic music duo",
    word : "Boards of Canada"
  }, 
  {
    topic : "Korean Sauerkraut",
    word : "Kim Chee"
  }, 
  {
    topic : "Russian beet soup",
    word : "Borscht"
  }, 
  {
    topic : "Indian Butter",
    word : "Ghee"
  }, 
  {
    topic : "High protein grain like millet",
    word : "Quinoa"
  }, 
  {
    topic : "Mexican Boogeyman",
    word : "Chupacabra"
  }, 
  {
    topic : "Like ocean grass",
    word : "seaweed"
  }, 
  {
    topic : "Mike D and Flavor Flav",
    word : "Public Enemy"
  }, 
  {
    topic : "Fast food chain no gmo",
    word : "Chipotle"
  }, 
];

var randomNum;
var randomObj;

var missCounter = 0; 
var hitCounter = 0;

var currentWord;
var currentHeader;
var currentCharacter;

var spaces = 0;  
var usedLetters = [];  

var currentHint;

var currentSpace = 0;
var currentBlock = 0;

function setHeader(string) {
  $('h1').html(string);
}

//Setting the header & setting spaces or *
function setSpaces() {
  var headerStr = "";
  for (i=0; i<currentWord.length; i++) {
    if (currentWord.charAt(i) === ' ') {
      headerStr = headerStr + "_"; 
      spaces++;
    }
    else {
      headerStr = headerStr + "*"; 
    }
  }
  currentHeader = headerStr;
  setHeader(currentHeader);
}

$(document).ready(function(){ 
  randomNum = Math.random() * 100;
  randomObj = words[Math.ceil(randomNum)];
  currentWord = randomObj.word;
  currentHint = randomObj.topic;
  setSpaces();
  changeIMG();
  $('h3').append(currentHint);
});

//Update the Header
function stringSplicer(i, letter, header){
  var newString = header.slice(0, i) + letter + header.slice(i+1, header.length); 
  currentHeader = newString;
  $('h1').html(newString);
  setHeader(currentHeader);
}

function changeIMG() { 
  $('#image').attr("src", myArray[missCounter]);
  
      if (missCounter === 7) {
          $('h3').text("GAME OVER");
          $('h1').text(currentWord);
      }
  
       headerTotal = currentHeader.length - spaces; 
       astericks = 0;
  
      for (i=0; i<currentHeader.length; i++) {
         if (currentHeader[i] === '*') {
            astericks++;
         }
      }
  
      if (astericks === 0 ) { 
           $('h3').text("YOU WIN!");
      }
  
}
 
function sortWords() {
  var hitLetters = [];
  var missLetters = [];
  wordArray = currentWord.split('');    
  $.each(wordArray, function(i, v){
      var currentCharacter = currentWord.charAt(i).toLowerCase();
    
      if (userInput === currentCharacter) {
      hitLetters.push(userInput); 
      stringSplicer(i, userInput, currentHeader); 
      }
      else {
        missLetters.push(userInput); 
      }
  });
  
  if (hitLetters.length !== 0) {
    hitCounter++;
  }
  
  if (missLetters.length === currentWord.length) {
    missCounter++;
  }
  
  missCount = 0;
  
  for (i=0; i<currentHeader.length; i++) {
       if (currentHeader[i] !== userInput) {
         console.log("missed");
          missCount++;
       }
  }
  
  if (missCount === currentHeader.length) {
    var that = userInput;
    var element = $('.missed').next();
    element.css({"border" : "2px solid blue"});
    element.addClass('missed');
    var elHeader = element.last().html('<h2 style="vertical-align:middle; line-height:10px">' + userInput + '</h2>'); 
  }
  
   
}

function getInput(){
  $('#input').keypress(function( ){ 
    this.value = null;
  });
  userInput = $('#input').val().toLowerCase();  
  for(i=0; i<usedLetters.length; i++) {
    if (userInput === usedLetters[i]) {
      return false;
    }
  } 
  usedLetters.push(userInput);
  sortWords();   
  changeIMG();
}