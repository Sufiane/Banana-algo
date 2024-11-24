const stringToTransform = 'CONSISTENCY';

const getStringConsonnes = (str: string): string[] => {
    return str.match(/[bcdfghjklmnpqrstvwxyz]/gi) || [];
}

const getStringVoyelles = (str: string): string[] => {
    return str.match(/[aeiou]/gi) || [];
}

const getVoyellesNumber = (str: string): number => {
    return (str.match(/[aeiou]/gi) || []).length
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

    if (getVoyellesNumber(str) === 0) {
        if (isStringSameCharacter(str)) {
            console.log(str);
            console.log(`0 seconde`);

            return
        }

        console.log('a'.repeat(str.length));
        console.log(`${str.length} seconde`);

        return
    }

    if (getVoyellesNumber(str) > str.length - getVoyellesNumber(str)) {
        const consonne = getStringConsonnes(str);
        const mostRepeatedConsonne = getMostRepeatedCharacter(consonne.join(''));

        [...str].forEach((x) => {
            if (x !== mostRepeatedConsonne && !getVoyellesNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (getVoyellesNumber(x)) {
                transformIterations++;
            }
        });

        console.log(mostRepeatedConsonne.repeat(transformIterations));
        console.log(`${mostRepeatedConsonne.repeat(transformIterations).length} seconde`);
    } else if (getVoyellesNumber(str) === str.length - getVoyellesNumber(str)) {
        [...str].forEach((x) => {
            if (x !== getMostRepeatedCharacter(str) && getVoyellesNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (x !== getMostRepeatedCharacter(str) && !getVoyellesNumber(x)) {
                transformIterations++;
            }
        });

        console.log(getMostRepeatedCharacter(str).repeat(str.length));
        console.log(`${getMostRepeatedCharacter(str).repeat(transformIterations).length} seconde`);
    } else if (getVoyellesNumber(str) === 0) {
        console.log('a'.repeat(str.length));
        console.log(`${str.length} seconde`);
    } else {
        const voyelles = getStringVoyelles(str);
        const maxVoyelle = getMostRepeatedCharacter(voyelles.join(''));

        [...str].forEach((x) => {
            if (x !== maxVoyelle && getVoyellesNumber(x)) {
                transformIterations = transformIterations + 2;
            } else if (!getVoyellesNumber(x)) {
                transformIterations++;
            }
        });

        console.log(maxVoyelle.repeat(transformIterations));
        console.log(`${maxVoyelle.repeat(transformIterations).length} seconde`);
    }
}

transformString(stringToTransform)
