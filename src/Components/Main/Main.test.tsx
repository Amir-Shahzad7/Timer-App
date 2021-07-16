import React from "react";
import Main from "./Main";
import { shallow, ShallowWrapper } from "enzyme";

describe("Main Component Testing", () => {
  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<Main />);
  });

  test("should render each div", () => {
    expect(wrapper.find("div").length).toEqual(2);
  });

  test("should render each p Tag", () => {
    expect(wrapper.find("p").length).toEqual(3);
  });

  test("should render each span Tag", () => {
    expect(wrapper.find("span").length).toEqual(2);
  });

  test("Controls Component existance", () => {
    expect(wrapper.find("Controls").length).toEqual(1);
  });
});
