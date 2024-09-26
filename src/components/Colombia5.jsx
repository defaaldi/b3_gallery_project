import PropTypes from 'prop-types';
import colombia5 from '../assets/img/colombia5.png';

export const Colombia5 = ( {className} ) => {
  return (
    <img src={colombia5} alt="Paisajes de Colombia 5" className= {className} />    
  )
}
Colombia5.propTypes = {
    className: PropTypes.string
}