export const FormatScore = (score) => {
    const scoreLength = score.toString().length;
    let dotScore = 0;
    if (scoreLength < 4) {
        return score.toString();
    }
    else if (scoreLength < 7) {
        dotScore = (score / 1000).toFixed(2);
        return `${dotScore}k`;
    }
    else {
        dotScore = (score / 1000000).toFixed(2);
        return `${dotScore}M`;
    }
}