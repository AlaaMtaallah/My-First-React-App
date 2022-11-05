
import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

function Formular () {
    return (
        <>
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form class='mx-auto'>
                        <div className="form-group">
                        <label>Email address</label>
                        <input type="email" value="" onChange={e => this.change(e)} className="form-control" id="inputEmail" placeholder="Enter email" />

                        </div>

                        <div className="form-group">
                        <label>First Name</label>
                        <input type="text" value="" onChange={e => this.change(e)} className="form-control" id="inputFirstname" placeholder="Enter First Name" />
                        </div>

                        <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value="" onChange={e => this.change(e)} className="form-control" id="inputLastname" placeholder="Enter Last Name" />
                        </div>

                        <div className="form-group">
                        <label>Message</label>
                        <input type="text" value="" onChange={e => this.change(e)} className="form-control" id="inputMsg" placeholder="Write your message" />
                        </div>

                        <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Col>
            </Row>
        </>

    );
}

export default Formular;