let text = "Кто такой Джон Голт? Уже темнело, и Эдди Уиллерс не мог различить лица этого типа. Бродяга произнес четыре слова просто, без выражения. Однако далеки отсвет заката, еще желтевшего в конце улицы, отражался в его глазах, и глаза эти смотрели на Эдди Уиллерса как бы и с насмешкой, и вместе с тем невозмутимо, словно вопрос был адресован снедавшему его беспричинному беспокойству";

let arr = text.replace(/[.,!?]/g, '').toLowerCase().split(' ');
let wordCounts = {};

arr.forEach(arr => {
   wordCounts[arr] = (wordCounts[arr] || 0) + 1;
});

let maxCount = 0;
let countVal;

for (let key in wordCounts) {
   let temp = wordCounts[key]
   if (maxCount < temp){
      maxCount = temp;
      countVal = key
   }   
}

console.log(maxCount, countVal)

