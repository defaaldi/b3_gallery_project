import PropTypes from 'prop-types';
import colombia2 from '../assets/img/colombia2.png';

export const Colombia2 = ( {props} ) => {
  return (
    <img src={colombia2}
    alt="Paisajes de Colombia 2"
    className= {props.className}/>
  )
}

Colombia2.propTypes = {
    className: PropTypes.string
}