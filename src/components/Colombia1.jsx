import PropTypes from 'prop-types';
import colombia1 from '../assets/img/colombia1.png';

export const Colombia1 = ( {className} ) => {
  return (
    <img src={colombia1} alt="Paisajes de Colombia 1" className= {className} />    
  )
}
Colombia1.propTypes = {
    className: PropTypes.string
}