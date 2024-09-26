import { Link } from 'react-router-dom';
import { Colombia1 } from './Colombia1';
import { Colombia2 } from './Colombia2';
import { Colombia3 } from './Colombia3';
import { Colombia4 } from './Colombia4';
import { Colombia5 } from './Colombia5';
import { Colombia6 } from './Colombia6';

export const Navigation = () => {
  return (
    <div className='container thumbnail-container mt-2'>
      <Link to='/colombia1' className='links'>
        <figure className='thumbnail-image-size'>
          <Colombia1 />
          <figcaption>Colombia 1</figcaption>
        </figure>
      </Link>
      <Link to='/colombia2' className='links'>
        <figure className='thumbnail-image-size'>
          <Colombia2 />
          <figcaption>Colombia 2</figcaption>
        </figure>
      </Link>
      <Link to='/colombia3' className='links'>
        <figure className='thumbnail-image-size'>
          <Colombia3 />
          <figcaption>Colombia 3</figcaption>
        </figure>
      </Link>
      <Link to='/colombia4' className='links'>
        <figure className='thumbnail-image-size'>
          <Colombia4 />
          <figcaption>Colombia 4</figcaption>
        </figure>
      </Link>
      <Link to='/colombia5' className='links'>
        <figure className='thumbnail-image-size'>
          <Colombia5 />
          <figcaption>Colombia 5</figcaption>
        </figure>
      </Link>
      <Link to='/colombia6' className='links'>
        <figure className='thumbnail-image-size'>
          <Colombia6 />
          <figcaption>Colombia 6</figcaption>
        </figure>
      </Link>
    </div>
  )
}