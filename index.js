module.exports = (str, len, ch) => len - (str = (str).toString()).length <= 0 ? str : `${(!ch && ch !== 0 && ' ' || ch).toString().repeat(len - str.length)}${str}`;