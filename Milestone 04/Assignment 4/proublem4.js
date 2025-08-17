function checkParam(value) {
  if (value === undefined) {
    return "invalid";
  }
  return "valid";
}

// Example usage:
console.log(checkParam());       // "invalid"
console.log(checkParam(10));     // "valid"
console.log(checkParam("hello")); // "valid"