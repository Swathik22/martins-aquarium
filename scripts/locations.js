import { getLocations } from "./database.js";

const locationsForHarvest=getLocations();

export const locationsHTML=()=>{
    let thisHTML=`<ul>`
    for(const place of locationsForHarvest)
    {
        thisHTML+=` <li><strong>Location:</strong>${place.location}</li>
                    <li><strong>Why This location:</strong>${place.reason}</li>`      }               
    thisHTML+=`</ul>`
    return thisHTML;
}