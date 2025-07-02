import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConvertTransfersPage from './page';

describe('ConvertTransfersPage', () => {
  it('converts text correctly on Convert button click', () => {
    render(<ConvertTransfersPage />);

    const beforeTextarea = screen.getByRole('textbox', { name: '' });
    const convertButton = screen.getByRole('button', { name: /Convert/i });
    const afterTextarea = screen.getByRole('textbox', { readOnly: true });

    // Set input text with markers and ---\n to be removed
    const inputText = 'Some text ■This is the text to convert---\n(運賃内訳) Some more text';
    fireEvent.change(beforeTextarea, { target: { value: inputText } });

    // Click convert button
    fireEvent.click(convertButton);

    // Check the output text
    const expectedOutput = '■This is the text to convert';
    expect(afterTextarea.value).toBe(expectedOutput);
  });
});
