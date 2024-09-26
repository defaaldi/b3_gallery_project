import PropTypes from 'prop-types';
import colombia6 from '../assets/img/colombia6.png';

export const Colombia6 = ( {props} ) => {
  return (
    <img src={colombia6}
    alt="Paisajes de Colombia 6"
    className= {props.className}/>
  )
}

Colombia6.propTypes = {
    className: PropTypes.string
}