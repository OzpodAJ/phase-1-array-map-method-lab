const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (tutorials) => {
  const bravo = tutorials.toLowerCase().split(' ').map(function(article){
    return (article.charAt(0).toUpperCase() + article.slice(1));
  }).join(' ');
  console.log(tutorials);
  return tutorials;
}

titleCased(tutorial )

