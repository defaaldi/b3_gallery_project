import PropTypes from 'prop-types';
import colombia2 from '../assets/img/colombia2.png';

export const Colombia2 = ( {className} ) => {
  return (
    <img src={colombia2}
    alt="Paisajes de Colombia 2"
    className= {className}/>
  )
}
Colombia2.propTypes = {
    className: PropTypes.string
}