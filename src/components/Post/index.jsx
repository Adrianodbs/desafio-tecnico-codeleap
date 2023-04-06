import './style.css'
import { TbTrashX } from 'react-icons/tb'
import { FiEdit } from 'react-icons/fi'

function Post() {
  return (
    <div className="post">
      <div className="post__header">
        <h3>My First Post at CodeLeap Network!</h3>
        <div className="icons">
          <TbTrashX />
          <FiEdit />
        </div>
      </div>
      <div className="post__content">
        <div className="info">
          <span>
            <strong>@Victor</strong>
          </span>
          <span>25 minutes ago</span>
        </div>
        <p>
          Curabitur suscipit suscipit tellus. Phasellus consectetuer vestibulum
          elit. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas. Maecenas egestas arcu quis ligula
          mattis placerat. Duis vel nibh at velit scelerisque suscipit. Duis
          lobortis massa imperdiet quam. Aenean posuere, tortor sed cursus
          feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
          lacus. Fusce a quam. Nullam vel sem. Nullam cursus lacinia erat.
        </p>
      </div>
    </div>
  )
}

export default Post
