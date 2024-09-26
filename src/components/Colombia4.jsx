import PropTypes from 'prop-types';
import colombia4 from '../assets/img/colombia4.png';

export const Colombia4 = ( {props} ) => {
  return (
    <img src={colombia4}
    alt="Paisajes de Colombia 4"
    className= {props.className}/>
  )
}

Colombia4.propTypes = {
    className: PropTypes.string
}