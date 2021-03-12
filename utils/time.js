function parseSecond(seconds) {
        let minutes = Math.floor(seconds/60);
        let second = seconds%60;
        let result = "";

        if (minutes) {
          result += `${minutes} menit`;
          if (second) {
            result += ` `;
          }
        }

        if (second) {
          result += `${second} detik`;
        }

        return result;
}

module.exports = {
    parseSecond
}