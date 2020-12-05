class TodoItem {

  static template = document.querySelector('.todo-template').content;

  constructor(text, addItem, onEdit) {
    this._text = text;
    // 3
    this._addItem = addItem;
    // 4
    this._onEdit = onEdit;
  }

  // 2
  _deleteClickHandler = () => {
    this._view.remove();
  }

  // 3
  _duplicateClickHandler = () => {
    const text = this._view.querySelector('.todo__title').textContent;
    this._addItem(text);
  }

  // 4
  _editClickHandler = () => {
    const editable = document.querySelector(".is-edit");
    if (editable) {
      editable.classList.remove("is-edit");
    }
    this._view.classList.add("is-edit")
    this._onEdit();
  }

  _setEventListeners = () => {
    // 2
    this._view.querySelector('.control_remove').addEventListener('click', this._deleteClickHandler);
    // 3
    this._view.querySelector('.control_duplicate').addEventListener('click', this._duplicateClickHandler);
    // 4
    this._view.querySelector('.control_edit').addEventListener('click', this._editClickHandler);
  }

  render = (container) => {
    this._view = TodoItem.template.cloneNode(true).children[0];
    this._view.querySelector('.todo__title').textContent = this._text;
    // 2
    this._setEventListeners();
    container.append(this._view);
  }

}
