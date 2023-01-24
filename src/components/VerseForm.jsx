import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function VerseForm(props) {
  const [input, setInput] = useState('');

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('submitted');
    console.log(input);
    props.setVerse(input);
    setInput('');
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>What shall we memorize today?</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter verse ref"
          value={input}
          onChange={handleInputChange}
        />
        <Form.Text
          className="text-muted"
          style={{ fontSize: '1rem' }}
        >
          I have stored up your word in my heart, that I might not sin against you. Psalm 119:11
        </Form.Text>
      </Form.Group>
      <Button
        variant="light"
        type="submit"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Form>
  );
}
