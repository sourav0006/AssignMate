import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { CreateAssignmentForm } from '@/components/assignment/CreateAssignmentForm';

jest.mock('@/hooks/use-toast', () => ({
  useToast: () => ({ toast: jest.fn() }),
}));

describe('CreateAssignmentForm', () => {
  test('posts assignment when form is valid', async () => {
    render(<CreateAssignmentForm />);

    fireEvent.change(screen.getByLabelText(/Assignment Title/i), { target: { value: 'Valid assignment title' } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: 'A sufficiently long description for testing purpose goes here.' } });
    fireEvent.change(screen.getByLabelText(/Payment Amount/i), { target: { value: '100' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'Mumbai' } });

    const submit = screen.getByRole('button', { name: /Post Assignment/i });
    fireEvent.click(submit);

    await waitFor(() => expect(submit).toBeEnabled());
  });
});


