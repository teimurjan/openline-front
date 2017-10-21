import React from 'react';
import ViewProject from '../ViewProjectContainer';
import SupportLayout from './support-layout/SupportLayout';

const IndividualProjectPage = (props) => {
  return (
    <ViewProject projectId={props.params.id}>
      <SupportLayout/>
    </ViewProject>
  );
};

export default IndividualProjectPage;