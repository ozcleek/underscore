console.log('\'Allo \'Allo!');



var footballClubs = ['Manchester United', 'Manchester City', 'Chelsea', 'Arsenal', 'Liverpool', 'Tottenham', 'Everton'];


_.indexOf(footballClubs, 'Manchester City');
console.log();

_.without(footballClubs, 'Chelsea', 'Arsenal','Tottenham');
console.log();

_.first(footballClubs);

_.last(footballClubs);

_.rest(footballClubs);

_.initial(footballClubs); 

_.compact(footballClubs);


_.isBoolean(false);

_.isNumber(76 * ("donkies".length)) 


var eplFootballClubs = [

{team: 'Manchester United', style: 442, est: 1878},

{team: 'Manchester City', style: 442, est: 1880},

{team: 'Chelsea', style: 433, est: 1905},

{team: 'Arsenal', style: 442, est: 1886},

{team: 'Liverpool', style: 433, est: 1892},

{team: 'Tottenham', style: 442, est: 1882},

{team: 'Everton', style: 433, est: 1878}

];

_.clone(eplFootballClubs);

_.pairs(eplFootballClubs);

_.values(eplFootballClubs);

_.keys(eplFootballClubs)


_.omit({team: 'Manchester United', style: 442, est: 1878}, 'style');

_.isBoolean(false);

_.object(['team', 'style', 'est'],['ManchesterUnited', 442, 1878]);


var league = {country: "england"};
_.defaults(league, {country: "spain", quality: "great"});

_.isFunction(alert);
 
_.isString("dumbass") 

_.random(45, 90) 


// Selects all the numbers > 80 //

var numbers = [63, 94, 87, 61, 74, 84, 92, 47], 
highestNumbers = [], numberLimit = 80;
 
highestNumbers= _.select(numbers, function(number){ return number > numberLimit;});
 
console.log(highestNumbers);

// 

