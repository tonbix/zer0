module.exports = (str, args) => {
    i = 0
    return str.replace(/{}/g, () => {
        return typeof args[i] != 'undefined' ? args[i++] : '';
      });
}
