import { FriendListItem } from 'components/FriendListItem/FriendListItem';
export const FriendList = props => {
  return (
    <ul className="friend-list">
      {props.friends.map(elem => (
        <FriendListItem key={elem.id} {...elem} />
      ))}
    </ul>
  );
};
