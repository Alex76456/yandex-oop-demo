const items = [
  'Сделать проектную работу',
  'Полить цветы',
  'Пройти туториал по Реакту',
  'Сделать фронт для своего проекта',
  'Погулять с собакой',
  'Разобраться в замыканиях',
  'Решить задачу на Codewars'
];

const container = document.querySelector('.content');

// Создаем функции, которые будут возвращать готовые экземпляры объектов
// Делаем это для того, чтобы зависимости для класса TodoList передавались через конструктор
const createTodoForm = (...arg) => new TodoForm(...arg);
const createTodoItem = (...arg) => new TodoItem(...arg);

const todoList = new TodoList(items, createTodoForm, createTodoItem);
todoList.render(container);
