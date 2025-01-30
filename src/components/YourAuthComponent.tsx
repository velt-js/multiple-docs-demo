import { useIdentify } from '@veltdev/react';

export default function AuthComponent() {
  // Hardcoded user info
  const hardcodedUser = {
    userId: 'user-123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    color: '#FF5733', // Example hex color
    textColor: '#FFFFFF',
    organizationId: 'org-123'
  };

  // Call useIdentify hook directly in the component
  useIdentify(hardcodedUser);

  // No UI needed since we're auto-identifying
  return null;
} 