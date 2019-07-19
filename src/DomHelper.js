const stripHtml = element => element.innerHTML.replace(/<[^>]*>?/gm, '');

const getOffset = el => {
  var rect = el.getBoundingClientRect();

  return {
    top: rect.top + document.body.scrollTop,
    left: rect.left + document.body.scrollLeft
  };
};

const index = element => {
  let children = element.parentNode.childNodes;
  let num = 0;
  for (var i = 0; i < children.length; i++) {
    if (children[i] === element) return num;
    if (children[i].nodeType === 1) num++;
  }
  return -1;
};

const addClass = (element, className) => {
  if (element.classList) element.classList.add(className);
  else element.className += ' ' + className;
};

const removeClass = (element, className) => {
  if (element.classList) element.classList.remove(className);
  else
    element.className = element.className.replace(
      new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'),
      ' '
    );
};

const hasClass = (element, className) => {
  if (element.classList) return element.classList.contains(className);
  else return new RegExp('(^| )' + className + '( |$)', 'gi').test(element.className);
};

const findFirstChildWithClassName = (element, className) => {
  const matches = element.getElementsByClassName(className);

  if (matches && matches.length > 0) return matches[0];

  return null;
};

const getHiddenElementOuterHeight = element => {
  element.style.visibility = 'hidden';
  element.style.display = 'block';
  let elementHeight = element.offsetHeight;
  element.style.display = 'none';
  element.style.visibility = 'visible';

  return elementHeight;
};

const getHiddenElementOuterWidth = element => {
  element.style.visibility = 'hidden';
  element.style.display = 'block';
  let elementWidth = element.offsetWidth;
  element.style.display = 'none';
  element.style.visibility = 'visible';

  return elementWidth;
};

export default {
  stripHtml,
  getOffset,
  index,
  addClass,
  removeClass,
  hasClass,
  getHiddenElementOuterHeight,
  getHiddenElementOuterWidth,
  findFirstChildWithClassName
};
