export const FormatScore = (score) => {
    const scoreLength = score.toString().length;
    let dotScore = 0;
    if (scoreLength < 4) {
        return score.toString();
    }
    else if (scoreLength < 7) {
        dotScore = score / 1000;
        return `${dotScore}k`;
    }
    else {
        dotScore = score / 1000000;
        return `${dotScore}M`;
    }
}