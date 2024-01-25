import {getFishList} from "./database.js"

const fishListFromDB=getFishList();


const fishThree=[];
const fishFive=[];

//Get fish whose size is multiple of 3
const fishSizeThreeAndFive=()=>{    
    for(const fish of fishListFromDB)
    {
        if(fish.size%3===0)
        {
            fishThree.push(fish);
            fishListFromDB.splice(fishListFromDB.indexOf(fish),1)
        }
        else if(fish.size%5===0){
            fishFive.push(fish);
            fishListFromDB.splice(fishListFromDB.indexOf(fish),1)
        }       
    }
    return fishThree.concat(fishFive,fishListFromDB);
}


const fishListOrdered=fishSizeThreeAndFive();
//generate fishlist html
export const FishList=()=>{
    let fishHTML="<div>";
    for(const fish of fishListOrdered)
    {        
        fishHTML += `<div class="fishBlock"> <div class="fishImgDiv"><img src=${fish.image} class="fishSize"/>  </div>                      
                        <div id="fishDetails"> 
                        <ul>
                        <li>name:${fish.name}</li>
                        <li>species:${fish.species}</li>
                        <li>food:${fish.food}</li>
                        <li>size:${fish.size}</li>
                        </ul></div>
                        </div>  ` 
    }       
    fishHTML+=`</div>`
    return fishHTML;

}

{/* <div id="fishDetails"></div> */}


