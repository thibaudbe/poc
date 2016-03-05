
export default function(scriptId: string) {
  const node = document.getElementById(scriptId);
  return node && JSON.parse(node.getAttribute('data-value'));
}
