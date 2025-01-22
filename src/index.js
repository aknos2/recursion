function fibs(n) {
  const array = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    array.push(a);
    let c = a + b;
    a = b;
    b = c;
  }
  return array;
}

function fibsRec(n, array = [0, 1]) {
  console.log("This was printed recursively");
  if (array.length >= n) {
    return array.slice(0, n);
  }

  const nextNumber = array[array.length - 2] + array[array.length - 1];
  return fibsRec(n, [...array, nextNumber]);
}

console.log(fibsRec(8));
