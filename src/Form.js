import { render } from "@testing-library/react";
import React from "react";
import { Container, Col, Row, Form } from "react-bootstrap";

export default class from extends React.Component {
    contact = {
        firstname: '',
        lastname: '',
        email: '',
        msg: ''
    };
    render() {
        return(
            <Row>
                <Col md={{ span: 4, offset: 4 }}>
                    <Form className='mx-auto'>
                        <div className="form-group">
                        <label>Email address</label>
                        <input type="email" value={this.contact.email} onChange={e => this.change(e)} className="form-control" id="inputEmail" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                        <label>First Name</label>
                        <input type="text" value={this.contact.firstname} onChange={e => this.change(e)} className="form-control" id="inputFirstname" placeholder="Enter First Name" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                        <label>Last Name</label>
                        <input type="text" value={this.contact.lastname} onChange={e => this.change(e)} className="form-control" id="inputLastname" placeholder="Enter Last Name" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group">
                        <label>Message</label>
                        <input type="text" value={this.contact.msg} onChange={e => this.change(e)} className="form-control" id="inputMsg" placeholder="Write your message" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>

                        <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </Form>
                </Col>
            </Row>

        );
    }
}