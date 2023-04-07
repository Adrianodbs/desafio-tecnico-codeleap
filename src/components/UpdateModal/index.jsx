import { useContext } from 'react'
import Input from '../Input'
import './style.css'
import { AppContext } from '../../context/appContext'

function UpdateModal({ onClickCancel, onClickUpdate }) {
  const { updatedItem, setUpdatedItem } = useContext(AppContext)
  return (
    <div className="modal-container">
      <div className="modal-edit">
        <h2>Edit item</h2>
        <Input
          title="Title"
          placeholder="Hello world"
          value={updatedItem.title}
          onChange={e =>
            setUpdatedItem({ ...updatedItem, title: e.target.value })
          }
        />
        <Input
          title="Content"
          placeholder="Content here"
          value={updatedItem.content}
          onChange={e =>
            setUpdatedItem({ ...updatedItem, content: e.target.value })
          }
          className="double"
        />
        <div className="btn">
          <button className="btn-cancel" onClick={onClickCancel}>
            Cancel
          </button>
          <button className="btn-save" onClick={onClickUpdate}>
            Save
          </button>
        </div>
      </div>
    </div>
  )
}

export default UpdateModal
