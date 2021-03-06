// Epic: Given an integar array of size n, find the maximum of the minimum(s) of every window size in the array.

// Create arrays of all window sizes 1 - n
// Find minimum of each array
// Find maximum all of all the minima

function solve(arr) {
  const n = arr.length;
  console.log(n);
  let windows = {};
  for (let x = 0; x < arr.length; x++) {
    windows[x + 1] = [];
  }
  console.log(windows);
  for (let i = 0; i < arr.length; i++) {
    console.log('index: ', i);
    for (let windowSize = 1; windowSize <= arr.length; windowSize++) {
      if (i + windowSize <= arr.length) {
        const windo = Math.min(...arr.slice(i, i + windowSize));
        windows[windowSize].push(windo);
      }
    }
  }
  console.log(windows);
  const maxNums = Object.keys(windows).map((win) => {
    return Math.max(...windows[win]);
  });
  console.log(maxNums);
  return maxNums;
}

solve([1, 2, 3, 5, 1, 13, 3]);
