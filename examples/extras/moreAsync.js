const moreAsync = () => {
  console.log('Start');
  setTimeout(() => console.log('setTimeout'), 0);
  Promise.resolve('Promise One').then((msg) => console.log(msg));
  Promise.resolve('Promise Two').then((msg) => console.log(msg));
  console.log('End');
};

moreAsync();
// Start, End, PromiseOne, PromiseTwo and setTimeout.
