import React from "react";
import Provider from 'react-redux';
import { shallow, mount } from "enzyme";
import renderer from "react-test-renderer";
import Options from "../../../components/options/options.js";

let store = {
  test:1
}

describe('options', () => {
  it('exists', () => {
    let hrm = shallow(
    <Provider store={store}><Options /> </Provider>);
    expect(hrm.find("#options").exists()).toBeTruthy();
  })
})