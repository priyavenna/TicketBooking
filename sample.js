var scanf = require('scanf');

var theatre = require('./theatre.js')

let check_tick = "";

let movie = new Map();

let availability = 0;

ticket_register();

function ticket_register()
{

let movie_show = theatre.check_movie();

console.log("\n MOVIE",movie_show)

 //   check_availability = theatre.checkAvailability(movie_show)

  //  check_tick = theatre.check_tickets(movie_show);

    let person_id = theatre.rand_perosn_id(movie_show);

    console.log("PERSON ID",person_id)

    // console.log("on sample tickets",check_tick)

    let tickets = theatre.generate_tickets(movie_show);

    console.log("tickets entered", tickets)

    let allocate = theatre.assign_ticket(person_id,tickets,movie_show);

    console.log("allocate map is ",allocate)

    theatre.hash_ticket(tickets);

    ticket_register();

    // availability = theatre.checkAvailability(check_tick,movie_show);

    // console.log("===============AVAILABILITY FOR "+movie_show+" ============= IS >>>>>>>>>>>",availability)

    // if(availability > 0)
    // {
        
    // }

}
