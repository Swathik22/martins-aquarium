import {getFishList} from "./database.js"

const fishListFromDB=getFishList();

//generate fishlist html
export const FishList=()=>{
    let fishHTML="<ul>";
    for(const fish of fishListFromDB)
    {        
        fishHTML += `<img src=${fish.image} class="fishSize"/>
                    <li>name:${fish.name}</li>
                    <li>species:${fish.species}</li>
                    <li>food:${fish.food}</li>
                    <li>size:${fish.length}</li>`
    }
    fishHTML+=`</ul>`
    return fishHTML;
}



