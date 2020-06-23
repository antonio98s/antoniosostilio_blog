import React from 'react';
import { Row, Col } from 'antd';
import ProgressBar from '../../Progress';

const SkillsProgress = () => (
  <div>
    <h2>My Skills</h2>
    <Row gutter={[20, 20]}>
      <Col xs={24} sm={24} md={12}>

        <ProgressBar
          percent={95}
          text="HTML"
        />
        <ProgressBar
          percent={90}
          text="CSS"
        />
        <ProgressBar
          percent={85}
          text="JavaScript"
        />
        <ProgressBar
          percent={85}
          text="Gatsby"
        />
      </Col>
      <Col xs={24} sm={24} md={12}>
        <ProgressBar
          percent={85}
          text="node.JS"
        />
        <ProgressBar
          percent={90}
          text="SQL"
        />
        <ProgressBar
          percent={78}
          text="Python"
        />
        <ProgressBar
          percent={85}
          text="Figma"
        />
      </Col>
    </Row>
  </div>
);

export default SkillsProgress;
