
let btn = document.querySelector('.new-quote');
let quote = document.querySelector('.qoute');
let person = document.querySelector('.person');
let hey = document.querySelector('.hey');
console.log(hey)

const quotes = [{
    quote: `“Stay away from those people who try to disparage your ambitions. Small minds will always do that, but great minds will give you a feeling that you can become great too.” `,
    person: `Mark Twain`
},{
    quote: `"Success is not final; failure is not fatal: It is the courage to continue that counts."`,
    person: `Winston S. Churchill`
},{
    quote: `"The road to success and the road to failure are almost exactly the same."`,
    person: `Colin R. Davis`
},{
    quote: `“Success is getting what you want, happiness is wanting what you get.”`,
    person: `W. P. Kinsella`
},{
    quote: `"Today, give a stranger one of your smiles. It might be the only sunshine he sees all day."`,
    person: `~H. Jackson Brown Jr`
},{
    quote: `"Don't let those who take advantage of your generosity stop you from being generous"-`,
    person: `Anonymous`
},{
    quote: `"Remember true character is revealed by what is on the inside."`,
    person: `Anonymous`
},{
    quote: `“Removing all risks from your life renders faith unnecessary.  Faith requires unnecessary.”`,
    person: `Anonymous`
},{
    quote: `“If you are working on something that you really care about, you don't have to be pushed. The vision pulls you."`,
    person: `Steve Jobs`
},{
    quote: `“Experience is a hard teacher because she gives the test first, the lesson afterwards.” `,
    person: `Vernon Sanders Law`
},{
    quote:`“Think like a queen. A queen is not afraid to fail. Failure is another stepping stone to greatness.”`,
    person:` Oprah Winfrey`
},
];

hey.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})
