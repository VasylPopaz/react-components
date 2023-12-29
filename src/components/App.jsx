import {
  Profile,
  Statistics,
  FriendList,
  TransactionHistory,
} from 'components';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import items from 'data/transactions.json';
export const App = () => {
  return (
    <>
      <Profile {...user} />
      <Statistics title="Upload stats" statistics={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />
    </>
  );
};
