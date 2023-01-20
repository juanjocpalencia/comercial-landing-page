import { Col, Row, Card } from 'antd';
export default function MisionVision() {
  return (
    <div className='MisionVision'>
      <Row>
        <Col span={6} xl={12} md={12} sm={24} xs={24} className='MisionVision-card'>
          <Card className='misionvision-card-component'>
            <Row>
              <Col>
                <h1>
                  Vision
                </h1>
                <p>
                Nulla ligula tortor, facilisis sit amet vestibulum in, fringilla sit amet nisl. Etiam aliquet cursus nisl quis consequat. Morbi hendrerit lectus a sem posuere tempor. Mauris lobortis finibus leo eget tristique.                 </p>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col span={6} xl={12} md={12} sm={12} xs={24} className='MisionVision-card'>
          <Card className='misionvision-card-component'>
            <Row>
              <Col>
                <h1>
                  Mision
                </h1>
                <p>
                Nulla sem leo, aliquet eu urna eu, euismod commodo leo. Etiam vel nulla fringilla, sodales turpis ac, tempus purus. Phasellus vitae tortor tristique, feugiat risus nec, interdum magna.                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </div>
  )
}
