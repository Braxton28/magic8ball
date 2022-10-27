const points = [
    "It is certain",
    "Reply hazy, try again",
    "Dont count on it",
    "It is decidedly so",
    "Ask again later",
    "My reply is no",
    "Without a doubt",
    "Better not tell you now",
    "My sources say no",
    "Yes definitely",
"Cannot predict now",
"Outlook not so good",
"You may rely on it",
"Concentrate and ask again",
"Very doubtful",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes"
];


function myFunction(){
    //1-How to generate an index
    
    //2-Getting the valueof the arrayfrom step one
    
    //3-Displaying the image from the array
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("answers").innerHTML=points[0];
    setTimeout(timeup, 5000);

    function timeup(){
        document.getElementById("answers").innerHTML="8";
        document.getElementById("clear").value="";
    }
}
