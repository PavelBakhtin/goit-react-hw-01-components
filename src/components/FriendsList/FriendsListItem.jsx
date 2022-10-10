import { Status, FriendName } from './FriendsListStyles'
import PropTypes from 'prop-types'
export const FriendListItem = ({info:{avatar, name, isOnline}}) => {
  return (
     <>
<Status online = {isOnline}>{isOnline}</Status>
<img src={avatar} alt="User avatar" width="48" />
<FriendName>{name}</FriendName>
    </>   
    )
}
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
}