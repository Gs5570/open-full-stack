import PropTypes from 'prop-types';

export default function Total({ courses }) {
  return (
    <div>
      <p>
        {courses.map(() => {})}
        Number of exercises{' '}
        {courses.parts[0].exercises +
          courses.parts[1].exercises +
          courses.parts[2].exercises}{' '}
      </p>
    </div>
  );
}

Total.propTypes = {
  courses: PropTypes.any,
};
