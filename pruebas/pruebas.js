class Enigma {
    
    static code = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat',
    }

    static encrypt(text) {

        let finalText = '';

        for (const character of text) {
            finalText += Enigma.code[character] == undefined ? character : Enigma.code[character];
        }

        return finalText;

    }

    static decrypt(text) {

        let finalText = '';

        for (let i = 0; i < text.length; i++) {
            if (Enigma.code[text[i]] == undefined) {
                finalText += text[i];
            } else {
                finalText += text[i];
                i += Enigma.code[text[i]].length - 1;
            }
        }

        return finalText;

    }

}

console.log(Enigma.encrypt('perro'));
console.log(Enigma.decrypt("gaitober gaiimes"));

console.log(Enigma.decrypt('o'));