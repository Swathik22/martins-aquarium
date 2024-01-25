const database={
   fish:[ 
    {
        id:1,
        name:"Gold Fish",
        species:"Carassius auratus",
        size:6,
        image:"./images/GoldFish.webp",
        food:"eggs"
    },
    {
        id:2,
        name:"Yellow Fish",
        species:"Zebrasoma flavescens",
        size:10,
        image:"./images/YellowFish.webp",
        food:"Dried and frozen herbivore food"
    },
    {
        id:3,
        name:"AngelFish",
        species:"Pterophyllum",
        size:3,
        image:"./images/AngelFish.jfif",
        food:"Worms and Zucchini"
    },
    {
        id:4,
        name:"Panda corydoras",
        species:"Corydoras panda",
        size:1.5,
        image:"./images/pandaFish.jpg",
        food:"BloodWorms and Shrimps"
    }],
    fishTankTips:[
        {id:1,
        temperature:"20 °C (68 °F) to 25 °C (77 °F)",
        tank:`An aquarium for this species should be well furnished, 
        ideally with a mixture of live aquatic plants, and solid 
        furnishings providing caves, sheltered areas and hiding 
        places to give the fish security. Floating plants to provide 
        additional areas of shade are also welcomed by the fish.`,
        salinity:`As a general guideline for saltwater reef tanks, 
        it is best to maintain a salinity of 1.026 
        (or 35ppt or 53 mS/cm conductivity) to most accurately match the ocean.`
    }],
    locations:[
        {
            id:1,
            location:"Coastal regions",
            reason:`The abundance of fish in the coastal regions 
            makes it an ideal location for fish harvesting.
             - local fisherman, Maine, USA`,
        },
        {
            id:2,
            location:"Rivers and lakes",
            reason:`Fishing in lakes and rivers provides a serene and 
            peaceful environment, with ample opportunities to 
            catch different species of fish." - angler, British Columbia, Canada`
        },
        {
            id:3,
            location:"Offshore fishing grounds",
            reason:`Heading out to the open waters allows for deep-sea fishing, 
            where larger and more diverse fish species can be harvested." 
            - commercial fisherman, Gulf of Mexico, USA`
        },
        {
            id:4,
            location:"Arctic and Antarctic regions",
            reason:`Fishing in the extreme polar environments offers a 
            unique experience, with the chance to catch cold-water 
            species like cod and pollock." - commercial fisherman, Iceland`
        }
    ],
    quotes:[
        {
            id:1,
            quote:`The best way to catch a fish is to let him think he's escaping`
        },
        {
            id:2,
            quote:`Give a man a fish, and he has food for a day; teach him how to fish, and you can get rid of him for the entire weekend.` 
        },
        {
            id:3,
            quote:`The charm of fishing is that it is the pursuit of what is elusive but attainable, a perpetual series of occasions for hope.` 
        }
    ]
    
}

export const getFishList=()=>{
    return database.fish.map(fish=>({...fish}));
}

export const getFishTankTips=()=>{
    return database.fishTankTips[0];
}

export const getLocations=()=>{
    return database.locations.map(place=>({...place}));
}

export const getQuotes=()=>{
    return database.quotes.map(quote=>({...quote}))
}

// Concept Checking Questions
// What is the data type of the database variable?  object
// What is the data type of the fish property?  array
// What is the data type of the name property?  string
// What is the data type of the size property?  number
// What data types will the fish array contain? objects