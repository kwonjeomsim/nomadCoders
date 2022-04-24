const quotes = [
  {
    quote: "To eat sushi proper way, meditation can be help.",
    author: "sushi lover",
  },
  {
    quote: "Do not eat fish original, just try to make sushi.",
    author: "Fisher live in coast",
  },
  {
    quote: "Do not be afraid to try the raw fish.",
    author: "sushi lover",
  },
  {
    quote: "If you cannot try sushi then be sushi.",
    author: "Martin Salmon",
  },
  {
    quote:
      "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more sushi.",
    author: "Thomas Tuna",
  },
  {
    quote: "The fastest way to change yourself is to hang out with Sushi maker",
    author: "Sushi restaurant",
  },
  {
    quote:
      "Money is like ginger during a sushi eating. You do not want to run out of ginger on your eating, but you are not doing a paying for a ginger",
    author: "Tim O Delicious",
  },
  {
    quote:
      "Some people dream of sushi, while other people get up every morning and make sushi",
    author: "Wayne Eel",
  },
  {
    quote:
      "The only thing worse than starting eating sushi and dispose.. is not starting eating sushi",
    author: "SEth Ginger",
  },
  {
    quote:
      "If you really want to eat sushi, you will find a way. If you do not, just try it.",
    author: "Jim Rice",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
