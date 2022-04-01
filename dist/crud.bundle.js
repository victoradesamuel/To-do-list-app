/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/images/delete.png":
/*!**********************************!*\
  !*** ./assets/images/delete.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ca5c575d518810ab2af.png";

/***/ }),

/***/ "./assets/images/dots.png":
/*!********************************!*\
  !*** ./assets/images/dots.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "053eb1b5e1182ab398c2.png";

/***/ }),

/***/ "./assets/images/save.jpeg":
/*!*********************************!*\
  !*** ./assets/images/save.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e8d6db4bccfa0ac5eaf.jpeg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/crud.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearCompletedTodos": () => (/* binding */ clearCompletedTodos),
/* harmony export */   "createTodos": () => (/* binding */ createTodos),
/* harmony export */   "storeTodos": () => (/* binding */ storeTodos)
/* harmony export */ });
/* harmony import */ var _assets_images_dots_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/images/dots.png */ "./assets/images/dots.png");
/* harmony import */ var _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/images/delete.png */ "./assets/images/delete.png");
/* harmony import */ var _assets_images_save_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/images/save.jpeg */ "./assets/images/save.jpeg");




class Todo {
  constructor(description, completed, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

const deleteTodos = (e) => {
  const removeBtn = e.target;
  const btnClass = removeBtn.className;
  const btnId = btnClass.split('-');
  const id = parseInt(btnId[1], 10);
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos = existingTodos.filter((todos, index) => index !== id);
  removeBtn.parentNode.remove();
  existingTodos.forEach((task, i) => (task.index = i + 1));
  localStorage.setItem('todos', JSON.stringify(existingTodos));
  createTodos();
};

const clearCompletedTodos = () => {
  const completed = document.querySelectorAll('input:checked');
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  if (completed) {
    completed.forEach((elem) => {
      const task = elem.parentNode;
      task.parentNode.remove();
    });
  }
  existingTodos = existingTodos.filter((todos) => todos.completed === false);
  existingTodos.forEach((task, i) => (task.index = i + 1));
  localStorage.setItem('todos', JSON.stringify(existingTodos));
};

const saveTodos = (e) => {
  const saveBtn = e.target;
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  const btnClass = saveBtn.className;
  const btnId = btnClass.split('-');
  const id = parseInt(btnId[1], 10);
  const taskList = document.querySelector(`#tasks-${id}`);
  const saveEdit = document.querySelector(`.save-${id}`);
  const deleteEdit = document.querySelector(`.delete-${id}`);
  const inputId = document.querySelector(`#complete-${id}`);
  const editBtn = document.getElementById(`${id}`);

  editBtn.style.display = 'block';
  inputId.style.outline = 'none';

  existingTodos[id].description = inputId.value;
  localStorage.setItem('todos', JSON.stringify(existingTodos));
  saveEdit.remove();
  deleteEdit.remove();
  taskList.classList.remove('active');
  inputId.setAttribute('readonly', true);
};

const completedTodos = (e) => {
  const checkbox = e.target;
  let btnId = checkbox.id;
  btnId = btnId.split('-');
  const id = parseInt(btnId[1], 10);
  const inputId = document.querySelector(`#complete-${id}`);
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  if (checkbox.checked) {
    existingTodos[id].completed = true;
    inputId.style.textDecoration = 'line-through';
    localStorage.setItem('todos', JSON.stringify(existingTodos));
  } else {
    existingTodos[id].completed = false;
    inputId.style.textDecoration = 'none';
    localStorage.setItem('todos', JSON.stringify(existingTodos));
  }
};

const editTodos = (e) => {
  const editInput = e.target;
  const editBtn = document.getElementById(`${editInput.id}`);
  const inputId = document.querySelector(`#complete-${editInput.id}`);
  inputId.removeAttribute('readonly');
  inputId.focus();

  editBtn.style.display = 'none';
  inputId.style.outline = 'auto';
  inputId.style.outlineColor = 'gray';

  const taskList = document.querySelector(`#tasks-${editInput.id}`);
  taskList.classList.add('active');

  const task = document.querySelector(`#task-${editInput.id}`);

  const save = document.createElement('img');
  save.setAttribute('src', _assets_images_save_jpeg__WEBPACK_IMPORTED_MODULE_2__);
  save.classList.add(`save-${editInput.id}`);
  task.appendChild(save);

  const removeBtn = document.createElement('img');
  removeBtn.classList.add(`delete-${editInput.id}`);
  removeBtn.setAttribute('src', _assets_images_delete_png__WEBPACK_IMPORTED_MODULE_1__);
  task.appendChild(removeBtn);

  document.querySelectorAll(`.delete-${editInput.id}`).forEach((e) => {
    e.addEventListener('click', deleteTodos);
  });

  document.querySelectorAll(`.save-${editInput.id}`).forEach((e) => {
    e.addEventListener('click', saveTodos);
  });
};

const createTodos = () => {
  const existingTodos = JSON.parse(localStorage.getItem('todos'));
  if (existingTodos !== null && existingTodos.length > 0) {
    const todoContainer = document.querySelector('.todo-container');
    todoContainer.innerHTML = '';

    existingTodos.forEach((todo, index) => {
      const taskList = document.createElement('div');
      const task = document.createElement('div');

      taskList.classList.add('tasks');
      taskList.id = `tasks-${index}`;

      task.classList.add('task');
      task.id = `task-${index}`;

      const input = document.createElement('input');
      input.type = 'checkbox';
      input.classList.add('checkbox');
      input.id = `checkbox-${index}`;

      const item = document.createElement('input');
      item.type = 'text';
      item.classList.add('item');
      item.setAttribute('readonly', true);
      item.value = `${todo.description}`;
      item.id = `complete-${index}`;

      const edit = document.createElement('img');
      edit.setAttribute('src', _assets_images_dots_png__WEBPACK_IMPORTED_MODULE_0__);
      edit.classList.add('edit');
      edit.id = index;

      todoContainer.appendChild(taskList);
      taskList.appendChild(task);
      task.appendChild(input);
      task.appendChild(item);

      task.appendChild(edit);
    });

    document.querySelectorAll('.edit').forEach((e) => {
      e.addEventListener('click', editTodos);
    });

    document.querySelectorAll('.checkbox').forEach((e) => {
      e.addEventListener('change', completedTodos);
    });
  } else {
    document.querySelector('.todo-container').innerHTML = '';
  }
};

const storeTodos = (e) => {
  e.preventDefault();
  let existingTodos = JSON.parse(localStorage.getItem('todos'));
  existingTodos = existingTodos === null ? [] : existingTodos;

  const inputTodo = document.querySelector('#description').value;
  const todo = new Todo(inputTodo, false, existingTodos.length + 1);

  if (inputTodo !== '') {
    existingTodos.push(todo);
    localStorage.setItem('todos', JSON.stringify(existingTodos));
    document.querySelector('#description').value = '';
    createTodos();
  }
};


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3J1ZC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNkM7QUFDUTtBQUNKO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELEdBQUc7QUFDdkQsbURBQW1ELEdBQUc7QUFDdEQsdURBQXVELEdBQUc7QUFDMUQsc0RBQXNELEdBQUc7QUFDekQsNkNBQTZDLEdBQUc7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxHQUFHO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxhQUFhO0FBQzFELHNEQUFzRCxhQUFhO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGFBQWE7QUFDakU7QUFDQTtBQUNBLCtDQUErQyxhQUFhO0FBQzVEO0FBQ0E7QUFDQSwyQkFBMkIscURBQU87QUFDbEMsNkJBQTZCLGFBQWE7QUFDMUM7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGFBQWE7QUFDakQsZ0NBQWdDLHNEQUFVO0FBQzFDO0FBQ0E7QUFDQSx1Q0FBdUMsYUFBYTtBQUNwRDtBQUNBLEdBQUc7QUFDSDtBQUNBLHFDQUFxQyxhQUFhO0FBQ2xEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBLHdCQUF3QixNQUFNO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLE1BQU07QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkMsNEJBQTRCLE1BQU07QUFDbEM7QUFDQTtBQUNBLCtCQUErQixvREFBSTtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3QtYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0LWFwcC8uL3NyYy9jcnVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBkb3RzIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvZG90cy5wbmcnO1xyXG5pbXBvcnQgcmVtb3ZlSWNvbiBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL2RlbGV0ZS5wbmcnO1xyXG5pbXBvcnQgc2F2ZUltZyBmcm9tICcuLi9hc3NldHMvaW1hZ2VzL3NhdmUuanBlZyc7XHJcblxyXG5jbGFzcyBUb2RvIHtcclxuICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgY29tcGxldGVkLCBpbmRleCkge1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBjb21wbGV0ZWQ7XHJcbiAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBkZWxldGVUb2RvcyA9IChlKSA9PiB7XHJcbiAgY29uc3QgcmVtb3ZlQnRuID0gZS50YXJnZXQ7XHJcbiAgY29uc3QgYnRuQ2xhc3MgPSByZW1vdmVCdG4uY2xhc3NOYW1lO1xyXG4gIGNvbnN0IGJ0bklkID0gYnRuQ2xhc3Muc3BsaXQoJy0nKTtcclxuICBjb25zdCBpZCA9IHBhcnNlSW50KGJ0bklkWzFdLCAxMCk7XHJcbiAgbGV0IGV4aXN0aW5nVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcclxuICBleGlzdGluZ1RvZG9zID0gZXhpc3RpbmdUb2Rvcy5maWx0ZXIoKHRvZG9zLCBpbmRleCkgPT4gaW5kZXggIT09IGlkKTtcclxuICByZW1vdmVCdG4ucGFyZW50Tm9kZS5yZW1vdmUoKTtcclxuICBleGlzdGluZ1RvZG9zLmZvckVhY2goKHRhc2ssIGkpID0+ICh0YXNrLmluZGV4ID0gaSArIDEpKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1RvZG9zKSk7XHJcbiAgY3JlYXRlVG9kb3MoKTtcclxufTtcclxuXHJcbmNvbnN0IGNsZWFyQ29tcGxldGVkVG9kb3MgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29tcGxldGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQ6Y2hlY2tlZCcpO1xyXG4gIGxldCBleGlzdGluZ1RvZG9zID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSk7XHJcbiAgaWYgKGNvbXBsZXRlZCkge1xyXG4gICAgY29tcGxldGVkLmZvckVhY2goKGVsZW0pID0+IHtcclxuICAgICAgY29uc3QgdGFzayA9IGVsZW0ucGFyZW50Tm9kZTtcclxuICAgICAgdGFzay5wYXJlbnROb2RlLnJlbW92ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG4gIGV4aXN0aW5nVG9kb3MgPSBleGlzdGluZ1RvZG9zLmZpbHRlcigodG9kb3MpID0+IHRvZG9zLmNvbXBsZXRlZCA9PT0gZmFsc2UpO1xyXG4gIGV4aXN0aW5nVG9kb3MuZm9yRWFjaCgodGFzaywgaSkgPT4gKHRhc2suaW5kZXggPSBpICsgMSkpO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nVG9kb3MpKTtcclxufTtcclxuXHJcbmNvbnN0IHNhdmVUb2RvcyA9IChlKSA9PiB7XHJcbiAgY29uc3Qgc2F2ZUJ0biA9IGUudGFyZ2V0O1xyXG4gIGNvbnN0IGV4aXN0aW5nVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcclxuICBjb25zdCBidG5DbGFzcyA9IHNhdmVCdG4uY2xhc3NOYW1lO1xyXG4gIGNvbnN0IGJ0bklkID0gYnRuQ2xhc3Muc3BsaXQoJy0nKTtcclxuICBjb25zdCBpZCA9IHBhcnNlSW50KGJ0bklkWzFdLCAxMCk7XHJcbiAgY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjdGFza3MtJHtpZH1gKTtcclxuICBjb25zdCBzYXZlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5zYXZlLSR7aWR9YCk7XHJcbiAgY29uc3QgZGVsZXRlRWRpdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5kZWxldGUtJHtpZH1gKTtcclxuICBjb25zdCBpbnB1dElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvbXBsZXRlLSR7aWR9YCk7XHJcbiAgY29uc3QgZWRpdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2lkfWApO1xyXG5cclxuICBlZGl0QnRuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIGlucHV0SWQuc3R5bGUub3V0bGluZSA9ICdub25lJztcclxuXHJcbiAgZXhpc3RpbmdUb2Rvc1tpZF0uZGVzY3JpcHRpb24gPSBpbnB1dElkLnZhbHVlO1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nVG9kb3MpKTtcclxuICBzYXZlRWRpdC5yZW1vdmUoKTtcclxuICBkZWxldGVFZGl0LnJlbW92ZSgpO1xyXG4gIHRhc2tMaXN0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gIGlucHV0SWQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsIHRydWUpO1xyXG59O1xyXG5cclxuY29uc3QgY29tcGxldGVkVG9kb3MgPSAoZSkgPT4ge1xyXG4gIGNvbnN0IGNoZWNrYm94ID0gZS50YXJnZXQ7XHJcbiAgbGV0IGJ0bklkID0gY2hlY2tib3guaWQ7XHJcbiAgYnRuSWQgPSBidG5JZC5zcGxpdCgnLScpO1xyXG4gIGNvbnN0IGlkID0gcGFyc2VJbnQoYnRuSWRbMV0sIDEwKTtcclxuICBjb25zdCBpbnB1dElkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2NvbXBsZXRlLSR7aWR9YCk7XHJcbiAgY29uc3QgZXhpc3RpbmdUb2RvcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykpO1xyXG4gIGlmIChjaGVja2JveC5jaGVja2VkKSB7XHJcbiAgICBleGlzdGluZ1RvZG9zW2lkXS5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgaW5wdXRJZC5zdHlsZS50ZXh0RGVjb3JhdGlvbiA9ICdsaW5lLXRocm91Z2gnO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9zJywgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdUb2RvcykpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBleGlzdGluZ1RvZG9zW2lkXS5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgIGlucHV0SWQuc3R5bGUudGV4dERlY29yYXRpb24gPSAnbm9uZSc7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1RvZG9zKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZWRpdFRvZG9zID0gKGUpID0+IHtcclxuICBjb25zdCBlZGl0SW5wdXQgPSBlLnRhcmdldDtcclxuICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7ZWRpdElucHV0LmlkfWApO1xyXG4gIGNvbnN0IGlucHV0SWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjY29tcGxldGUtJHtlZGl0SW5wdXQuaWR9YCk7XHJcbiAgaW5wdXRJZC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgaW5wdXRJZC5mb2N1cygpO1xyXG5cclxuICBlZGl0QnRuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgaW5wdXRJZC5zdHlsZS5vdXRsaW5lID0gJ2F1dG8nO1xyXG4gIGlucHV0SWQuc3R5bGUub3V0bGluZUNvbG9yID0gJ2dyYXknO1xyXG5cclxuICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrcy0ke2VkaXRJbnB1dC5pZH1gKTtcclxuICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuXHJcbiAgY29uc3QgdGFzayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCN0YXNrLSR7ZWRpdElucHV0LmlkfWApO1xyXG5cclxuICBjb25zdCBzYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgc2F2ZS5zZXRBdHRyaWJ1dGUoJ3NyYycsIHNhdmVJbWcpO1xyXG4gIHNhdmUuY2xhc3NMaXN0LmFkZChgc2F2ZS0ke2VkaXRJbnB1dC5pZH1gKTtcclxuICB0YXNrLmFwcGVuZENoaWxkKHNhdmUpO1xyXG5cclxuICBjb25zdCByZW1vdmVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICByZW1vdmVCdG4uY2xhc3NMaXN0LmFkZChgZGVsZXRlLSR7ZWRpdElucHV0LmlkfWApO1xyXG4gIHJlbW92ZUJ0bi5zZXRBdHRyaWJ1dGUoJ3NyYycsIHJlbW92ZUljb24pO1xyXG4gIHRhc2suYXBwZW5kQ2hpbGQocmVtb3ZlQnRuKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmRlbGV0ZS0ke2VkaXRJbnB1dC5pZH1gKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVsZXRlVG9kb3MpO1xyXG4gIH0pO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuc2F2ZS0ke2VkaXRJbnB1dC5pZH1gKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2F2ZVRvZG9zKTtcclxuICB9KTtcclxufTtcclxuXHJcbmNvbnN0IGNyZWF0ZVRvZG9zID0gKCkgPT4ge1xyXG4gIGNvbnN0IGV4aXN0aW5nVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcclxuICBpZiAoZXhpc3RpbmdUb2RvcyAhPT0gbnVsbCAmJiBleGlzdGluZ1RvZG9zLmxlbmd0aCA+IDApIHtcclxuICAgIGNvbnN0IHRvZG9Db250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKTtcclxuICAgIHRvZG9Db250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gICAgZXhpc3RpbmdUb2Rvcy5mb3JFYWNoKCh0b2RvLCBpbmRleCkgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgICB0YXNrTGlzdC5jbGFzc0xpc3QuYWRkKCd0YXNrcycpO1xyXG4gICAgICB0YXNrTGlzdC5pZCA9IGB0YXNrcy0ke2luZGV4fWA7XHJcblxyXG4gICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcclxuICAgICAgdGFzay5pZCA9IGB0YXNrLSR7aW5kZXh9YDtcclxuXHJcbiAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgaW5wdXQudHlwZSA9ICdjaGVja2JveCc7XHJcbiAgICAgIGlucHV0LmNsYXNzTGlzdC5hZGQoJ2NoZWNrYm94Jyk7XHJcbiAgICAgIGlucHV0LmlkID0gYGNoZWNrYm94LSR7aW5kZXh9YDtcclxuXHJcbiAgICAgIGNvbnN0IGl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICBpdGVtLnR5cGUgPSAndGV4dCc7XHJcbiAgICAgIGl0ZW0uY2xhc3NMaXN0LmFkZCgnaXRlbScpO1xyXG4gICAgICBpdGVtLnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCB0cnVlKTtcclxuICAgICAgaXRlbS52YWx1ZSA9IGAke3RvZG8uZGVzY3JpcHRpb259YDtcclxuICAgICAgaXRlbS5pZCA9IGBjb21wbGV0ZS0ke2luZGV4fWA7XHJcblxyXG4gICAgICBjb25zdCBlZGl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICAgIGVkaXQuc2V0QXR0cmlidXRlKCdzcmMnLCBkb3RzKTtcclxuICAgICAgZWRpdC5jbGFzc0xpc3QuYWRkKCdlZGl0Jyk7XHJcbiAgICAgIGVkaXQuaWQgPSBpbmRleDtcclxuXHJcbiAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodGFza0xpc3QpO1xyXG4gICAgICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrKTtcclxuICAgICAgdGFzay5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgIHRhc2suYXBwZW5kQ2hpbGQoaXRlbSk7XHJcblxyXG4gICAgICB0YXNrLmFwcGVuZENoaWxkKGVkaXQpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmVkaXQnKS5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlZGl0VG9kb3MpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNoZWNrYm94JykuZm9yRWFjaCgoZSkgPT4ge1xyXG4gICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNvbXBsZXRlZFRvZG9zKTtcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1jb250YWluZXInKS5pbm5lckhUTUwgPSAnJztcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBzdG9yZVRvZG9zID0gKGUpID0+IHtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgbGV0IGV4aXN0aW5nVG9kb3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpKTtcclxuICBleGlzdGluZ1RvZG9zID0gZXhpc3RpbmdUb2RvcyA9PT0gbnVsbCA/IFtdIDogZXhpc3RpbmdUb2RvcztcclxuXHJcbiAgY29uc3QgaW5wdXRUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XHJcbiAgY29uc3QgdG9kbyA9IG5ldyBUb2RvKGlucHV0VG9kbywgZmFsc2UsIGV4aXN0aW5nVG9kb3MubGVuZ3RoICsgMSk7XHJcblxyXG4gIGlmIChpbnB1dFRvZG8gIT09ICcnKSB7XHJcbiAgICBleGlzdGluZ1RvZG9zLnB1c2godG9kbyk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9kb3MnLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1RvZG9zKSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xyXG4gICAgY3JlYXRlVG9kb3MoKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBzdG9yZVRvZG9zLCBjcmVhdGVUb2RvcywgY2xlYXJDb21wbGV0ZWRUb2RvcyB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==