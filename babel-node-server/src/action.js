export default function(data) {
  return data.map(item => {
    return `${item.label} use to ${item.value}`;
  });
}
