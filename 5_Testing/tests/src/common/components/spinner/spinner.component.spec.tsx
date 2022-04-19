import React from 'react';
import * as reactPromiseTracker from 'react-promise-tracker';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

jest.mock('react-promise-tracker');

describe('Spinner component specs', () => {
  it('shouldnt show the modal component when no promise is still waiting', () => {
    // Arrange
    (reactPromiseTracker.usePromiseTracker as jest.Mock).mockReturnValue({
      promiseInProgress: false,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(reactPromiseTracker.usePromiseTracker).toHaveBeenCalled();
    const element = screen.queryByRole('presentation');
    expect(element).not.toBeInTheDocument();
  });

  it('should show the modal component when some promises are still waiting', () => {
    // Arrange
    (reactPromiseTracker.usePromiseTracker as jest.Mock).mockReturnValue({
      promiseInProgress: true,
    });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(reactPromiseTracker.usePromiseTracker).toHaveBeenCalled();
    const element = screen.getByRole('presentation');
    expect(element).toBeInTheDocument();
  });

});
