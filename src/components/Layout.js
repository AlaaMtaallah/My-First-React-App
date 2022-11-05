import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import Formular from "./Formular";

const Layout = () => {
        return(
            <>
                <Header />
                    <Container className="my-5">
                        <Formular></Formular>
                    </Container>               
                <Footer />
            </>
        )
    }

export default Layout;