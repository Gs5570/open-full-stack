import PropTypes from 'prop-types';
export default function Content({ course }) {
  return (
    <div>
      <p>
        {course.parts[0].name} {course.parts[0].exercises}
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>
    </div>
  );
}

Content.propTypes = {
  course: PropTypes.object,
};
