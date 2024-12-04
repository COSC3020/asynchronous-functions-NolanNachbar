# Asynchronicity

Implement a function that takes an array and a key to search for and counts the
number of times key matches an element in the array (the count matches function
we talked about in lectures). Your implementation must count the number of
matches asynchronously, but does not need to do so in parallel. What type of
asynchronous execution you choose is up to you.

I have not provided a template; depending on how you choose to implement the
function, it will have a different signature.

I have also not provided any test code, but you can base yours on test code from
other exercises. Your tests must check the correctness of the result of running
the function and run automatically when you commit through a GitHub action.

The [async library](https://caolan.github.io/async/v3/) may be helpful with
this.

## Runtime Analysis

What is the time complexity of your implementation (worst-case $\Theta$)? Add
your answer, including your reasoning, to this markdown file.

Recall my code,
```js
function numMatches(ar, key) {
  let count = 0;
  return new Promise((resolve) => {
    async.each(ar, function(i, done) { // This is O(n)
      if (i == key) count++;
      done();
    }, function() {
      resolve(count);
    });
  });
}
```

Although this code is asynchronous it will still only iterate over the array once hence the time complexity is $O(n)$. Also note that because it iterates over the whole list in any case, the function is $\Theta(n)$


I used the general syntax specifically the promise syntax from the "Try it" part of this:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function

I used this to help me setup the main.yml file:

https://caolan.github.io/async/v3/

I learned enough about async.each from this to implement it in my code:

https://stackoverflow.com/questions/35258277/difference-between-async-each-and-async-eachseries

For my testcode I just modified the tescode from my local search tsp assignment. I had to put it in an async function like the one in the try it section of the first source I listed to make it test properly.

I wrote the main part of my code independently and just used the sources I cited for the specific syntax/outline.

I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice.

