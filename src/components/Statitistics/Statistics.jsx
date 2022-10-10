import PropTypes from 'prop-types'
import { Title , StatList, Label, Percentage} from './StatisticsStyled'
import { Box } from "components/Box";
var randomColor = require('randomcolor')

export const Statistics = ({title, stats}) => {
return (
<Box display="flex" 
flexDirection='column'       
alignItems='center'
justifyContent='center'
m='5px'
 >
<Title>{title}</Title>
<StatList>
    {stats.map ( (item) => 
    (<Box 
        width='50px'
        display="flex" 
        flexDirection='column'       
        alignItems='center'
        justifyContent='center'
        backgroundColor={randomColor()}
        p='10px'
   
    key={item.id} >
        <Label >{item.label}</Label>
        <Percentage>{item.percentage}</Percentage>
     </Box>))}
</StatList>
</Box>)
}

Statistics.propTypes = {
    id: PropTypes.number,
    label: PropTypes.string,
    percentage: PropTypes.string,
}
