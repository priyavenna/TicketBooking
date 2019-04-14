
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

// module.exports.check_tickets = function check_tickets(movie_show)
// {
//     console.log(movie_show.movie_name)

//     console.log(movie_show.aval_tickets)



//     console.log("Plese enter number of tickets for : ")

//     number_tickets = scanf("%d")

//     console.log("Entered number of tickets :",number_tickets)

//     let movie_name = movie_show.movie_name;

//     let avail_tickets = movie_show.aval_tickets

//     if(movie_name == "SUPERWOMAN")
//     {
//         if(aval_tickets < number_tickets)
//         {
//             console.log("sorry no availability")
//         } 
//     }
//     else if(movie_name == "CAPTAIN MARVEL")
//     {
//         aval_tickets = aval_tickets_2
//     }
//     else if(movie_name == "AVENGERS")
//     {
//         aval_tickets = aval_tickets_3
//     }
//     else if(movie_name == "AQUAMAN")
//     {
//         aval_tickets = aval_tickets_4
//     }
//     else if(movie_name == "DUMBO")
//     {
//         aval_tickets = aval_tickets_5
//     }
//     console.log("Aval tickets",aval_tickets)

//     if(number_tickets > aval_tickets)
//     {
//         console.log("Sorry only "+aval_tickets+" are available")

//         check_tickets();
//     }

//     return number_tickets
// }

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

module.exports.hash_ticket = function hash_ticket(ticket)
{
    console.log("hash to be done for ",ticket)

    sha256data = crypto.createHash('sha256').update(ticket.toString()).digest("hex");

    console.log("sha256 data is",sha256data)

    fs.appendFileSync('ticketinfo.enc.txt',sha256data,'utf-8');

    fs.appendFileSync('ticketinfo.txt',counter_one_tickets,'utf-8');

}


module.exports.checkAvailability = function check_aval_tickets(tickets, movie_name)
{
    console.log("======== TICKET AVAILABILITY FOR SUPER WOMAN =======",aval_tickets_1)
   
    console.log("======== TICKET AVAILABILITY FOR CAPTAIN MARVEL =======",aval_tickets_2)
   
    console.log("======== TICKET AVAILABILITY FOR AVENGERS =======",aval_tickets_3)

    console.log("======== TICKET AVAILABILITY FOR AQUAMAN =======",aval_tickets_4)

    console.log("======== TICKET AVAILABILITY FOR DUMBO =======",aval_tickets_5)
    
    if(movie_name == "SUPERWOMAN")
    {
         aval_tickets_1 -= tickets
         return aval_tickets_1
    }
    else if(movie_name == "CAPTAIN MARVEL")
    {
        aval_tickets_2 -= tickets
        return aval_tickets_2

    }
    else if(movie_name == "AVENGERS")
    {
        aval_tickets_3 = tickets
        return aval_tickets_3
    }
    else if(movie_name == "AQUAMAN")
    {
        aval_tickets_4 = tickets
        return aval_tickets_4
    }
    else if(movie_name == "DUMBO")
    {
        aval_tickets_5 = tickets
        return aval_tickets_5
    }
   



    
}


