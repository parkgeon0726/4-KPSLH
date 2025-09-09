import cx from 'classnames'

export default function TodoItem({ todo }) {
  return (
    <li className={cx('p-2', {
      'line-through text-gray-500': todo.done,
      'text-black': !todo.done
    })}>
      {todo.text}
    </li>
  )
}
