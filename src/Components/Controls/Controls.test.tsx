import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import Controls from "./Controls";

describe("Controls Component Testing", () => {
    let wrapper: ShallowWrapper;

    beforeEach(() => {
        wrapper = shallow(<Controls setTimeSec = {Function} />);
    });

    test("should render a div", () => {
        expect(wrapper.find("div").length).toEqual(1);
    });

    test("should render 3 buttons", () => {
        expect(wrapper.find("button").length).toEqual(3);
    });

    test("Start button Testing", () => {
        wrapper.find("#start-button").simulate("click");
        expect(wrapper.find("button").at(0).text()).toEqual("Start");
    });

    test("Stop button Testing", () => {
        wrapper.find("#start-button").simulate("click");
        expect(wrapper.find("button").at(1).text()).toEqual("Stop");
    });

    test("Reset button Testing", () => {
        wrapper.find("#start-button").simulate("click");
        expect(wrapper.find("button").at(2).text()).toEqual("Reset");
    });
})