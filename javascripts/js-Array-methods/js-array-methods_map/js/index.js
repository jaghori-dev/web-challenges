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
    tags: ["js", "next", "advanced"],
  },
];

const lowerCaseAnswers = null; // ['as often as you like.', ...]
// cards.map((card)=>{
// console.log(card.answer.toLowerCase())
// })

const questionsAndAnswersTogether = null; // ["How often can I use <header>? - As often as you like.", ...]
// cards.map((card)=> {
//   console.log(card.question +" - "+ card.answer)
// })

const questionAndAnswer = null; // [{ question: 'How often can I use <header>?', answer: 'As often as you like.'}, {...}]
cards.map((card)=> {
  const neww = `questiion: ${card.question} , answer: ${card.answer}`
  console.log(neww)
})

export { lowerCaseAnswers, questionsAndAnswersTogether, questionAndAnswer };
