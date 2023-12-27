 document.getElementById("demo").innerHTML= 'Quote of the Day';

document.getElementById("test").innerHTML= 'Press the button below to recieve a random quote!';

var user = [

    {
        con   :"--Jim Rohn",
        name  : "Beware of what you become in pursuit of what you want.",
    },

    {
        con  :"--Epictetus",
        name : "s not what happens to you, but how you react to it that matters.",
    },


    {
        con  : "--Frank Sinatra",
        name : "The best revenge is massive success."
    },

    {
        con  : "--Wayne Gretzy",
        name : "The best revenge is massive success."
    },

    {
        con : "--Nelson Mandela",
        name : "You miss 100% of the shots you don\'t take."
    },
    {
        con : "--Frank Sinatra",
        name : "Resentment is like drinking poison and waiting for your enemies to die."
    },

    {
        con : "--Elbert Hubbard",
        name : "Do not take life too seriously. You will not get out alive.",
    },

];



function getTest(){

  
 
    
    var x = Number.parseInt(Math.random()* user.length);
    document.getElementById('test_b').innerHTML= user[x].name ;
    document.getElementById('test_c').innerHTML= user[x].con ;
    document.getElementById('demo-1').className="bg-success py-4 px-5";
   

}



