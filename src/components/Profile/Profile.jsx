import PropTypes from 'prop-types'
import { StatsList, ProfileImg, StatsItems, Label, Quantity, ProfileName,ProfileInfo } from './ProfileStyled'
import { Box } from 'components/Box'


export const Profile = ({user : {username, tag, location, stats, avatar}}) => {
    return <Box m='5px'
      width='250px'
      borderStyle='groove'>
    <Box display="flex" 
        flexDirection='column'       
        alignItems='center'
        justifyContent='center'
        p='10px 0'>
      <ProfileImg
        src={avatar}
        alt="User avatar"
        />
      <ProfileName>{username}</ProfileName>
      <ProfileInfo>@{tag}</ProfileInfo>
      <ProfileInfo>{location}</ProfileInfo>
    </Box>
  
    <StatsList>
      <StatsItems>
        <Label>Followers</Label>
        <Quantity>{stats.followers}</Quantity>
      </StatsItems>
      <StatsItems>
        <Label>Views</Label>
        <Quantity>{stats.views}</Quantity>
      </StatsItems>
      <StatsItems>
        <Label>Likes</Label>
        <Quantity>{stats.likes}</Quantity>
      </StatsItems>
    </StatsList>
  </Box>

}
Profile.propTypes = {
  username: PropTypes.string, 
  tag: PropTypes.string, 
  location: PropTypes.string, 
  stats: PropTypes.number, 
  avatar: PropTypes.string,
}