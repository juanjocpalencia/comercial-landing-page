import { Col, Row } from 'antd';
import {PhoneOutlined,MessageOutlined,AimOutlined,FacebookOutlined,LinkedinOutlined,WhatsAppOutlined} from '@ant-design/icons';
import ContactForm from './ContactForm.jsx'

export default function FooterComponet() {
    return (
        <>
            <div className='FooterContainer' id='contactus'>
                <Row>
                    <Col className='text-container' span={24}  xl={12} md={12} sm={24}>
                        <div className='container-text'>

                        <h1>
                            Contact us!
                        </h1>
                        <p>
                            Nulla sem leo, aliquet eu urna eu, euismod commodo leo.<br/>
                            Etiam vel nulla fringilla, sodales turpis ac, tempus purus.<br/>
                            Phasellus vitae tortor tristique, feugiat risus nec, interdum magna.<br/>
                        </p>
                        </div>
                    </Col>
                    <Col className='text-container' span={24} xl={12} md={12} sm={24}>
                        <ContactForm/>
                    </Col>
                </Row>
                <div className='black-container'>
                    <Row>
                        <Col span={6} xl={8} md={8} sm={24} xs={24}>
                            <h1>Address: <AimOutlined /></h1>
                            Vestibulum facilisis, <br/>
                            odio et venenatis sagittis.
                        </Col>
                        <Col span={6} xl={8} md={8} sm={24} xs={24}>
                            <h1>Phone: <PhoneOutlined /></h1>
                            <a href="tel:+520123456789">
                                +52 012 345 6789  
                            </a>
                        </Col>
                        <Col span={6} xl={8} md={8} sm={24} xs={24}>
                            <h1>E-mail: <MessageOutlined /> </h1>
                            <a href="mailto:example@email.com">
                                example@email.com
                            </a>
                        </Col>
                    </Row>
                    <br/>
                    <Row>
                        <Col span={6} xl={8} md={8} sm={24} xs={24}>
                        </Col>
                        <Col span={6} xl={8} md={8} sm={24} xs={24}>
                            <a href="https://www.facebook.com" target="_blank">
                                <FacebookOutlined className='Facebook icon'/>
                            </a>
                            <a href="https://www.linkedin.com" target="_blank">
                                <LinkedinOutlined className='LinkedIn icon'/> &nbsp;
                            </a>
                            <a href="https://api.whatsapp.com" target="_blank">
                                <WhatsAppOutlined className='Whatsapp icon'/>
                            </a>
                        </Col>
                        <Col span={6} xl={8} md={8} sm={24} xs={24}>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                    <Col span={6} xl={8} md={8} sm={24} xs={24}></Col>
                    <Col span={6} xl={8} md={8} sm={24} xs={24}>© 2023 comercial-landig-page.com <br/><a href="https://www.freepik.es/foto-gratis/montanas-seoraksan-estan-cubiertas-niebla-manana-amanecer-seul-corea_11306427.htm#query=paisajes&position=0&from_view=search&track=sph?sign-up=google">Imagen de tawatchai07</a> en Freepik</Col>
                    <Col span={6} xl={8} md={8} sm={24} xs={24}></Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
