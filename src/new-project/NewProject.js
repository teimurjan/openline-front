import React from 'react';
import PropTypes from 'prop-types';
import {TabContents, Tabs, TabTitle, TabTitles} from "../common/tabs/Tabs";
import CommonInformation from "./common-information/CommonInformationContainer";

export default class NewProject extends React.Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    chosenTabIndex: PropTypes.number.isRequired,
    actions: PropTypes.shape({
      changeTab: PropTypes.func.isRequired,
    }).isRequired
  };

  render() {
    const {chosenTabIndex} = this.props;
    return (
      <Tabs activeIndex={chosenTabIndex}>
        <TabTitles activeClassName='active'>
          <TabTitle>Общая информация</TabTitle>
          <TabTitle>Детали</TabTitle>
        </TabTitles>
        <TabContents>
          <CommonInformation/>
        </TabContents>
      </Tabs>
    );
  }
}