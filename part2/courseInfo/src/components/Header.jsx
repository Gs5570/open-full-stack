import PropTypes from 'prop-types';
// ES6
export default function Header({ courses }) {
  return (
    <div>
      {courses.map((course) => {
        return <h2 key={course.id}>{course.name}</h2>;
      })}
    </div>
  );
}

Header.propTypes = {
  courses: PropTypes.any,
};
