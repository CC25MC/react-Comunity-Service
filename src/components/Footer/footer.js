import React, { Component } from 'react';
// import { Link } from "react-router-dom";
import { Container, Row, Col, Media } from "reactstrap";
import FeatherIcon from 'feather-icons-react';

//Import Footer link
import FooterLinks from "./footer-links";

class Footer extends Component {
    state = {
        links1 : [
            { link : "#", title : "About Us" },
            { link : "#", title : "Media & Press" },
            { link : "#", title : "Career" },
            { link : "#", title : "Blog" },
        ],
        links2 : [
            { link : "#", title : "Pricing" },
            { link : "#", title : "For Marketing" },
            { link : "#", title : "For CEOs" },
            { link : "#", title : "For Agencies" },
            { link : "#", title : "Our Apps" },
        ],
    }
    render() {
        return (
            <React.Fragment>
        <footer className="footer">
            <Container>
                <Row>
                    <Col lg={8} sm={6} >
                        <div>
                            <h5 className="mb-4 footer-list-title">Sobre Nosotros</h5>
                            <p>Tener un servicio que demuestre compromiso y dedicación por la comunidad es uno de nuestros más grandes sueños, por eso la creación de este sitio web el cual ayudará a cada vecino de la comunidad a llevar el control de sus pagos de condominio pero sobre todo a mantener la transparencia de la junta de condominio activa. </p>
                        </div>
                    </Col>
                    {/* <Col lg={{size:2, offset:1}} sm={6}>
                        <div>
                            <h5 className="mb-4 footer-list-title">Company</h5>
                            <ul className="list-unstyled footer-list-menu">
                                {
                                    this.state.links1.map((fLink, key) =>
                                        <li key={key}><Link to={fLink.link}>{fLink.title}</Link></li>
                                    )
                                }
                            </ul>
                        </div>
                    </Col>
                    <Col lg={2} sm={6} >
                        <div>
                            <h5 className="mb-4 footer-list-title">More Info</h5>
                            <ul className="list-unstyled footer-list-menu">
                                {
                                    this.state.links2.map((fLink, key) =>
                                        <li key={key}><Link to={fLink.link}>{fLink.title}</Link></li>
                                    )
                                }
                            </ul>
                        </div>
                    </Col> */}

                    <Col lg={4} sm={6}>
                        <div>
                            <h5 className="mb-4 footer-list-title">Contacto</h5>

                            <div>
                                <Media>
                                    <i>
                                    <FeatherIcon icon="map-pin" className="icon-dual-light icons-sm mt-1 mr-2" />
                                    </i>
                                    <Media body>
                                        <p>Parroquia Universidad, Av Las Americas, Edificio Residencias Angostura.</p>
                                    </Media>
                                </Media>
                                <Media>
                                    <i>
                                    <FeatherIcon icon="mail" className="icon-dual-light icons-sm mt-1 mr-2" />
                                    </i>
                                    <Media body>
                                        <p>cobranzas.angostura@gmail.com</p>
                                    </Media>
                                </Media>
                                <Media>
                                    <i>
                                    <FeatherIcon icon="phone" className="icon-dual-light icons-sm mt-1 mr-2" />
                                    </i>
                                    <Media body>
                                        <p>0414-3861465 / 0414-2682500</p>
                                    </Media>
                                </Media>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </footer>
                {/* Render footer links */}
                <FooterLinks/>
            </React.Fragment>
        );
    }
}

export default Footer;