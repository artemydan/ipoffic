function* myGenerator() {
  let update = yield 'Initial Value';
  console.log('Update:', update);
  yield 'Final Value';
}

const continuation = myGenerator();

console.log(continuation.next()); // { value: 'Initial Value', done: false }
console.log(continuation.next('Updated Value')); // { value: 'Final Value', done: false }
