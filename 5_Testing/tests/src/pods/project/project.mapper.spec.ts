import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('project mapper spec', () => {
  it('should return empty object when it feeds undefined', () => {
    // Arrange
    const apiProject: apiModel.Project = undefined;
    const emptyProject: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiProject);
    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return empty object when it feeds null', () => {
    // Arrange
    const apiProject: apiModel.Project = null;
    const emptyProject: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiProject);
    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return empty object when it feeds an empty object', () => {
    // Arrange
    const apiProject: apiModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };
    const emptyProject: viewModel.Project = {
      id: '',
      name: '',
      externalId: '',
      comments: '',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiProject);
    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return a mapped object when it feeds with an api object', () => {
    // Arrange
    const apiProject: apiModel.Project = {
      id: '1',
      name: 'test',
      externalId: 'testId',
      comments: 'comments',
      isActive: false,
      employees: [{ id: '1', isAssigned: true, employeeName: 'Pedro' }],
    };
    const emptyProject: viewModel.Project = {
      id: '1',
      name: 'test',
      externalId: 'testId',
      comments: 'comments',
      isActive: false,
      employees: [{ id: '1', isAssigned: true, employeeName: 'Pedro' }],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiProject);
    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return an employee empty array when it feeds with null', () => {
    // Arrange
    const apiProject: apiModel.Project = {
      id: '1',
      name: 'test',
      externalId: 'testId',
      comments: 'comments',
      isActive: false,
      employees: null,
    };
    const emptyProject: viewModel.Project = {
      id: '1',
      name: 'test',
      externalId: 'testId',
      comments: 'comments',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiProject);
    // Assert
    expect(result).toEqual(emptyProject);
  });

  it('should return an employee empty array when it feeds with undefined', () => {
    // Arrange
    const apiProject: apiModel.Project = {
      id: '1',
      name: 'test',
      externalId: 'testId',
      comments: 'comments',
      isActive: false,
      employees: undefined,
    };
    const emptyProject: viewModel.Project = {
      id: '1',
      name: 'test',
      externalId: 'testId',
      comments: 'comments',
      isActive: false,
      employees: [],
    };

    // Act
    const result: viewModel.Project = mapProjectFromApiToVm(apiProject);
    // Assert
    expect(result).toEqual(emptyProject);
  });
});
