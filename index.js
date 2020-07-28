const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  let changed = tutorials.map(function (tutorial) {
    let arrayTitle = tutorial.split(" ")
    for (let i= 0; i < arrayTitle.length; i++) {
      arrayTitle[i] = arrayTitle[i][0].toUpperCase() + arrayTitle[i].slice(1);
    }
    return arrayTitle.join(" ")
  })

  return changed
}

// const titleCased = tutorials.map(function (tutorial) {
//   let arrayTitle = tutorial.split(" ")
//   for (let i= 0; i < arrayTitle.length; i++) {
//     arrayTitle[i] = arrayTitle[i][0].toUpperCase() + arrayTitle[i].slice(1);
//   }
//   return arrayTitle.join()
// })