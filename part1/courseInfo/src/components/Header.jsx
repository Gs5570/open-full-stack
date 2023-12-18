import PropTypes from 'prop-types';
// ES6
export default function Header({ course }) {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
}

Header.propTypes = {
  course: PropTypes.object,
};
