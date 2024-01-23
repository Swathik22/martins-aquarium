import { FishList } from "./fishList.js"
import { fishTankTipsHTML } from "./fishTankTips.js";
import { locationsHTML } from "./locations.js";
import { quotesHTML } from "./quotes.js";

const fishListHTML=FishList();
const fishTanksTips=fishTankTipsHTML();
const locations=locationsHTML();
const quotesList=quotesHTML()

//Get fish List
const fishListElement=document.querySelector("#fishList");
fishListElement.innerHTML=fishListHTML;

//Get Fish Tank Tips
const fistTankTipsElement=document.querySelector("#tankTips");
fistTankTipsElement.innerHTML=fishTanksTips;

//Get Locations for Harvesting
const locationsElement=document.querySelector("#locations");
locationsElement.innerHTML=locations;

//Get Quotes 
const quotesElement=document.querySelector("#quotesBy");
quotesElement.innerHTML=quotesList;
