import './style.css'

function ModalDelete({ onClickCancel, onClickDelete }) {
  return (
    <div className="modal-container">
      <div className="modal-edit">
        <h2>Are you sure you want to delete this item?</h2>
        <div className="btn">
          <button className="btn-cancel" onClick={onClickCancel}>
            Cancel
          </button>
          <button className="btn-delete" onClick={onClickDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete
