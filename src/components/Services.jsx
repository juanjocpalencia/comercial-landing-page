import { Col, Row, Card } from 'antd';
const { Meta } = Card;
import servicesObj from "../helpers/Services"

export default function Services() {
    return (
        <>
            <div className='Service-Container' id='services'>
                <h1>
                    Services
                </h1>
                <Row>
                    {
                        servicesObj.map((serv,i)=>
                        <Col span={6} xl={6} md={12} sm={12} xs={24} key={serv.service}>
                            <Card
                                
                                hoverable
                                className="Service-Card"
                                cover={<img alt={serv.service} src={serv.img} />}
                                >
                                <Meta title={serv.service} description={serv.description} />
                            </Card>
                        </Col>
                        )}
                </Row>
            </div>
        </>
    )
}
