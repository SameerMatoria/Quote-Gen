const quotes= [{
    quote:`"The greatest glory in living lies not in never falling, but in rising every time we fall."`,
    writer:`-Nelson Mandela`
},{
    quote:`"The way to get started is to quit talking and begin doing."`,
    writer:`-Walt Disney`
},{
    quote:`"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."`,
    writer:`-Steve Jobs`
},{
    quote:`"The future belongs to those who believe in the beauty of their dreams."`,
    writer:`-Eleanor Roosevelt`
},{
    quote:`"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."`,
    writer:`-James Cameron `
},{
    quote:`"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."`,
    writer:`-John Lennon `
}
]

let quote = document.querySelector(".quote");
let writer = document.querySelector(".writer");
let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
    let random = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[random].quote;
    writer.innerHTML = quotes[random].writer;
});
