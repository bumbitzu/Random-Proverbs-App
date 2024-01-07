const proverbs = require('./proverbs.json');

const generateProverbs = (arr) =>
{
  const randomIndex = Math.floor(Math.random()*arr.length)
  const currentProverb = arr[ randomIndex ]
  console.log(currentProverb);
}
generateProverbs(proverbs)