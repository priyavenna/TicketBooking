
var fs = require('fs');

var crypto = require('crypto')

var scanf = require('scanf');

let aval_tickets_movie_1 = [100,100,100,100,100];

let aval_tickets_movie_2 = [100,100,100,100,100];

let aval_tickets_movie_3 = [100,100,100,100,100];

let aval_tickets_movie_4 = [100,100,100,100,100];

let aval_tickets_movie_5 = [100,100,100,100,100];


let person_one = [];

let person_two = [];

let person_three = [];

let person_four = [];

let person_five = [];

let counter_one_tickets = [];

let counter_two_tickets = [];

let counter_three_tickets = [];

let counter_four_tickets = [];

let counter_five_tickets = [];

let sha256data = "";

exports.movie_name = "";

exports.number_tickets = 0;

//This function takes Movie Name, selected show & number of tickets as input from user 

//Checks if tickets are available, if not displays "NO AVAILABILITY" & again starts the process for movie selection

module.exports.check_movie = function check_movie()
{
    console.log("MOVIES PLAYING NOW")

    console.log(" SUPERWOMAN \n \n CAPTAINMARVEl \n \n AVENGERS \n\n AQUAMAN \n\n DUMBO")

    console.log("Please select a movie from above ")

    movie_name = scanf("%s")

    console.log("\n\n You have selected ",movie_name)

    let tick_quantity = 0;

    if( (movie_name == "SUPERWOMAN")||(movie_name == "CAPTAINMARVEL")||(movie_name == "AVENGERS")||(movie_name == "AQUAMAN")||(movie_name == "DUMBO"))
    {
        console.log("MOVIE EXIST \n\n")   

        console.log("\n Please enter show \( MORNING AFTERNOON EVENING NIGHT \)")

        show = scanf("%s")

        console.log(" \n Please enter number of tickets ")

        tick_quantity = scanf("%d")

        if(movie_name == "SUPERWOMAN")
        {
            if(show == "MORNING")
            {
              if( tick_quantity < aval_tickets_movie_1[0])
              {
                  aval_tickets_movie_1[0] = aval_tickets_movie_1[0] - tick_quantity
              }
              else 
              {
                  console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                  check_movie(movie_name);
              }
            }
            else if(show == "AFTERNOON")
            {
                if(tick_quantity < aval_tickets_movie_1[1])
                {
                    aval_tickets_movie_1[1] = aval_tickets_movie_1[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "EVENING")
            {
                if( tick_quantity < aval_tickets_movie_1[2])
                {
                    aval_tickets_movie_1[1] = aval_tickets_movie_1[1] - tick_quantity 
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "NIGHT")
            {
                if( tick_quantity < aval_tickets_movie_1[3])
                {
                    aval_tickets_movie_1[1] = aval_tickets_movie_1[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
        }

        if(movie_name == "CAPTAINMARVEL")
        {
            if(show == "MORNING")
            {
              if( tick_quantity < aval_tickets_movie_2[0])
              {
                  aval_tickets_movie_2[0] = aval_tickets_movie_2[0] - tick_quantity
              }
              else 
              {
                  console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                  check_movie(movie_name);
              }

            }
            else if(show == "AFTERNOON")
            {
                if(tick_quantity < aval_tickets_movie_2[1])
                {
                    aval_tickets_movie_2[1] = aval_tickets_movie_2[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "EVENING")
            {
                if( tick_quantity < aval_tickets_movie_2[2])
                {
                    aval_tickets_movie_2[1] = aval_tickets_movie_2[1] - tick_quantity 
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "NIGHT")
            {
                if( tick_quantity < aval_tickets_movie_2[3])
                {
                    aval_tickets_movie_2[1] = aval_tickets_movie_2[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
        }

        else if(movie_name == "AVENGERS")
        {
            if(show == "MORNING")
            {
              if( tick_quantity < aval_tickets_movie_3[0])
              {
                  aval_tickets_movie_3[0] = aval_tickets_movie_3[0] - tick_quantity
              }
              else 
              {
                  console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                  check_movie(movie_name);
              }

            }
            else if(show == "AFTERNOON")
            {
                if(tick_quantity < aval_tickets_movie_3[1])
                {
                    aval_tickets_movie_3[1] = aval_tickets_movie_3[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "EVENING")
            {
                if( tick_quantity < aval_tickets_movie_3[2])
                {
                    aval_tickets_movie_3[1] = aval_tickets_movie_3[1] - tick_quantity 
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "NIGHT")
            {
                if( tick_quantity < aval_tickets_movie_3[3])
                {
                    aval_tickets_movie_3[1] = aval_tickets_movie_3[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
        }

        else if(movie_name == "AQUAMAN")
        {
            if(show == "MORNING")
            {
              if( tick_quantity < aval_tickets_movie_4[0])
              {
                  aval_tickets_movie_4[0] = aval_tickets_movie_4[0] - tick_quantity
              }
              else 
              {
                  console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                  check_movie(movie_name);
              }

            }
            else if(show == "AFTERNOON")
            {
                if(tick_quantity < aval_tickets_movie_4[1])
                {
                    aval_tickets_movie_4[1] = aval_tickets_movie_4[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "EVENING")
            {
                if( tick_quantity < aval_tickets_movie_4[2])
                {
                    aval_tickets_movie_4[1] = aval_tickets_movie_4[1] - tick_quantity 
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "NIGHT")
            {
                if( tick_quantity < aval_tickets_movie_4[3])
                {
                    aval_tickets_movie_4[1] = aval_tickets_movie_4[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
        }

        else if(movie_name == "DUMBO")
        {
            if(show == "MORNING")
            {
              if( tick_quantity < aval_tickets_movie_5[0])
              {
                  aval_tickets_movie_5[0] = aval_tickets_movie_5[0] - tick_quantity
              }
              else 
              {
                  console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                  check_movie(movie_name);
              }

            }
            else if(show == "AFTERNOON")
            {
                if(tick_quantity < aval_tickets_movie_5[1])
                {
                    aval_tickets_movie_5[1] = aval_tickets_movie_5[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "EVENING")
            {
                if( tick_quantity < aval_tickets_movie_5[2])
                {
                    aval_tickets_movie_5[1] = aval_tickets_movie_5[1] - tick_quantity 
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
            else if(show == "NIGHT")
            {
                if( tick_quantity < aval_tickets_movie_5[3])
                {
                    aval_tickets_movie_5[1] = aval_tickets_movie_5[1] - tick_quantity
                }
                else 
                {
                    console.log("\n\n ==================== Sorry no AVAILABILITY for show ===================")
                    check_movie(movie_name);
                }
  
            }
        }
        
    }

    else {

        console.log("Please select a movie name from \n\n SUPERWOMAN \n \n CAPTAINMARVEl \n \n AVENGERS \n\n AQUAMAN \n\n DUMBO")

        check_movie(movie_name);
    }

    let mov_show = { movie_name, tick_quantity ,show}
    
    return mov_show 

}

//This function generates a unique person id and pushes it into an array

module.exports.rand_perosn_id = function rand_perosn_id(movie_show)
{

    let movie_name = movie_show.movie_name;

    let show = movie_show.movie_show;

    let random_person = Math.floor(Math.random()*100)+1;

    random_person = 'PER' + random_person + show + movie_name;

        if(person_one.indexOf(random_person)==-1)
        {
            person_one.push(random_person)
        
            // person_count--;
        }
    
    return random_person
    
};

//This function generates number of tickets requested by user and checks if they are unique and stores in array

module.exports.generate_tickets = function generate_tickets(movie_show)

    {
        let number = movie_show.tick_quantity;

        let movie_name = movie_show.movie_name;

        let show = movie_show.show;

        let tickets = [];

        let random_ticket = 0;

        console.log("number is ",number)

        for(let i=1; i <= number; i++)
        {
            random_ticket = Math.floor(Math.random()*100)+1;

            console.log(random_ticket)
            
            random_ticket = 'TIC' + movie_name+show+random_ticket;
            
            if(counter_one_tickets.indexOf(random_ticket)==-1)
            {
                counter_one_tickets.push(random_ticket)

                tickets.push(random_ticket)

                console.log("tickets generated",tickets)

            }
        }

    return tickets

};

// This function allocates tickets

module.exports.assign_ticket = function assign_ticket(person_id, tickets, movie_show)
{

    let person_ticket = 0;

    let movie = new Map();

    let num_tickets = movie_show.tick_quantity;

    console.log(person_one,"person one array")

    console.log("allocated ",tickets)

    for(let i=1; i <= num_tickets; i++)
    {
    
        movie.set(person_id,tickets);

        console.log("movie map is",movie)
    }

    return movie
}

// This function performs hash of the tickets generated and stores in a file 

module.exports.hash_ticket = function hash_ticket(ticket)
{
    console.log("hash to be done for ",ticket)

    sha256data = crypto.createHash('sha256').update(ticket.toString()).digest("hex");

    console.log("sha256 data is",sha256data)

    fs.appendFileSync('ticketinfo.enc.txt',sha256data,'utf-8');

    fs.appendFileSync('ticketinfo.txt',counter_one_tickets,'utf-8');

}
