import { render, screen, fireEvent } from '@testing-library/react';
import Page from './page';

describe('Convert Transfers Page', () => {
  beforeEach(() => {
    // Mock alert
    global.alert = jest.fn();
    // Mock clipboard
    Object.assign(navigator, {
      clipboard: {
        writeText: jest.fn().mockResolvedValue(undefined),
      },
    });
  });

  it('copies text to clipboard and shows alert on success', async () => {
    render(<Page />);

    // Set some text in the afterText textarea
    const afterTextarea = screen.getByRole('textbox', { name: '' });
    fireEvent.change(afterTextarea, { target: { value: 'test copied text' } });

    // Click the copy button
    const copyButton = screen.getByText('Copy');
    fireEvent.click(copyButton);

    // Wait for clipboard writeText to be called
    expect(navigator.clipboard.writeText).toHaveBeenCalledWith('test copied text');

    // Wait for alert to be called
    expect(global.alert).toHaveBeenCalledWith('コピーに成功しました');
  });
});
