import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ChatBox } from '@/components/chat/ChatBox';

jest.useFakeTimers();

describe('ChatBox', () => {
  test('sends a new message', () => {
    render(<ChatBox />);
    // Advance timers to remove loading state
    jest.runAllTimers();

    const input = screen.getByPlaceholderText(/Type a message/i);
    fireEvent.change(input, { target: { value: 'Hello there!' } });
    const sendBtn = screen.getByRole('button', { name: '' });
    fireEvent.click(sendBtn);

    expect(screen.getByText('Hello there!')).toBeInTheDocument();
  });
});


