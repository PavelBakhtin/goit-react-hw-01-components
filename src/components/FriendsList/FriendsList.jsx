import PropTypes from 'prop-types'
import { Box } from 'components/Box'
import { FriendCard} from './FriendsListStyles'
import { FriendListItem } from "./FriendsListItem"
export const FriendList = ({friends}) => {
return (
    <Box display="flex" 
    flexDirection='column'       
    alignItems='center'
    justifyContent='center'
    m='5px'
    p='10px'>
        {
            friends.map( (friend, idx) => (
            <FriendCard key = {idx} >
            <FriendListItem info = {friend}/>
            
            </FriendCard>
        ))
        }
    </Box>
    )   
}
FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
        })
    )
}