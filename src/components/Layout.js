import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";

class Layout extends React.Component {
    render() {
        return(
            <>
                <Header />
                <Container className="my-5">
                    <main>{this.props.children}</main>
                </Container>               
                <Footer />
            </>
        )
    }
}

export default Layout;