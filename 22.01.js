function solution(input, markers) {
    let marker = false;
    let result = [];
    let letters = input.split('');

    letters.forEach((element) => {
        if (markers.includes(element)) marker = true;
        if (marker && element === "\n") marker = false;
        !marker && result.push(element);
    });

    return result.join('').replace(/\s\n/, '\n').trim();
};