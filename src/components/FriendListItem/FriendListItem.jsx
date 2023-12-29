import css from './FriendListItem.module.css';
import clsx from 'clsx';
export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <li className={css.item}>
      <span
        className={clsx(css.status, isOnline ? css.isOnline : css.isOffline)}
      ></span>

      <div className={css.imgWrapper}>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
      </div>
      <p className={css.name}>{name}</p>
    </li>
  );
};
