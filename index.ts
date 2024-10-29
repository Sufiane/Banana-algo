const string = "SUFIANE";
const countVoyelle = str => (str.match(/[aeiou]/gi) || []).length;
const arrayVoyelle = str => (str.match(/[aeiou]/gi) || []);
const arrayConsonne = str => (str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []);
let i = 0;

if (countVoyelle(string) > string.length - countVoyelle(string)) {
  const consonne = arrayConsonne(string);
  const maxConsonne = maxCharacter(consonne.join(''));
  [...string].forEach((x) => {
    if (x !== maxConsonne && !countVoyelle(x)) {
      i = i + 2;
    } else if (countVoyelle(x)) {
      i++
    }
  });
  console.log(maxConsonne.repeat(i))
  console.log(`${maxConsonne.repeat(i).length} seconde`)
} else if (countVoyelle(string) == string.length - countVoyelle(string)) {
  [...string].forEach((x) => { 
    if (x !== maxCharacter(string) && countVoyelle(x)) {
      i = i +2;
    } else if (x !== maxCharacter(string) && !countVoyelle(x)) {
      i++
    }
  });
  console.log(maxCharacter(string).repeat(string.length))
  console.log(`${maxCharacter(string).repeat(i).length} seconde`)
} else if (countVoyelle(string) == 0) {
    console.log('a'.repeat(string.length))
    console.log(`${string.length} seconde`)
} else {
    const voyelles = arrayVoyelle(string)
   const maxVoyelle = maxCharacter(voyelles.join(''));
   [...string].forEach((x) => {
      if (x !== maxVoyelle && countVoyelle(x)) {
        i = i + 2
      } else if (!countVoyelle(x)) {
        i++
      }
    });
    
    console.log(maxVoyelle.repeat(i))
    console.log(`${maxVoyelle.repeat(i).length} seconde`)
}


function maxCharacter(str){
  const charMap = {};
  let max = 0, maxChar = "";

  for(let char of str){
    charMap[char] = charMap[char] + 1 || 1;
  }

  for(let char in charMap){
    if(charMap[char] > max){
      max = charMap[char];
      maxChar = char;
    }
  }
  
  return maxChar;
}
