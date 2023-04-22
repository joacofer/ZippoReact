import Spinner from 'react-bootstrap/Spinner';
import './SpinnerLoading.css';

function SpinnerLoading() {
  return (
    <div className='spinner'>
    <Spinner  animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
    </div>
  );
}

export default SpinnerLoading;