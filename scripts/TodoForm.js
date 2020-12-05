class TodoForm {

  static template = document.querySelector('.todo-form-template').content;

  constructor(addItem) {
    // 3
    this._addItem = addItem;

    // 4
    this.isEditing = false;
  }

  // 4
  _getEditableTodo() {
    return document.querySelector(".is-edit").children[0];
  }

  _getInput() {
    return this._view.querySelector('.add-todo-form__field_input');
  }

  _submitHandler = (evt) => {
    evt.preventDefault();
    const input = this._getInput();
    if (this.isEditing) {
      // 4
      this._editItem(input.value)
    } else {
      // 3
      this._addItem(input.value);
    }
    input.value = '';
  }

  // 4
  _editItem = () => {
    const editableTodo = this._getEditableTodo();
    editableTodo.textContent = this._getInput().value;
    this.isEditing = false;
  }

  // 4
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
