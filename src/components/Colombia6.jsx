import PropTypes from 'prop-types';
import colombia6 from '../assets/img/colombia6.png';

export const Colombia6 = ( {className} ) => {
  return (
    <img src={colombia6} alt="Paisajes de Colombia 6" className= {className} />    
  )
}
Colombia6.propTypes = {
    className: PropTypes.string
}