import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  ConfirmationDialogComponent,
  Props,
} from './confirmation-dialog.component';

describe('Confirmation Dialog component specs', () => {
  it('should not display the presentation container when open is false', () => {
    // Arrange
    const props: Props = {
      isOpen: false,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: 'closeButton',
        acceptButton: 'acceptButton',
      },
    };

    const childrenText: string = 'children';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {childrenText}
      </ConfirmationDialogComponent>
    );

    // Assert
    const element = screen.queryByRole('presentation');
    expect(element).not.toBeInTheDocument();
  });

  it('should display the presentation container when open is true', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: 'closeButton',
        acceptButton: 'acceptButton',
      },
    };

    const childrenText: string = 'children';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {childrenText}
      </ConfirmationDialogComponent>
    );

    // Assert
    const element = screen.getByRole('presentation');
    expect(element).toBeInTheDocument();
  });

  it('should display the a dialog container', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: 'closeButton',
        acceptButton: 'acceptButton',
      },
    };
    const childrenText: string = 'children';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {childrenText}
      </ConfirmationDialogComponent>
    );

    // Assert
    const element = screen.getByRole('dialog');
    expect(element).toBeInTheDocument();
  });

  it('should display the title, content and button labels passed as props', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: () => {},
      onClose: () => {},
      title: 'Title',
      labels: {
        closeButton: 'closeButton',
        acceptButton: 'acceptButton',
      },
    };
    const childrenText: string = 'childrenText';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {childrenText}
      </ConfirmationDialogComponent>
    );

    // Assert

    // Title
    const h2Element = screen.getByRole('heading', {
      name: props.title.toString(),
    });
    expect(h2Element).not.toBeNull();
    expect(h2Element.tagName).toEqual('H2');

    // Content
    const contentElement = screen.getByText(childrenText, {
      selector: 'div',
      exact: true,
    });
    expect(contentElement).not.toBeNull();
    // It's needed?
    expect(contentElement.textContent).toBe(childrenText);

    // Button labels
    const element = screen.getAllByRole('button');
    expect(element).toHaveLength(2);
    expect(element[0].textContent).toEqual(props.labels.closeButton);
    expect(element[1].textContent).toEqual(props.labels.acceptButton);
  });

  it('should call onAccept and onClose when it clicks on "accept" button', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: jest.fn(),
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'closeButton',
        acceptButton: 'acceptButton',
      },
    };
    const childrenText: string = 'children';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {childrenText}
      </ConfirmationDialogComponent>
    );

    const dialogElement = screen.getByRole('dialog');

    const buttonElements = within(dialogElement).getAllByRole('button');
    userEvent.click(buttonElements[1]);

    // Assert
    expect(props.onAccept).toHaveBeenCalled();
    expect(props.onClose).toHaveBeenCalled();
  });

  it('should call onClose when it clicks on "close" button', () => {
    // Arrange
    const props: Props = {
      isOpen: true,
      onAccept: () => {},
      onClose: jest.fn(),
      title: 'Title',
      labels: {
        closeButton: 'closeButton',
        acceptButton: 'acceptButton',
      },
    };
    const childrenText: string = 'children';

    // Act
    render(
      <ConfirmationDialogComponent {...props}>
        {childrenText}
      </ConfirmationDialogComponent>
    );

    const dialogElement = screen.getByRole('dialog');

    const buttonElements = within(dialogElement).getAllByRole('button');
    userEvent.click(buttonElements[0]);

    // Assert
    expect(props.onClose).toHaveBeenCalled();
  });
});
