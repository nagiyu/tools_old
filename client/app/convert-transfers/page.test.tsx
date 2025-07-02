import { render, screen, fireEvent } from '@testing-library/react';
import ConvertTransfers from './page';

describe('ConvertTransfers', () => {
  it('renders and switches tabs correctly', () => {
    render(<ConvertTransfers />);

    // Check initial tab content
    expect(screen.getByText('Before content is empty for now.')).toBeInTheDocument();
    expect(screen.queryByText('After content is empty for now.')).toBeNull();

    // Click After tab
    fireEvent.click(screen.getByText('After'));

    // Check After tab content
    expect(screen.getByText('After content is empty for now.')).toBeInTheDocument();
    expect(screen.queryByText('Before content is empty for now.')).toBeNull();

    // Click Before tab
    fireEvent.click(screen.getByText('Before'));

    // Check Before tab content again
    expect(screen.getByText('Before content is empty for now.')).toBeInTheDocument();
    expect(screen.queryByText('After content is empty for now.')).toBeNull();
  });
});
