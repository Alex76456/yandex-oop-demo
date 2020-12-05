class TodoForm {

  static template = document.querySelector('.todo-form-template').content;

  constructor(addItem) {
    this._addItem = addItem;
    this.isEditing = false;
  }

  // Находим и возвращаем ссылку на нашу 'задачу', которую сейчас редактируем
  _getEditableTodo() {
    return document.querySelector(".is-edit").children[0];
  }

  // Получаем ссылку на инпут
  _getInput() {
    return this._view.querySelector('.add-todo-form__field_input');
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const input = this._getInput();
    this.isEditing ? this._editItem(input.value) : this._addItem(input.value);
    input.value = '';
  }

  // Получаем редактируемую 'задачу'
  // Записываем в не значение из инпута
  // Убираем флаг редактирования
  _editItem = () => {
    const editableTodo = this._getEditableTodo();
    editableTodo.textContent = this._getInput().value;
    this.isEditing = false;
  }

  // Получаем редактируемый элемент
  // Получаем инпут
  // Записываем значение редактируемой 'задачи' в инпут
  // Выставляем флаг редактирования
  onEdit = () => {
    const editableTodo = this._getEditableTodo();
    const input = this._getInput();
    input.value = editableTodo.textContent;
    this.isEditing = true;
  }

  render = (container) => {
    this._view = TodoForm.template.cloneNode(true).children[0];
    this._view.addEventListener('submit', this._submitHandler);
    container.append(this._view);
  }

}
