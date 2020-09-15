// light/dark theme switch
import * as dom from './dom.js';

window.addEventListener('DOMContentLoaded', () => {

  const
    toggleId = 'themetoggle',
    body = document.body;

  let
    theme =
      localStorage.getItem(toggleId) ||
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // set body class
  body.classList.add(theme);

  // detect theme switch
  dom.id(toggleId).addEventListener('click', e => {

    e.preventDefault();

    body.classList.remove(theme);
    theme = (theme === 'dark' ? 'light' : 'dark');
    body.classList.add(theme);
    localStorage.setItem(toggleId, theme);

  });

});
