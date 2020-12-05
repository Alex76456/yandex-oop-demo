class TodoList {

  static template = document.querySelector('.todo-list-template').content;

  constructor(items, createTodoForm, createTodoItem) {
    this._items = items;
    this._createTodoForm = createTodoForm;
    this._createTodoItem = createTodoItem;
    this._todoForm = this._createTodoForm(this._addItem);
  }

  _initialize() {
    this._items.forEach(item => this._addItem(item));
  }

  _addItem = (text) => {
    this._createTodoItem(text, this._addItem, this._editItem).render(this._view);
  }

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
