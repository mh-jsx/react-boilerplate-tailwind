

/**
 * @param {string} name - The name of the storage item to set.
 * @param {object} data - data to be stored in storage
 * @param {boolean} jsonStringify - if true, data will be stringified before storing in storage
 */
export function setSessionStorage(name, data, jsonStringify = true) {
  sessionStorage.setItem(name, jsonStringify ? JSON.stringify(data) : data);
}
export function setLocalStorage(name, data, jsonStringify = true) {
  localStorage.setItem(name, jsonStringify ? JSON.stringify(data) : data);
}

/**
 *
 * @param {name} name - The name of the storage item to get.
 * @param {boolean} jsonParse - if true, data will be parsed from storage before returning
 * @returns {object} - data stored in storage
 */
export function getSessionStorage(name, jsonParse = true) {
  return jsonParse
    ? JSON.parse(localStorage.getItem(name))
    : sessionStorage.getItem(name);
}
export function getLocalStorage(name, jsonParse = true) {
  return jsonParse
    ? JSON.parse(localStorage.getItem(name))
    : localStorage.getItem(name);
}
