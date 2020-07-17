import { shallow } from 'enzyme';
import React from 'react';
import CollectionItem from '../../components/atomic/collection-item/collection-item.component';
import { CollectionPage } from './collection.component';

describe('CollectionPage', () => {
  let wrapper;
  let mockItems = [{ id: 1 }, { id: 2 }, { id: 3 }];
  beforeEach(() => {
    const mockCollection = {
      items: mockItems,
      title: 'Test'
    };

    wrapper = shallow(<CollectionPage collection={mockCollection} />);
  });

  it('should render the CollectionPage component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the same number of CollectionItems as collection array', () => {
    expect(wrapper.find(CollectionItem).length).toBe(mockItems.length);
  });
});
