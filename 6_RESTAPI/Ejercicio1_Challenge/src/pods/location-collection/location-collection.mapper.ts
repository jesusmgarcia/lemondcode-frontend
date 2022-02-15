import * as apiModel from './api/location-collection.api-model';
import * as viewModel from './location-collection.vm';

export const mapFromApiToVm = (
  location: apiModel.locationEntityApi
): viewModel.locationEntityVm => ({
  id: location.id,
  name: location.name,
  url: location.url,
});
