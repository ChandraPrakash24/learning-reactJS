import Shimmer from './ShimmerUI';

const MultipleShimmers = () => {
  return (
    <div className='multiple-shimmer'>
      {/* Render 9 shimmer effects */}
      <Shimmer count={9} />
    </div>
  );
};

export default MultipleShimmers;
