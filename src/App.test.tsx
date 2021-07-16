import React from "react";
import "@testing-library/jest-dom";
import { shallow, ShallowWrapper } from "enzyme";
import App from "./App";
import Main from "./Components/Main/Main";

describe("App Component Testing", () => {

  let wrapper: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<App />)
  })

  test("testing div of App Component", () => {
    expect(wrapper.find("div").length).toBeGreaterThanOrEqual(1);
  });

  test("testing of the Title of the App", () => {
    expect(wrapper.find("h1").text()).toContain("Timer App");
  });

  test("Main Component existance", () => {
    expect(wrapper.containsMatchingElement(<Main />)).toBeTruthy();
  })
});
