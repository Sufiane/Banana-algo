import { Result } from './type';

const stringToTransform = 'UUUUUU';
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

const getConsonantsNumber = (str: string): number => {
    return getStringConsonants(str).length
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

const handleConsonantsString = (str: string): Result => {
    if (isStringSameCharacter(str)) {
        return {
            originalString: str,
            transformedString: str,
            time: 0,
        }
    }

    return {
        originalString: str,
        transformedString: 'a'.repeat(str.length),
        time: str.length,
    }
}

const handleVowelsString = (str: string): Result => {
    if (isStringSameCharacter(str)) {
        return {
            originalString: str,
            transformedString: str,
            time: 0,
        }
    }

    return {
        originalString: str,
        transformedString: 'b'.repeat(str.length),
        time: str.length,
    }
}


const transformString = (str: string): Result => {
    let transformIterations = 0;

    if (getVowelsNumber(str) === 0) {
        return handleConsonantsString(str);
    }

    if (getConsonantsNumber(str) === 0) {
        return handleVowelsString(str);
    }

    if (getVowelsNumber(str) > str.length - getVowelsNumber(str)) {
        const consonants = getStringConsonants(str);
        const mostRepeatedConsonant= getMostRepeatedCharacter(consonants.join(''));

        [...str].forEach((x) => {
            if (x !== mostRepeatedConsonant && !getVowelsNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (getVowelsNumber(x)) {
                transformIterations++;
            }
        });

        return {
            originalString: str,
            transformedString: mostRepeatedConsonant.repeat(transformIterations),
            time: mostRepeatedConsonant.repeat(transformIterations).length,
        }
    } else if (getVowelsNumber(str) === str.length - getVowelsNumber(str)) {
        [...str].forEach((x) => {
            if (x !== getMostRepeatedCharacter(str) && getVowelsNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (x !== getMostRepeatedCharacter(str) && !getVowelsNumber(x)) {
                transformIterations++;
            }
        });

        return {
            originalString: str,
            transformedString: getMostRepeatedCharacter(str).repeat(str.length),
            time: getMostRepeatedCharacter(str).repeat(transformIterations).length,
        }
    } else {
        const vowels = getStringVowels(str);
        const mostRepeatedVowel = getMostRepeatedCharacter(vowels.join(''));

        [...str].forEach((x) => {
            if (x !== mostRepeatedVowel && getVowelsNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (!getVowelsNumber(x)) {
                transformIterations++;
            }
        });

        return {
            originalString: str,
            transformedString: mostRepeatedVowel.repeat(transformIterations),
            time: mostRepeatedVowel.repeat(transformIterations).length,
        }
    }
}

console.log(transformString(stringToTransform))
