console.clear();

const cards = [
  {
    id: "1",
    isBookmarked: false,
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

// const onlyCardWithIdTwo = null;
// // cards.filter((card)=> {
// //   if (card.id == 2){
// //        console.log(card)
// //   }
 
// })
// const allCardsWith3Tags = null;
// cards.filter((card)=> {
//   if (card.tags.length === 3){
//     console.log(card.tags)
//   }
//   // console.log(card.tags.length)
// })

// const allCardsThatAreNotBookmarked = null;
// cards.map((card)=>{
//   if (card.isBookmarked){
//     console.log(card)
//   }
// })

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter((card)=> {
  isBookmarked && (card.tags.includes("html") || card.answer.tags.includes("js"))
});

console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked)
// export {
//   onlyCardWithIdTwo,
//   allCardsWith3Tags,
//   allCardsThatAreNotBookmarked,
//   allCardsWithTagsHTMLOrJSThatAreBookmarked,
// };
