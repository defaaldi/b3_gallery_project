import PropTypes from 'prop-types';
import colombia3 from '../assets/img/colombia3.png';

export const Colombia3 = ( {className} ) => {
  return (
    <img src={colombia3} alt="Paisajes de Colombia 3" className= {className} />
  )
}
Colombia3.propTypes = {
    className: PropTypes.string
}