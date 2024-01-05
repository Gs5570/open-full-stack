import Header from '../components/Header';
import Content from '../components/Content';
import Total from '../components/Total';

import PropTypes from 'prop-types';

export default function Course({ courses }) {
  return (
    <div>
      <h1>Web development curriculum</h1>

      {/* <Header courses={courses} /> */}
      <Content courses={courses} />
      {/* <Total courses={courses} /> */}
    </div>
  );
}

Content.propTypes = {
  courses: PropTypes.any,
};
