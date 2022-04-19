import { renderHook, act } from '@testing-library/react-hooks';
import { useConfirmationDialog } from './confirmation-dialog.hook';
import { Lookup } from 'common/models';

describe('Confirmation Dialog hook specs', () => {
  it('should return isOpen and itemToDelete with default values and 3 functions (onAccept, onClose, onOpenDialog', () => {
    // Arrange
    const emptyLookup: Lookup = {
      id: '',
      name: '',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    // Assert
    expect(result.current.isOpen).toBeFalsy();
    expect(result.current.itemToDelete).toEqual(emptyLookup);

    expect(result.current.onAccept).toEqual(expect.any(Function));
    expect(result.current.onClose).toEqual(expect.any(Function));
    expect(result.current.onOpenDialog).toEqual(expect.any(Function));
  });

  it('should update isOpen and itemToDelete when it calls onOpenDialog', () => {
    // Arrange
    const item: Lookup = {
      id: '123',
      name: 'test',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
    });

    // Assert
    expect(result.current.isOpen).toBeTruthy();
    expect(result.current.itemToDelete).toEqual(item);
  });

  it('should reset itemToDelete when it calls onAccept', () => {
    // Arrange
    const item: Lookup = {
      id: '123',
      name: 'test',
    };

    const emptyLookup: Lookup = {
      id: '',
      name: '',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onAccept();
    });

    // Assert
    expect(result.current.itemToDelete).toEqual(emptyLookup);
  });

  it('should reset isOpen when it calls onClose', () => {
    // Arrange
    const item: Lookup = {
      id: '123',
      name: 'test',
    };

    // Act
    const { result } = renderHook(() => useConfirmationDialog());

    act(() => {
      result.current.onOpenDialog(item);
      result.current.onClose();
    });
    // Assert
    expect(result.current.isOpen).toBeFalsy();
  });
});
