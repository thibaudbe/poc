import { toArray } from './array';


export default function(list, currentY) {
  const currentItemId = getCurrentItem(list, currentY).id;

  if (location.hash !== currentItemId)
    setHash(currentItemId);
}

function getCurrentItem(list, currentY) {
  const filteredList = toArray(list).filter(item => {
    return item.offsetTop <= currentY ? item : null;
  });

  const currentIndex = getCurrentIndex(list, filteredList);
  return list[currentIndex];
}

function getCurrentIndex(list, filteredList) {
  const listLength = list.length -1;
  const filteredListLength = filteredList.length -1;

  if (filteredListLength < 0)
    return 0;
  else if (filteredListLength > listLength)
    return listLength;
  else
    return filteredListLength;
}

function setHash(str) {
  if (history.pushState)
    history.pushState(null, null, `#${str}`);
  else
    location.hash = `#${str}`;
}
