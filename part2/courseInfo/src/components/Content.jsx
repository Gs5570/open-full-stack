import PropTypes from 'prop-types';
export default function Content({ courses }) {
  return (
    <div>
      {courses.map((course) => {
        return (
          <div key={course.id}>
            <h2>{course.name}</h2>
            {course.parts.map((part) => {
              return (
                <p key={part.id}>
                  {part.name} {part.exercises}
                </p>
              );
            })}

            <p>Total of exercises</p>
          </div>
        );
      })}
    </div>
  );
}

Content.propTypes = {
  courses: PropTypes.any,
};
