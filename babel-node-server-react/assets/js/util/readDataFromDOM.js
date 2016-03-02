
export default function(scriptId) {
  const node = document.getElementById(scriptId);
  return node && JSON.parse(node.getAttribute('data-value'));
}
