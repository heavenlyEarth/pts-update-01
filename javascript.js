function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomColor() {
  $(".bottom").css("background-color", getRandomColor());
}

// RP rewards
function chooseRPBonus() {
  var randNum = Math.floor(Math.random() * (roleplayChoose.length));
  document.getElementById('updateRoll').innerHTML = roleplayChoose[randNum];
}

var roleplayChoose = ["Pokemon","Item"];

// RP rewards
function randomRoleplayItem() {
  var randNum = Math.floor(Math.random() * (roleplayItems.length));
  document.getElementById('updateItem').innerHTML = roleplayItems[randNum];
}

//Array of RP rewards
var roleplayItems = ["Additional Character Voucher","Evolution Item Voucher","13K Salon Voucher","13K Voucher","13K Voucher!","Great Ballin","Ultra Ball!","Ultra Ball.","Ultra Ball :o","A sweet Ultra Ball","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Apple","Apple","Masterball","Great Ball!","Great Ball.","Great Ball :o","A really Great Ball",];


// First BB RP bonus
function randomBBItem() {
  var randNum = Math.floor(Math.random() * (bonusItems.length));
  document.getElementById('BBItem').innerHTML = bonusItems[randNum];
}

var bonusItems = ["15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","15 K PD","20 K PD","20 K PD","20 K PD","20 K PD","20 K PD","20 K PD","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","30k RR Voucher","30k RR Voucher","30k RR Voucher","Shiny Voucher","Shiny Voucher","Shiny Voucher","Celeb Voucher","Tiny Crystal"];

// Second BB RP Bonus: look with your special eyes

function randomBB() {
  var randNum = Math.floor(Math.random() * (secondOption.length));
  document.getElementById('BBTier').innerHTML = secondOption[randNum];
}

var secondOption = ["SPECIAL","SHINY","SHINY","SHINY","REGULAR","REGULAR","REGULAR","REGULAR","REGULAR",];

function pokemonRoll() {
  var randNum = Math.floor(Math.random() * (unevolvedPokemon.length));
  document.getElementById('Pokemon').innerHTML = unevolvedPokemon[randNum];
}

// first stage pokes for rewards
var unevolvedPokemon = ["Bulbasaur","Charmander","Squirtle","Caterpie","Weedle","Pidgey","Rattata","Spearow","Ekans","Pichu","Sandshrew","Nidoran♀","Nidoran♂","Cleffa","Vulpix","Igglybuff","Zubat","Oddish","Paras","Venonat","Diglett","Meowth","Psyduck","Mankey","Growlithe","Poliwag","Abra","Machop","Bellsprout","Tentacool","Geodude","Ponyta","Slowpoke","Magnemite","Farfetch'd","Doduo","Seel","Grimer","Shellder","Gastly","Onix","Drowzee","Krabby","Voltorb","Exeggcute","Cubone","Tyrogue","Lickitung","Koffing","Rhyhorn","Happiny","Tangela","Kangaskhan","Horsea","Goldeen","Staryu","Mime Jr.","Scyther","Smoochum","Elekid","Magby","Pinsir","Tauros","Magikarp","Lapras","Ditto","Eevee","Porygon","Omanyte","Kabuto","Aerodactyl","Munchlax","Chikorita","Cyndaquil","Totodile","Sentret","Hoothoot","Ledyba","Spinarak","Chinchou","Togepi","Natu","Mareep","Azurill","Bonsly","Hoppip","Aipom","Sunkern","Yanma","Wooper","Murkrow","Misdreavus","Unown","Wynaut","Girafarig","Pineco","Dunsparce","Gligar","Snubbull","Qwilfish","Shuckle","Heracross","Sneasel","Teddiursa","Slugma","Swinub","Corsola","Remoraid","Delibird","Mantyke","Skarmory","Houndour","Phanpy","Stantler","Smeargle","Miltank","Treecko","Torchic","Mudkip","Poochyena","Zigzagoon","Wurmple","Lotad","Seedot","Taillow","Wingull","Ralts","Surskit","Shroomish","Slakoth","Nincada","Whismur","Makuhita","Nosepass","Skitty","Sableye","Mawile","Aron","Meditite","Electrike","Plusle","Minun","Volbeat","Illumise","Budew","Gulpin","Carvanha","Wailmer","Numel","Torkoal","Spoink","Spinda","Trapinch","Cacnea","Swablu","Zangoose","Seviper","Lunatone","Solrock","Barboach","Corphish","Baltoy","Lileep","Anorith","Feebas","Castform","Kecleon","Shuppet","Duskull","Tropius","Chingling","Absol","Snorunt","Spheal","Clamperl","Relicanth","Luvdisc","Bagon","Beldum","Turtwig","Chimchar","Piplup","Starly","Bidoof","Kricketot","Shinx","Cranidos","Shieldon","Burmy","Combee","Pachirisu","Buizel","Cherubi","Shellos","Drifloon","Buneary","Glameow","Stunky","Bronzor","Chatot","Spiritomb","Gible","Riolu","Hippopotas","Skorupi","Croagunk","Carnivine","Finneon","Snover","Rotom","Snivy","Tepig","Oshawott","Patrat","Lillipup","Purrloin","Pansage","Pansear","Panpour","Munna","Pidove","Blitzle","Roggenrola","Woobat","Drilbur","Audino","Timburr","Tympole","Throh","Sawk","Sewaddle","Venipede","Cottonee","Petilil","Basculin","Sandile","Darumaka","Maractus","Dwebble","Scraggy","Sigilyph","Yamask","Tirtouga","Archen","Trubbish","Zorua","Minccino","Gothita","Solosis","Ducklett","Vanillite","Deerling","Emolga","Karrablast","Foongus","Frillish","Alomomola","Joltik","Ferroseed","Klink","Tynamo","Elgyem","Litwick","Axew","Cubchoo","Cryogonal","Shelmet","Stunfisk","Mienfoo","Druddigon","Golett","Pawniard","Bouffalant","Rufflet","Vullaby","Heatmor","Durant","Deino","Larvesta",];


function rollSalon() {
  var randNum = Math.floor(Math.random() * (containerItems.length));
  document.getElementById('SalonRoll').innerHTML = containerItems[randNum];
}


var containerItems = ["Golden Apple", "Special Ivy", "Snow Cone", "Paint Splatter", "Floral Paint", "Coal", "Spooky Orb", "Gingerbread", "Chocolate Heart", "Pinkan Berry",];

function labCoin() {
  var randNum = Math.floor(Math.random() * (coinValue.length));
  document.getElementById('oddCoin').innerHTML = coinValue[randNum];
}


var coinValue = ["Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Bronze (5k)","Silver (8k)","Silver (8k)","Silver (8k)","Silver (8k)","Silver (8k)","Silver (8k)","Gold (10k)","Gold (10k)","Gold (10k)","Platinum (15k)",];

function labItem() {
  var randNum = Math.floor(Math.random() * (labItems.length));
  document.getElementById('labStrange').innerHTML = labItems[randNum];
}


var labItems = ["Loveball","Loveball","Loveball","Loveball","Loveball","Friendball","Friendball","Friendball","Friendball","Friendball","Luxury Ball","Luxury Ball","Luxury Ball","Luxury Ball","Luxury Ball","Glowing Stone","Glowing Stone","Mysterious Pokeball","Mysterious Pokeball","Mysterious Pokeball","Mysterious Pokeball","Mysterious Pokeball","Mysterious Pokeball","Mysterious Fossil","Mysterious Fossil","Mysterious Fossil","Mysterious Fossil","Bizarre Crystal","Bizarre Crystal","Bizarre Crystal","Bizarre Crystal","Bizarre Crystal","Tiny Crystal","Tiny Crystal","Tiny Crystal","Broken Piece","Broken Piece","Random Megastone","Random Megastone","Wishing Scroll","Wishing Scroll","Wishing Scroll","Fancy Locked Container","Fancy Locked Container","Fancy Locked Container","Beast Ball","Fire Stone","Fire Stone","Fire Stone","Water Stone","Water Stone","Water Stone","Thunder Stone","Thunder Stone","Thunder Stone","Strange Souvenir ","Strange Souvenir ","Strange Souvenir ","Dragon Scale","Dragon Scale","Prism Scale","Prism Scale","Luxury Bonbon","Luxury Bonbon","Luxury Bonbon","Pokeball","Pokeball","Pokeball","Greatball","Greatball","Greatball","Ultraball","Ultraball","Ultraball","Masterball","Second Character Voucher","Third Character Voucher","Job Change Voucher","Job Change Voucher",];

function labFossil() {
  var randNum = Math.floor(Math.random() * (boneZone.length));
  document.getElementById('mysteriousFossil').innerHTML = boneZone[randNum];
}


var boneZone = ["Kabuto","Kabutops","Omanyte","Omastar","Aerodactyl","Anorith","Armaldo","Lileep","Cradily","Relicanth","Cranidos","Rampardos","Shieldon","Bastiodon","Tirtouga","Carracosta","Archen","Archeops","Tyrunt","Tyrantrum","Amaura","Aurorus",];


function raceWin() {
  var randNum = Math.floor(Math.random() * (racers.length));
  document.getElementById('goldMedal').innerHTML = racers[randNum];
}

var racers = ["Junior the Snorlax","Hercules the Pignite","Light the Jigglypuff","Pudding the Phanpy","Pipsqueak the Togedemaru","Flipper the Bidoof","Donforest the Donphan",];

function randomNumber() {
var numbs=Math.floor(Math.random()*101);
  document.getElementById('randomize').innerHTML = numbs;
}

function memeZone() {
  var randNum = Math.floor(Math.random() * (sayings.length));
  document.getElementById('randomSaying').innerHTML = sayings[randNum];
}


var sayings = ["just my daily yell is all","it's tired and i'm 1 am","mod pants","if ur character makes commentary on ur life ur doing writing right","https://tinyurl.com/PTSM01","i pledge alleigance to the Squad to be MLG no scope pros","i hope you're having a good day - Pix",];

// Code credit to pixelpixies/Kayla Morgan, all rights reserved ©2018