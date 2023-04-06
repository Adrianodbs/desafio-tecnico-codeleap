import './style.css'
import { TbTrashX } from 'react-icons/tb'
import { FiEdit } from 'react-icons/fi'
import { useContext } from 'react'
import { AppContext } from '../../context/appContext'

function Post({ title, content, onClick }) {
  return (
    <div className="post">
      <div className="post__header">
        <h3>{title}</h3>
        <div className="icons">
          <TbTrashX onClick={onClick} />
          <FiEdit />
        </div>
      </div>
      <div className="post__content">
        <div className="info">
          <span>
            <strong>@CodeLeap</strong>
          </span>
          <span>25 minutes ago</span>
        </div>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Post
