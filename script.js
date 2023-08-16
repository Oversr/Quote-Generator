// Variables

const quote = document.querySelector(".quote");
const person = document.querySelector(".person");
const btn = document.querySelector(".new-quote-btn");

// Quotes Array

const quoteArr = [
    {
        quote: "'The only thing we have to fear is fear itself.'",
        person: "Franklin D. Roosevelt"
    },
    {
        quote: "'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.'",
        person: "Ralph Waldo Emerson"
    },
    {
        quote: "'The only way to do great work is to love what you do.'",
        person: "Steve Jobs"
    },
    {
        quote: "'Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.'",
        person: "Martin Luther King Jr."
    },
    {
        quote: "'The future belongs to those who believe in the beauty of their dreams.'",
        person: "Eleanor Roosevelt"
    },
    {
        quote: "'Success is not final, failure is not fatal: It is the courage to continue that counts.'",
        person: "Winston Churchill"
    },
    {
        quote: "'Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.'",
        person: "Albert Einstein"
    },
    {
        quote: "'To be free is not merely to cast off one's chains, but to live in a way that respects and enhances the freedom of others.'",
        person: "Nelson Mandela"
    }
];

// Event Listener

btn.addEventListener("click", function () {
    let randNum = Math.floor(Math.random() * quoteArr.length);
    quote.innerText = quoteArr[randNum].quote;
    person.innerText = quoteArr[randNum].person;
});