// components/email-template.tsx
import * as React from 'react';
import { Html, Heading, Text } from '@react-email/components';

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const VerificationEmail: React.FC<EmailTemplateProps> = ({ name, email, message }) => (
  <Html lang="en">
    <Heading as="h1">New Form Submission</Heading>
    <Text>Name: {name}</Text>
    <Text>Email: {email}</Text>
    <Text>Message: {message}</Text>
  </Html>
);

export default VerificationEmail;
