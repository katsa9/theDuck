let billabongTeam = [
  'Ilya',
  'Geoff',
  'Kane',
  'Rizky',
  'Peter',
  'Jono',
  'Abid',
  'Andrew',
  'Rekha',
  'Kathleen',
  'Sindhuja'
];

const funFacts =
  [ 'You\'re up pickedTeamMate!',
    // 'Why does Santa have three gardens?<br>So he can \'ho ho ho\'! <br><br> You\'re up pickedTeamMate!',
    // 'Why did Santa\'s helper see the doctor?<br>Because he had a low \'elf\' esteem! <br><br> You\'re up pickedTeamMate!',
    // 'What kind of motorbike does Santa ride?<br>A Holly Davidson! <br><br> You\'re up pickedTeamMate!',
    // 'What do you call a cat in the desert?<br>Sandy Claws! <br><br> You\'re up pickedTeamMate!',
    // 'Who delivers presents to cats?<br>Santa Paws! <br><br> You\'re up pickedTeamMate!',
    // 'What do you call Father Christmas in the beach?<br>Sandy Clause! <br><br> You\'re up pickedTeamMate!',
    // 'What did the sea Say to Santa?<br>Nothing! It just waved! <br><br> You\'re up pickedTeamMate!',
    // 'What does Santa do with fat elves?<br>He sends them to an Elf Farm! <br><br> You\'re up pickedTeamMate!',
    // 'What do you get if you cross Santa with a duck?<br>A Christmas Quacker! <br><br> You\'re up pickedTeamMate!',
    // 'Who delivers presents to baby sharks at Christmas?<br>Santa Jaws <br><br> You\'re up pickedTeamMate!',
    // 'What says Oh Oh Oh?<br>Santa walking backwards! <br><br> You\'re up pickedTeamMate!',
    // 'What goes Ho Ho Whoosh, Ho Ho Whoosh?<br>Santa going through a revolving door! <br><br> You\'re up pickedTeamMate!',
    // 'Who is Santa\'s favorite singer?<br>Elf-is Presley! <br><br> You\'re up pickedTeamMate!',
    // 'What do you call Santa\'s little helpers?<br>Subordinate clauses! <br><br> You\'re up pickedTeamMate!',
    // 'What do Santa\'s little helpers learn at school?<br>The elf-abet! <br><br> You\'re up pickedTeamMate!',
    // 'What did Santa say to the smoker?<br>Please don\'t smoke, it\'s bad for my elf! <br><br> You\'re up pickedTeamMate!',
    // 'Where does Santa go when he\'s sick?<br>To the elf centre! <br><br> You\'re up pickedTeamMate!',
    // 'Where do elves go to dance?<br>Christmas Balls! <br><br> You\'re up pickedTeamMate!',
    // 'What do elves eat for breakfast?<br>Frosted Flakes! <br><br> You\'re up pickedTeamMate!',
    // 'What do you call a frozen elf hanging from the ceiling?<br>An elfcicle! <br><br> You\'re up pickedTeamMate!',
    // 'What type of Shoes does Santa wear when he travels on a train?<br>Platforms! <br><br> You\'re up pickedTeamMate!',
    // 'What do you get if Santa goes down the chimney when a fire is lit?<br>Krisp Kringle! <br><br> You\'re up pickedTeamMate!',
    // 'Who is Santa Claus married to?<br>Mary Christmas! <br><br> You\'re up pickedTeamMate!',
    // 'How long do a reindeers legs have to be?<br>Long enough so they can touch the ground! <br><br> You\'re up pickedTeamMate!',
    // 'What do reindeer hang on their Christmas trees?<br>Horn-aments! <br><br> You\'re up pickedTeamMate!',
    // 'Why are Christmas trees so bad at sewing?<br>They always drop their needles! <br><br> You\'re up pickedTeamMate!',
    // 'What\'s worse than Rudolph with a runny nose?<br>Frosty the snowman with a hot flush! <br><br> You\'re up pickedTeamMate!',
    // 'Did Rudolph go to school?<br>No. He was Elf-taught! <br><br> You\'re up pickedTeamMate!',
    // 'Why did the Rudolph cross the road?<br>Because he was tied to the chicken! <br><br> You\'re up pickedTeamMate!',
    // 'Why did the turkey cross the road?<br>Because he wasn\'t chicken! <br><br> You\'re up pickedTeamMate!',
    // 'Why did the turkey cross the road?<br>Because it was the chicken\'s day off! <br><br> You\'re up pickedTeamMate!',
    // 'What happened to the turkey at Christmas?<br>It got gobbled! <br><br> You\'re up pickedTeamMate!',
    // 'Why did the turkey join the band?<br>Because it had the drumsticks! <br><br> You\'re up pickedTeamMate!',
    // 'What do you get when you cross a snowman with a vampire?<br>Frostbite! <br><br> You\'re up pickedTeamMate!',
    // 'What do snowmen wear on their heads?<br>Ice caps! <br><br> You\'re up pickedTeamMate!',
    // 'How do snowmen get around?<br>They ride an icicle <br><br> You\'re up pickedTeamMate!',
    // 'What song do you sing at a snowman\'s birthday party?<br>Freeze a jolly good fellow! <br><br> You\'re up pickedTeamMate!',
    // 'How does Good King Wenceslas like his pizzas?<br>One that\'s deep pan, crisp and even! <br><br> You\'re up pickedTeamMate!',
    // 'Who hides in the bakery at Christmas?<br>A mince spy! <br><br> You\'re up pickedTeamMate!',
    // 'What did Adam say on the day before Christmas?<br>It\'s Christmas, Eve! <br><br> You\'re up pickedTeamMate!',
    // 'How many letters are in the angelic alphabet?<br>The Christmas alphabet has no EL! <br><br> You\'re up pickedTeamMate!',
    // 'What carol is heard in the desert?<br>O camel ye faithful! <br><br> You\'re up pickedTeamMate!',
    // 'What do angry mice send to each other at Christmas?<br>Cross Mouse Cards! <br><br> You\'re up pickedTeamMate!',
    // 'What is the best xmas present in the world?<br>A broken drum, you just can\'t beat it! <br><br> You\'re up pickedTeamMate!',
    // 'How do sheep in Mexico say Merry Christmas?<br>Fleece Navidad! <br><br> You\'re up pickedTeamMate!',
    // 'How did Scrooge with the football game?<br>The ghost of christmas passed! <br><br> You\'re up pickedTeamMate!',
    // 'What athlete is warmest in winter?<br>A long jumper! <br><br> You\'re up pickedTeamMate!',
    // 'What do you get if you eat Christmas decorations?<br>Tinsilitis! <br><br> You\'re up pickedTeamMate!',
    // 'What is the worst disease that you get at Christmas?<br>Excemas! <br><br> You\'re up pickedTeamMate!',
    // 'What\'s the most popular Christmas wine?<br>\'I don\'t like Brussels sprouts!\' <br><br> You\'re up pickedTeamMate!',
    // 'Why do ghosts live in the fridge?<br>Because it\'s cool! <br><br> You\'re up pickedTeamMate!',
    // 'What happened to the man who stole an Advent Calendar?<br>He got 25 days! <br><br> You\'re up pickedTeamMate!',
    // 'What did the beaver say to the Christmas Tree?<br>Nice gnawing you! <br><br> You\'re up pickedTeamMate!',
    // 'Why are Christmas Trees like bad knitters? They keep loosing their needles! <br><br> You\'re up pickedTeamMate!',
    // 'What do crackers, fruitcake and nuts remind me of?<br>You! <br><br> You\'re up pickedTeamMate!',
    // 'What\'s the best thing to put into a Christmas Cake?<br>Your teeth! <br><br> You\'re up pickedTeamMate!',
    // 'What do you get if you cross a bell with a skunk?<br>Jingle Smells! <br><br> You\'re up pickedTeamMate!',
    // 'Where would you find chili beans?<br>At the north pole! <br><br> You\'re up pickedTeamMate!',
    // 'Why don\'t penguins fly?<br>Because they\'re not tall enough to be pilots! <br><br> You\'re up pickedTeamMate!',
    // 'What do sheep say at Christmas?<br>Wool-tide Bleatings! or A Merry Christmas to Ewe! <br><br> You\'re up pickedTeamMate!',
    // 'What do you call a bunch of chess players bragging about their games in a hotel lobby?<br>Chess nuts boasting in an open foyer! <br><br> You\'re up pickedTeamMate!',
    // 'What\'s green, covered in tinsel and goes ribbet ribbet?<br>Mistle-toad! <br><br> You\'re up pickedTeamMate!',
    // 'Which football team did the baby Jesus support?<br>Manger-ster United! <br><br> You\'re up pickedTeamMate!',
    // 'What do you call a three legged donkey?<br>A wonky donkey! <br><br> You\'re up pickedTeamMate!',
  ];

const selectedTeamMates = [];
const usedFacts = [];

const randomlySelectValueThatHasNotPreviouslyBeenSelected = (items, selectedItems) => {
  const unselectedItems = items.filter(item => !selectedItems.includes(item));
  if (!unselectedItems.length) {
    return 'Error: No unsed value remaining!'
  }
  const itemIndexToSelect = Math.floor( Math.random()*unselectedItems.length);
  const newSelectedItem = unselectedItems.splice( itemIndexToSelect, 1 )[0];
  return newSelectedItem;
}

const tailorFunFactForUser = (funFact, user) => funFact.replace('pickedTeamMate', user);

const getHeading = () => document.getElementById('Heading');

const emptyArray = array => array.splice(0, array.length);

const resetDuck = () => {
  emptyArray(usedFacts);
  emptyArray(selectedTeamMates);
  const theDuckButton = document.getElementById('theDuck');
  if (theDuckButton) {
    theDuckButton.value = "Use the 🐥";
    theDuckButton.onclick = selectRandomUserWithComment;
  }
}

const resetColors = () => {
  const elem = getHeading();
  const body = document.querySelector('body');
  body.style.backgroundColor = '#2596be';
  elem.style.color = "white";
}

const selectRandomUserWithComment = () => {
  // Select a random teammate that has not yet been picked
  const selectedTeamMate = randomlySelectValueThatHasNotPreviouslyBeenSelected(billabongTeam, selectedTeamMates);

  // Select a random fun fact
  const selectedFunFact = randomlySelectValueThatHasNotPreviouslyBeenSelected(funFacts, usedFacts);
  // usedFacts.push(selectedFunFact);

  const elem = getHeading();
  const body = document.querySelector('body');

  if (selectedTeamMates.length === billabongTeam.length) {
    resetColors();
    elem.innerHTML=`🌟 Have an awesome day! 🌟 <img src="https://streakysurf.com.au/wp-content/uploads/2019/05/kisspng-billabong-outlet-clothing-logo-adidas-billabong-5b10f399f012b5.8081771315278375939834.jpg">`;
    const theDuckButton = document.getElementById('theDuck');
    if (theDuckButton) {
      theDuckButton.value = "Reset";
      theDuckButton.onclick = resetDuck;
    }
  } else {
      elem.innerHTML = tailorFunFactForUser(selectedFunFact, selectedTeamMate);
      resetColors();
      selectedTeamMates.push(selectedTeamMate);
  }
};
