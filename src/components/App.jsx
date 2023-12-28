import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import items from 'data/transactions.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
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
