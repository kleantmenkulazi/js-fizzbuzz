console.log('Js collegato');

const myList = document.querySelector('ol');

for (
    let i = 1;
    i != 101;
    i++
) {
    const newLi = document.createElement('li');
    if (i % 3 == 0 && i % 5 == 0) {
        newLi.append('FizzBuzz');
        newLi.classList.add('fizzbuzz');
}
else if (i % 3 == 0) {
    newLi.append('Fizz');
    newLi.classList.add('fizz');
}
else if (i % 5 == 0) {
    newLi.append('Buzz');
    newLi.classList.add('buzz');
}
else {
    newLi.append(i);
}
 myList.append(newLi);
}