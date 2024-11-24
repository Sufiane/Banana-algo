const stringToTransform = 'CONSISTENCY';
const CONSONANTS_REGEX = /[bcdfghjklmnpqrstvwxyz]/gi
const VOWELS_REGEX = /[aeiou]/gi

const getStringConsonants = (str: string): string[] => {
    return str.match(CONSONANTS_REGEX) || [];
}

const getStringVowels = (str: string): string[] => {
    return str.match(VOWELS_REGEX) || [];
}

const getVowelsNumber = (str: string): number => {
    return getStringVowels(str).length
}

const isStringSameCharacter = (str: string): boolean => {
    return new Set(str).size === 1
}

const getMostRepeatedCharacter = (str: string): string => {
    const charMap: Record<string, number> = {};
    let max = 0
    let maxChar = '';

    for (let char of str) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    for (let char in charMap) {
        if (charMap[char] > max) {
            max = charMap[char];
            maxChar = char;
        }
    }

    return maxChar;
}

const transformString = (str: string) => {
    let transformIterations = 0;

    if (getVowelsNumber(str) === 0) {
        if (isStringSameCharacter(str)) {
            console.log(str);
            console.log(`0 seconde`);

            return
        }

        console.log('a'.repeat(str.length));
        console.log(`${str.length} seconde`);

        return
    }

    if (getVowelsNumber(str) > str.length - getVowelsNumber(str)) {
        const consonne = getStringConsonants(str);
        const mostRepeatedConsonne = getMostRepeatedCharacter(consonne.join(''));

        [...str].forEach((x) => {
            if (x !== mostRepeatedConsonne && !getVowelsNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (getVowelsNumber(x)) {
                transformIterations++;
            }
        });

        console.log(mostRepeatedConsonne.repeat(transformIterations));
        console.log(`${mostRepeatedConsonne.repeat(transformIterations).length} seconde`);
    } else if (getVowelsNumber(str) === str.length - getVowelsNumber(str)) {
        [...str].forEach((x) => {
            if (x !== getMostRepeatedCharacter(str) && getVowelsNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (x !== getMostRepeatedCharacter(str) && !getVowelsNumber(x)) {
                transformIterations++;
            }
        });

        console.log(getMostRepeatedCharacter(str).repeat(str.length));
        console.log(`${getMostRepeatedCharacter(str).repeat(transformIterations).length} seconde`);
    } else if (getVowelsNumber(str) === 0) {
        console.log('a'.repeat(str.length));
        console.log(`${str.length} seconde`);
    } else {
        const voyelles = getStringVowels(str);
        const maxVoyelle = getMostRepeatedCharacter(voyelles.join(''));

        [...str].forEach((x) => {
            if (x !== maxVoyelle && getVowelsNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (!getVowelsNumber(x)) {
                transformIterations++;
            }
        });

        console.log(maxVoyelle.repeat(transformIterations));
        console.log(`${maxVoyelle.repeat(transformIterations).length} seconde`);
    }
}

transformString(stringToTransform)
