class VigenereCipheringMachine {
    constructor(direct = true) {
        this.direct = direct;
    }

    encrypt(str, key) {
        if (!str || !key) throw new Error();
        const arrEncode = str.toUpperCase().split('');
        const arrKey = key.toUpperCase().split('').map((elm) => elm.charCodeAt() - 65);

        let keyArrayPosition = 0;
        const resultArray = arrEncode.map((elm) => {
            let code = elm.charCodeAt();
            if (code < 64 || code > 90) return elm;
            let cipherCode = code + arrKey[keyArrayPosition];
            if (cipherCode > 90) cipherCode = cipherCode - 26;

            keyArrayPosition += 1;
            if (keyArrayPosition === arrKey.length) keyArrayPosition = 0;

            return String.fromCharCode(cipherCode);
        });

        return resultArray.join('');
    }

    decrypt(strDecode, strKey) {
        if (!strDecode || !strKey) throw new Error();


        return '';
    }
}

module.exports = VigenereCipheringMachine;
