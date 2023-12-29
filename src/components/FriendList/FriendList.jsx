import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(elem => (
        <FriendListItem key={elem.id} {...elem} />
      ))}
    </ul>
  );
};
