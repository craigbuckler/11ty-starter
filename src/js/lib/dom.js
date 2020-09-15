// get element by Id
export function id(id, doc = document) {

  return doc.getElementById(id);

}

// get element by class name
export function className(className, doc = document) {

  return doc.getElementsByClassName(className);

}

// get single element CSS selector
export function query(sel, doc = document) {

  return doc.querySelector(sel);

}
