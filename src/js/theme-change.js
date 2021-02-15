const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const switchChange = document.querySelector('#theme-switch-toggle');
const bodySel = document.querySelector('body');

switchChange.addEventListener('change', changeTheme);

const resultLocalStorage = localStorage.getItem('Theme');

function darkTheme() {
  bodySel.classList.add(Theme.DARK);
  bodySel.classList.remove(Theme.LIGHT);
  switchChange.checked = true;
}

function lightTheme() {
  bodySel.classList.add(Theme.LIGHT);
  bodySel.classList.remove(Theme.DARK);
  switchChange.checked = false;
}

function changeTheme() {
  if (switchChange.checked === true) {
    darkTheme();
    localStorage.setItem('Theme', bodySel.getAttribute('class'));
  } else if (switchChange.checked === false) {
    lightTheme();
    localStorage.setItem('Theme', bodySel.getAttribute('class'));
  }
}

if (resultLocalStorage === Theme.DARK) {
  switchChange.checked = true;
  bodySel.classList.add(resultLocalStorage);
} else if (resultLocalStorage === Theme.LIGHT) {
  switchChange.checked = false;
  bodySel.classList.add(resultLocalStorage);
}

///////////////////////////////////////////////
// bodySel.classList.add('light-theme');

// function switchClass() {
//   if (switchChange.checked) {
//     bodySel.classList.add(Theme.DARK);
//     bodySel.classList.remove(Theme.LIGHT);
//   } else {
//     bodySel.classList.add(Theme.LIGHT);
//     bodySel.classList.remove(Theme.DARK);
//   }
// }

// switchChange.addEventListener('change', switchClass);
// switchChange.addEventListener('change', themeSaveLocal);

// function themeSaveLocal() {
//   localStorage.setItem('Theme', bodySel.getAttribute('class'));
// }

// const resultLocalStorage = localStorage.getItem('Theme');
// bodySel.classList.add(resultLocalStorage);

// if (resultLocalStorage === Theme.DARK) {
//   switchChange.checked = true;
// } else if (resultLocalStorage === Theme.LIGHT) {
//   switchChange.checked = false;
// }

//////////////////////////////////////////////////////
