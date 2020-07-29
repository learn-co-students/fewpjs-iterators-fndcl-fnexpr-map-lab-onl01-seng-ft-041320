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
//
const titleCased = () => {
  return tutorials.map(titleCaseAnArray)
}

function titleCaseAnArray(string) {
  let newArray = string.split(" ")
  return newArray.map(str => str.charAt().toUpperCase() + str.slice(1)).join(" ")
}
