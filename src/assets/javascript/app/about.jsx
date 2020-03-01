import React from 'react';
import classNames from 'classnames';
import dompurify from 'dompurify';

const About = (props) => {
  const {
    data,
  } = props;
  return (
    <section
      className={
        classNames(
          'section',
          'section--type-about',
        )
      }
    >
      <p
        className="section--content"
        dangerouslySetInnerHTML={{
          __html: dompurify.sanitize(data.about)
        }}
      />
    </section>
  );
};

export default About;
