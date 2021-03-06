import React, { Component } from 'react';
import NavbarPage from "../../components/Navbar/Navbar_Page";
import Section from './section';
import Service from "../../components/Service/service";
import Pricing from "../../components/Pricing/pricing";
import Footer from "../../components/Footer/footer";

class Index1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navItems: [
                { id: 1, idnm: "home", navheading: "Inicio" },
                { id: 2, idnm: "services", navheading: "Servicios" },
                { id: 3, idnm: "pricing", navheading: "Precios" },
            ],
            pos: document.documentElement.scrollTop,
            imglight: false,
            navClass: ""
        };
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > this.state.pos) {
            this.setState({ navClass: "nav-sticky", imglight: false });
        }
        else {
            this.setState({ navClass: "", imglight: false });
        }
    };

    render() {
        return (
            <React.Fragment>

                {/* Importing Navbar */}
                <NavbarPage navItems={this.state.navItems} navClass={this.state.navClass} imglight={this.state.imglight} />

                {/* Importing section */}
                <Section />

                {/* Importing Service */}
                <Service />

                {/* Importing Pricing */}
                <Pricing />

                {/* Importing Footer */}
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index1;