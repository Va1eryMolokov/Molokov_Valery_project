export function isValidName(name) {
    
    const words = name.trim().split(" ");

    
    return words.length === 2 && words.every(word => /^[A-ZА-Я][a-zа-я]*$/.test(word));
}

export function isValidPassword(password) {
    return password.length >= 8 && /\d/.test(password);
}