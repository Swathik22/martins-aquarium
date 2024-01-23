import { getFishTankTips } from "./database.js";

const fishTankTips=getFishTankTips();

export const fishTankTipsHTML=()=>{     
       let tips=`<ul>
                <li><strong>Fish Tank Temperature:</strong><p>${fishTankTips.temperature}</p></li>
                <li><strong>Salinity of Water:</strong><p>${fishTankTips.salinity}</p></li>
                <li><strong>Tank Maintenance:</strong><p>${fishTankTips.tank}</p></li>              
            </ul>`
   return tips;
}