export function isEmpty(val) {
    return val.trim().length === 0;
}

export function isValidEmail(val) {
    return new RegExp(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    ).test(val);
}

export function isValidImageUrl(val) {
    return new RegExp(/(https?:\/\/.*\.(?:png|jpg))/i).test(val);
}
