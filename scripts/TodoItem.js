class TodoItem {

  static template = document.querySelector('.todo-template').content;

  constructor(text, addItem, onEdit) {
    this._text = text;
    this._addItem = addItem;
    this._onEdit = onEdit;
  }

  _deleteClickHandler = () => {
    this._view.remove();
  }

  _duplicateClickHandler = () => {
    const text = this._view.querySelector('.todo__title').textContent;
    this._addItem(text);
  }

  _editClickHandler = () => {
    const editable = document.querySelector(".is-edit");
    if (editable) {
      editable.classList.remove("is-edit");
    }
    this._view.classList.add("is-edit")
    this._onEdit();
  }

  _setEventListeners = () => {
    this._view.querySelector('.control_remove').addEventListener('click', this._deleteClickHandler);
    this._view.querySelector('.control_duplicate').addEventListener('click', this._duplicateClickHandler);
    this._view.querySelector('.control_edit').addEventListener('click', this._editClickHandler);
  }

  render = (container) => {
    this._view = TodoItem.template.cloneNode(true).children[0];
    this._view.querySelector('.todo__title').textContent = this._text;
    this._setEventListeners();
    container.append(this._view);
  }

}
