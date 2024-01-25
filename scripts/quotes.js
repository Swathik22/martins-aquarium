import { getQuotes } from "./database.js";

const quotesList=getQuotes();

export const quotesHTML=()=>{
    let thisHTML="<ul>";
    for(const quote of quotesList)
    {        
        thisHTML += `<li class="quotesList">${quote.quote}</li>`
    }
    thisHTML+=`</ul>`
    return thisHTML;
}