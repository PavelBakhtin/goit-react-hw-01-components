import user from '../user/user.json'
import data from '../user/data.json';
import friends from '../user/friends.json'
import items from '../user/transactions.json'
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statitistics/Statistics";
import { FriendList } from "./FriendsList/FriendsList";
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import { AppContainer } from './AppStyled';

export const App = () => {
  return (
    <AppContainer>
      <Profile username={user.username} tag={user.tag} location={user.location} stats={user.stats} avatar={user.avatar} />
      <Statistics stats={data} title={'Upload Stats'} />
      <Statistics stats = {data}/>
      <FriendList friends={friends} />
      <TransactionHistory items = {items} />
    </AppContainer>
  );
};
