module.exports = function action(data) {
  return data.map(item => {
    return `${item.label} use to ${item.value}`;
  });
};
