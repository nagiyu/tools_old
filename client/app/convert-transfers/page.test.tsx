import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MantineProvider } from '@mantine/core';
import ConvertTransfers from './page';

const renderWithMantine = (ui: React.ReactElement) => {
  return render(<MantineProvider>{ui}</MantineProvider>);
}

// Mock clipboard API
const mockClipboard = (() => {
  let clipboardData = '';
  return {
    readText: jest.fn(() => Promise.resolve(clipboardData)),
    writeText: jest.fn((text) => {
      clipboardData = text;
      return Promise.resolve();
    }),
    __setClipboardData: (text: string) => {
      clipboardData = text;
    },
  };
})();

Object.defineProperty(navigator, 'clipboard', {
  value: mockClipboard,
  writable: true,
});

describe('ConvertTransfers', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Read button reads clipboard and sets Before textarea', async () => {
    mockClipboard.__setClipboardData('clipboard text');
    renderWithMantine(<ConvertTransfers />);

    fireEvent.click(screen.getByText('Read'));

    await waitFor(() => {
      expect(screen.getByDisplayValue('clipboard text')).toBeInTheDocument();
    });
  });

  test('Convert button copies Before text to After textarea', () => {
    renderWithMantine(<ConvertTransfers />);

    const beforeTextarea = screen.getByRole('textbox', { name: '' });
    fireEvent.change(beforeTextarea, { target: { value: 'input text' } });

    fireEvent.click(screen.getByText('Convert'));

    expect(screen.getByDisplayValue('input text')).toBeInTheDocument();
  });

  test('Copy button writes After textarea content to clipboard', async () => {
    renderWithMantine(<ConvertTransfers />);

    const beforeTextarea = screen.getByRole('textbox', { name: '' });
    fireEvent.change(beforeTextarea, { target: { value: 'input text' } });

    fireEvent.click(screen.getByText('Convert'));

    fireEvent.click(screen.getByText('Copy'));

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith('input text');
    });
  });
});
