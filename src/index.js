module.exports = function toReadable(n) {
    let dict = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
        hundred: "hundred",
    };
    switch ((n + "").length) {
        case 1:
            return dict[n];
        case 2:
            if (n < 20) {
                return dict[n];
            } else {
                return ("" + n)[1] == "0"
                    ? dict[n]
                    : dict[Number((n + "").slice(0, 1) + "0")] +
                          " " +
                          dict[Number((n + "").slice(1))];
            }
        case 3:
            if ((n + "").slice(1, 3) == "00") {
                return dict[Number((n + "").slice(0, 1))] + " " + dict.hundred;
            } else if ((n + "").slice(1, 2) == "0") {
                return (
                    dict[Number((n + "").slice(0, 1))] +
                    " " +
                    dict.hundred +
                    " " +
                    dict[Number((n + "").slice(2))]
                );
            } else if ((n + "").slice(2) == "0") {
                return (
                    dict[Number((n + "").slice(0, 1))] +
                    " " +
                    dict.hundred +
                    " " +
                    dict[Number((n + "").slice(1))]
                );
            } else {
                return Number((n + "").slice(1)) < 20
                    ? dict[Number((n + "").slice(0, 1))] +
                          " " +
                          dict.hundred +
                          " " +
                          dict[Number((n + "").slice(1))]
                    : dict[Number((n + "").slice(0, 1))] +
                          " " +
                          dict.hundred +
                          " " +
                          dict[Number((n + "").slice(1, 2) + "0")] +
                          " " +
                          dict[Number((n + "").slice(2))];
            }
        default:
            return "enter valid number";
    }
};
