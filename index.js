const colors = {
    fg: {
        black: "\u001b[30m",
        red: "\u001b[31m",
        green: "\u001b[32m",
        yellow: "\u001b[33m",
        blue: "\u001b[34m",
        magenta: "\u001b[35m",
        cyan: "\u001b[36m",
        white: "\u001b[37m",
    },
    bg: {
        black: "\u001b[40m",
        red: "\u001b[41m",
        green: "\u001b[42m",
        yellow: "\u001b[43m",
        blue: "\u001b[44m",
        magenta: "\u001b[45m",
        cyan: "\u001b[46m",
        white: "\u001b[47m",
    },
    mods: {
        dim: "\u001b[2m",
        underline: "\u001b[4m",
        blink: "\u001b[5m",
        reverse: "\u001b[7m",
        hidden: "\u001b[8m",
        bold: "\u001b[1m",
    },
    reset: "\u001b[0m",
};

module.exports = colors;