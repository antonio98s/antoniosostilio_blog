import React from 'react';
import { Row, Col } from 'antd';
import AboutTile from '../../AbouTile';
import { stripTags, domHtml } from '../../../utils/stripTags';
import SEO from '../../Seo';

const pageText = {
  paraOne: `Hello !! My name is Antonio Sostilio. I graduated from Boston College in May 2020 and I am currently seeking employment.
    As an undergraduate, I worked as an Assistant Front-End Developer for my university. There, I learned technologies such as Adobe Experience Manager CMS as well as HTML, CSS, and JavaScript.
    I also took courses such as Computer Science I, Database Management, and Design I: Foundations to further my knowledge about Software Development.`,
  paraTwo: `I enjoy working with a team of professionals in order to deliver the best technological solutions to clients. Check out my site where you can find my projects, resume, and contact information.`,
};
const AboutMe = () => {
  const description = `${pageText.paraOne} ${stripTags(pageText.paraTwo)}`;
  return (
    <>
      <div>
        <SEO
          title="About"
          description={description}
          path=""
          keywords={['Antonio', 'Sostilio', 'Junior developer', 'Javascript', 'ReactJS', 'Software Developer', 'Gatsby']}
        />
        <h1 className="titleSeparate">About Me</h1>
        <p>
          {pageText.paraOne}
        </p>
        <p dangerouslySetInnerHTML={domHtml(pageText.paraTwo)} />
      </div>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="passport.png"
            height={60}
            alt="passport image"
            textH4="Dual Citizen"
            textH3="U.S. and E.U. (Italy)"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="languages.png"
            alt="language image"
            textH4="Multilingual"
            textH3="English, Italiano, Español"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="meeting.png"
            alt="meeting image"
            textH4="Collaboration"
            textH3="Respectful & Outgoing"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="hands.png"
            alt="hands image"
            textH4="Customer Service"
            textH3="Ready to help"
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="web.png"
            alt="web image"
            textH4="Self Taught Programmer"
            textH3="Thanks to the Web Resources"
            height={60}
            width={60}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={8}>
          <AboutTile
            img="graduation.png"
            alt="graduation image"
            textH4="Pursued B.A. in"
            textH3="Economics"
            height={60}
            width={60}
          />
        </Col>
      </Row>
    </>
  );
};
export default AboutMe;
