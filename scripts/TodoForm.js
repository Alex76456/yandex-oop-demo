class TodoForm {

  static template = document.querySelector('.todo-form-template').content;

  constructor(addItem) {
    this._addItem = addItem;
    this.isEditing = false;
  }

  _getEditableTodo() {
    return document.querySelector(".is-edit").children[0];
  }

  _getInput() {
    return this._view.querySelector('.add-todo-form__field_input');
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const input = this._getInput();
    this.isEditing ? this._editItem(input.value) : this._addItem(input.value);
    input.value = '';
  }

  _editItem = () => {
    const editableTodo = this._getEditableTodo();
    editableTodo.textContent = this._getInput().value;
    this.isEditing = false;
  }

  onEdit = () => {
    const editableTodo = this._getEditableTodo();
    const input = this._getInput();
    this.isEditing = true;
    input.value = editableTodo.textContent;
  }

  render = (container) => {
    this._view = TodoForm.template.cloneNode(true).children[0];
    this._view.addEventListener('submit', this._submitHandler);
    container.append(this._view);
  }

}
