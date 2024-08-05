var countSeniors = function (details) {
    let count = 0
    for (let detail of details) {
        let age = parseInt(detail.slice(11, 13));
        if (age > 60) {
            count += 1;
        }
    }
    return count;
};
const details = ["7868190130M7522", "5303914400F9211", "9273338290F4010"]
console.log(countSeniors(details))
