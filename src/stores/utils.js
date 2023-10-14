// Copyright (c) 2023 code eye <code.eye1016@gmail.com>

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key));
const setLocalStorage = (key, value) =>
  window.localStorage.setItem(key, JSON.stringify(value));

export { getLocalStorage, setLocalStorage };
