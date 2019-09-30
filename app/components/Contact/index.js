/**
 *
 * Contact
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

// Bootstrap
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const MainContact = styled.div`
	background-image: url("app-background.png");
	background-attachment: fixed;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	& .row {
		margin-right: 0;
		margin-left: 0;
		height: 100%;
		background: rgba(243,245,246, .50);
		& div.contact {
			margin-top: 13%;
			& h1 {
				font-weight: bold;
			}
			& p {
				font-size: 18px;
				font-family: "Courier New", Courier, monospace;
				margin-bottom: 0px;
			}
		}
		& .copyright {
			text-align: center;
			width: 100%;
			line-height: 5;
		}
	}
	& div.contact-fields {
		background: #fff;
		padding: 20px;
		margin-top: 10%;
		& h1 {
			text-transform: none;
			font-size: 19px;
		}
		& input[type="text"], input[type="email"] {
			border: none;
			outline: none;
			border-bottom: 2px solid #282828;
			border-radius: 0px;
		}
		& input:focus, textarea:focus{
        outline: none;
    }
	}
 }
`

function Contact() {
  return (
    <MainContact id="contact-form">
	    <Row>
	   		<Col lg={6}>
	   			<div className="contact">
		    		<h1>Contact Us</h1>
			    	<p>587.664.6750</p>
			    	<p>beyondtravel19@gmail.com</p>
			    	<p>Southwest Calgary, Alberta</p>
	   			</div>
		    </Col>
		    <Col lg={6}>
		    	<div className="contact-fields">
		    		<h1>Tell Us About Yourself</h1>
		    		<Form noValidate>
	              <Form.Row>
	                <Col>
	                  <Form.Group>
	                    <Form.Label>Name</Form.Label>
	                    <Form.Control
	                      type="text"
	                      name="name"
	                      required
	                      tabindex="1"
	                    />
	                  </Form.Group>
	                  <Form.Group>
	                    <Form.Label>Email</Form.Label>
	                    <Form.Control
	                      type="email"
	                      name="email"
	                      required
	                      tabindex="3"
	                    />
	                  </Form.Group>
	                </Col>
	                <Col>
	                  <Form.Group>
	                    <Form.Label>Phone</Form.Label>
	                    <Form.Control
	                      type="text"
	                      name="phone"
	                      required
	                      tabindex="2"
	                    />
	                  </Form.Group>
	                  <Form.Group>
	                    <Form.Label>Address</Form.Label>
	                    <Form.Control
	                      type="text"
	                      name="address"
	                      required
	                      tabindex="4"
	                    />
	                  </Form.Group>
	                </Col>
	              </Form.Row>
	              <Form.Row>
	                <Col>
	                  <Form.Group>
	                    <Form.Label>Company</Form.Label>
	                    <Form.Control
	                      type="text"
	                      name="company"
	                      required
	                      tabindex="5"
	                    />
	                  </Form.Group>
	                </Col>
	              </Form.Row>
	              <Button>Submit</Button>
	            </Form>
		    	</div>
	    	</Col>
		    <div className="copyright">
		    	© 2019 by Beyond The Travel
		    </div>
	    </Row>
    </MainContact>
  );
}

Contact.propTypes = {};

export default memo(Contact);
