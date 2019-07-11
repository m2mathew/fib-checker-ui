// Function to check if a number is in the Fibonacci sequence

// We start the sequence with the first two numbers preset
const set = [1, 2];

export default function fibChecker(number) {
  // exit early if the user puts in 0, empty value, or negative value
  if (!number || number < 0) {
    return false;

    // exit early if the user puts in 1 or 2
    //  since we already have those preset in our sequence
  } else if (set.includes(number)) {
    return true;
  }

  for (let i = 3; i <= number; i += 1) {
    if (i % (set[0] + set[1]) === 0) {
      set[0] = set[1];
      set[1] = i;
    }
  }

  if (set.includes(number)) {
    return true;
  }

  return false;
}
