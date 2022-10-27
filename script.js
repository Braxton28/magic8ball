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
document.getElementById("response").innerHTML=points;
document.getElementById("center").innerHTML=points;

function myFunction(){
    points.sort(function(a,b){return 0.5 - Math.random()});
    document.getElementById("response").innerHTML=points[0];
    setTimeout(timeup, 5000);

    function timeup(){
        document.getElementById("response").innerHTML="8";
        document.getElementById("clear").value="";
    }
}