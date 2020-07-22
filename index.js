let tutorials = [
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
  let newTutorials = tutorials.map( tutorial => {
    let splitTutorial = tutorial.split(" ")
    let splitUpperCaseTutorial = splitTutorial.map(word => {
      word = word.split('')
      let firstLetter = word.shift()
      firstLetter = firstLetter.toUpperCase()
      word.unshift(firstLetter)
      return word = word.join('')
    })
    return splitUpperCaseTutorial.join(" ")
  })
  return newTutorials
}
