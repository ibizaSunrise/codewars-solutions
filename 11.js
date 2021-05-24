function formatDuration(seconds) {
    let y = 365 * 24 * 3600;
    let d = 24 * 3600;
    let h = 3600;
    let arr = [];

    if (seconds == 0) return 'now';

    if (seconds >= y) {
        arr.push(`${parseInt(seconds / y) == 1 ? `${parseInt(seconds / y)} year` : `${parseInt(seconds / y)} years`}`);
        seconds = seconds % y;
    };

    if (seconds < y && seconds >= d) {
        arr.push(`${parseInt(seconds / d) == 1 ? `${parseInt(seconds / d)} day` : `${parseInt(seconds / d)} days`}`);
        seconds = seconds % d;
    };

    if (seconds < d && seconds >= 3600) {
        arr.push(`${parseInt(seconds / h) == 1 ? `${parseInt(seconds / h)} hour` : `${parseInt(seconds / h)} hours`}`);
        seconds = seconds % h;
    };

    if (seconds < 3600 && seconds >= 60) {
        arr.push(`${parseInt(seconds / 60) == 1 ? `${parseInt(seconds / 60)} minute` : `${parseInt(seconds / 60)} minutes`}`);
        seconds = seconds % 60;
    };

    if (seconds < 60 && seconds != 0) {
        arr.push(`${seconds == 1 ? `${seconds} second` : `${seconds} seconds`}`);
    };

    if (arr.length > 1) {
        return arr.join(', ').replace(/,(?![^,]*,)/m, ' and');
    } else {
        return arr.join(', ');
    };

}