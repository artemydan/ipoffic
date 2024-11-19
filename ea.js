function cleanTerm(term) {
  return term.trim();
}

// Example usage
let term = "   Hello, World!   ";
let cleanedTerm = cleanTerm(term);
console.log(cleanedTerm);  // Output: "Hello, World!"
