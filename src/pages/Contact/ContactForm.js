import { Grid } from '@mui/material'
import React from 'react'
import { Button, Card, Form } from 'react-bootstrap'

export const ContactForm = () => {
    return (
        <Grid item xs={12} md={6}>
            <Card className="card-contact-form">
                <Form className="contact-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter your name"
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Email</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter your email"
                            required
                        />
                    </Form.Group>

                    <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Leave your comment</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            className="contact-form-textarea"
                        />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Card>
        </Grid>
    )
}
