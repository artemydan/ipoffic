let op = {
  id: -1, // Assume id is less than 0
  refs: ['existingRef'] // Assume there's already some existing value in refs
};

let ref = 'newRef';

if (op.id < 0) (op.refs = op.refs || []).push(ref);

console.log(op.refs); // Output: ['existingRef', 'newRef']
