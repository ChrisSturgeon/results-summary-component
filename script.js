import results from './data.json' assert { type: 'json' };

const resultsAverage = document.querySelector('#resultsAverage');
const reactionResult = document.querySelector('#reactionResult');
const memoryResult = document.querySelector('#memoryResult');
const verbalResult = document.querySelector('#verbalResult');
const visualResult = document.querySelector('#visualResult');

function getResultByCategory(category) {
  const matchingCategory = results.find((result) => {
    return category.toLowerCase() === result.category.toLowerCase();
  });

  if (matchingCategory) {
    return matchingCategory.score;
  }

  throw new Error(
    `The category "${category}" does not exist in the results set`
  );
}

function calculateAverageResult() {
  const total = results.reduce((total, current) => total + current.score, 0);
  const numOfCategories = results.length;

  return Math.round(total / numOfCategories);
}

function updateResults() {
  resultsAverage.innerText = calculateAverageResult();
  reactionResult.innerText = getResultByCategory('reaction');
  memoryResult.innerText = getResultByCategory('memory');
  verbalResult.innerText = getResultByCategory('verbal');
  visualResult.innerText = getResultByCategory('visual');
}

updateResults();
