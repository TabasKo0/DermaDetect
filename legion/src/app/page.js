/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Link from 'next/link';

export default function DocumentationPage() {
  return React.createElement(
    'main',
    { className: 'documentation-page' },
    React.createElement(
      'header',
      null,
      React.createElement('h1', null, 'Documentation'),
      React.createElement(
        'p',
        { className: 'lead' },
        'A short guide to using DermaDetect and the available endpoints.'
      )
    ),

    React.createElement(
      'section',
      { 'aria-labelledby': 'usage-title' },
      React.createElement('h2', { id: 'usage-title' }, 'Quick usage'),
      React.createElement(
        'p',
        null,
        'To analyze a lesion, go to the "Analyze" page, upload an image, and click the "Start Analysis" button. The system will return a classification and confidence scores.'
      ),
      React.createElement(
        'p',
        null,
        "You can also pass metadata (age, location, history) alongside the image to improve the model's contextual interpretation."
      ),
      React.createElement(
        Link,
        { href: '/analyze', className: 'btn-primary', 'aria-label': 'Go to analyze page' },
        'Go to Analyze'
      )
    ),

    React.createElement(
      'section',
      { 'aria-labelledby': 'api-title', className: 'api-section' },
      React.createElement('h2', { id: 'api-title' }, 'API & Integration'),
      React.createElement(
        'p',
        null,
        'Use the REST endpoint to submit images programmatically. When sending test payloads in documentation or examples, wrap string literals in "quotes" to make the examples clear.'
      ),
      React.createElement(
        'pre',
        { className: 'example' },
        'POST /api/analyze\nContent-Type: multipart/form-data\n\nfile: <image>\nage: 45\nlocation: "left arm"\n'
      )
    ),

    React.createElement(
      'footer',
      { className: 'docs-footer' },
      React.createElement(
        'small',
        null,
        '© ' + new Date().getFullYear() + ' DermaDetect — Documentation'
      )
    )
  );
}