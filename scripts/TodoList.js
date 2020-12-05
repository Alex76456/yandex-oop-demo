class TodoList {

  static template = document.querySelector('.todo-list-template').content;

  constructor(items, createTodoForm, createTodoItem) {
    this._items = items;
    this._createTodoForm = createTodoForm;
    this._createTodoItem = createTodoItem;
    // Создаем экземпляр формы и передаем туда метод для создания новой 'задачи'
    this._todoForm = this._createTodoForm(this._addItem);
  }

  // В item находятся наши изначальные 'задачи' из передаваемого в конструктор массива
  // Из них формируем список изначальных 'задач'
  _initialize() {
    this._items.forEach(item => this._addItem(item));
  }

  // Метод добавления задачи
  // Передает в экземпляр задачи ссылку на самого себя, чтобы мы могли клонировать 'задачу' в дальнейшем
  _addItem = (text) => {
    this._createTodoItem(text, this._addItem, this._editItem).render(this._view);
  }

  // В этом методе вызываем публичный метод класса todoForm, чтобы выставить флаг, сигнализирующий о том
  // что мы сейчас редактируем 'задачу', а не добавляем ее
  _editItem = () => {
    this._todoForm.onEdit();
  }

  render = (container) => {
    this._view = TodoList.template.cloneNode(true).children[0];
    this._todoForm.render(this._view);
    this._initialize();
    container.append(this._view);
  }

}
