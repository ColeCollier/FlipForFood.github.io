var restaurants = [
    'A&W',
    'Tim Hortons',
    'Uncle Fatih\'s Pizza',
    'Donair Town',
    'Quesada - Burritos and Tacos',
    '가원',
    'Bamboo Garden Restaurant',
]


function coinflip(){
    var ranNumb = Math.floor(Math.random() * 11);  
    //console.log(ranNumb)
    var randomRest = Math.round((Math.random())*((restaurants).length))
    console.log(randomRest)
    if (ranNumb > 5){
        
        document.getElementById("coin").src = "heads.png"
        document.getElementById("restrontText").innerHTML = `Today you are destined to have lunch from ${restaurants[randomRest]}.`
    }
    else{
        
        document.getElementById("coin").src = "tails.png"
        document.getElementById("restrontText").innerHTML = "your flip was tails, NO FOOD FOR YOU, GO SLEEP CHEESE"
    }
    document.getElementById("restrontText").style.display = "inline";
    
}



