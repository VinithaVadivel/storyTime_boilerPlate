//Trial 1:
//We've got some basic info about Karen's home
//Debug the type of data provided
//Return the types concatenated in a single variable

function moreAboutHome(address, distance, neighbour) 
{
    let Kaddress = typeof address
    let Kdistance = typeof distance
    let Kneighbour = typeof neighbour
    return Kaddress + Kdistance + Kneighbour
}

//Trial 2:
//Check if the data given is of the right type
//parents = String, noOfSiblings = Number, isNuclearFamily = Boolean


function moreAboutKaren(parents, noOfSiblings, isNuclearFamily)
{
    if (typeof parents == "string" && typeof noOfSiblings == "number" && typeof isNuclearFamily == "boolean") 
      {
        return true
      } 
    else{
        return false
      }
}



//Trial 3:
//Lily is suspicious about Karen's new friend
//Karen tells her friend's age and even writes it down
//Check which one those is not a number (NaN) and return that value

function doesFriendExist(ageintext, ageinnumber){
    if (isNaN(ageintext) == true) {
        return ageintext
    }
    if (isNaN(ageinnumber) == true) {
        return ageinnumber
    }
}




//Trial 4:
//Lily gave Karen x sweets
//Karen ate y sweets herself
//On her way to the river, she ate another z sweets every n meters travelled
//Her friend divided the remaining sweets into 2 parts for each
//How many sweets did her friend get to eat?

function sweetTooth(stotal,sKaren,smeter,mtravel){
    var shared = 0
    if (typeof stotal != "number" ||
      typeof sKaren != "number" ||
      typeof smeter != "number" ||
      typeof mtravel != "number") 
    {
      return "No sweets for Karen's friend"
    } else if (stotal){
      shared =(stotal -(sKaren + smeter * mtravel)) /2
    return shared}
  }




//Trial 5:
//As Lily moves closer, it gets colder. She checks the temperature on her mobile
//It only shows in fahrenheit. Convert the data to celsius and return it.

function convertToCelcius(fahrenheit){
    var temp = 0
    if (typeof fahrenheit !== "number") 
    temp = "Technical Error!"
    else temp = ((fahrenheit - 32) * 5) / 9
    return temp
}



//Trial 6:
//Lily can now do multiple things to deal with this
//1. Take her daughter to a doctor
//2. Talk to her husband about it
//3. Counsel her daughter herself
//4. Lock her daughter in her room

function aDifficultChoice(choice){
    switch(choice){
        case 1:
            return "Take her daughter to a doctor"
            break;
        case 2:
            return "Talk to her husband about it"
            break;
        case 3:
            return "Counsel her daughter herself"
            break;
        case 4:
            return "Lock her daughter in her room"
            break;
    }
}

//Challenge 1:
//Lily realized that she'd hurt her daughter
//All she wants now is for her to stop crying
//She refuses to talk to her but Lily doesn't stop trying
//She tries out multiple things hoping for the best
//Take all of Lily's strategies and concatenate them to a single var
//Seperate the strategies by a single space
//Return the length of the complete strategy


function consoleKaren(strategies){
        var res = strategies.join(" ");
        return res.length;
}