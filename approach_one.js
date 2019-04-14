var fs = require('fs');
var crypto = require('crypto')

function movie_ticket_one(name)
{
    var person_one = [];
var counter_one_tickets = [];
var i;
var obj = [];
for(i=1;person_one.length<100; i++)
{
    var random = Math.floor(Math.random()*100)+1;
    if(person_one.indexOf(random)==-1)
    {
        person_one.push(random)
    }
}

for(i=1;counter_one_tickets.length<100; i++)
{
    var random = Math.floor(Math.random()*100)+1;
    if(counter_one_tickets.indexOf(random)==-1)
    {
        counter_one_tickets.push(name+random)
    }
}
console.log(person_one.length)
console.log(counter_one_tickets.length)

let movie = new Map();
let str_ticket = "";
for(i=1;i<=99;i++){
 
movie.set(person_one[i],counter_one_tickets[i]);
// obj.push(movie)

}
let cc = counter_one_tickets.toString();
// console.log( "=================="+cc)
console.log(movie)

var sha256data = crypto.createHash('sha256').update(counter_one_tickets.toString()).digest("hex");

fs.appendFileSync('ticketinfo.enc.txt',sha256data,'utf-8');
fs.appendFileSync('ticketinfo.txt',counter_one_tickets,'utf-8');
return movie;
}

(async => {
    let first = movie_ticket_one("CAPTAINMARVEL");

    console.log('first booth'+first);
    let second = movie_ticket_one("AVENGERS");
    console.log('second booth'+second);
    let third = movie_ticket_one("SUPERWOMAN");
    console.log('third booth'+third);
    let fourth = movie_ticket_one("DUMBO");
    
    let fifth = movie_ticket_one("SHAZAM")
})();

