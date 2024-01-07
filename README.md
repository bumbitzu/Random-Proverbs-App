# Random Proverbs Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This JavaScript code generates random proverbs from a collection based on the Bible.

## Overview

This project consists of a JavaScript script (app.js) that generates random proverbs from a JSON file (proverbs.json) containing wisdom sayings from the Bible. The `generateProverbs` function randomly selects a proverb and logs it to the console.

```javascript
const proverbs = require('./proverbs.json');

const generateProverbs = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const currentProverb = arr[randomIndex];
  console.log(currentProverb);
}

generateProverbs(proverbs);
```
## Sample Output

When you run the code, you might get outputs like these:
```
A wise son is a father's joy, but a foolish son is his mother's grief.
```
## How to Use

1. Clone this repository to your local machine.
2. Make sure you have Node.js installed.
3. Open a terminal and navigate to the project folder.
4. Run the following command to generate a random proverb:

```bash
node app.js
```
## About the Proverbs

The proverbs used in this application are wisdom sayings from the Bible. Each proverb imparts valuable life lessons and insights on various aspects of life, morality, and character. They serve as a source of guidance and reflection for many individuals.

