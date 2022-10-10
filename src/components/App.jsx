import user from '../user/user.json'
import data from '../user/data.json';
import friends from '../user/friends.json'
import items from '../user/transactions.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statitistics/Statistics";
import { FriendList } from "./FriendsList/FriendsList";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';


export const App = () => {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 10,
        color: '#010101',
        padding: '10px 0',
        flexWrap:'wrap'
     
      }}
    >
    <Profile user = {user} />
    <Statistics stats = {data} title = {'Upload Stats'}/>
    <FriendList friends={friends} />
    <TransactionHistory items = {items} />
    </div>
  );
};
