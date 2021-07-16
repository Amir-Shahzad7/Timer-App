import CalculateTime from "./CalculateTime";

const wrapper = CalculateTime(0);

describe("Testing CalculateTime Function", () => {
    test("should return an array", () => {
        expect(wrapper).toEqual(expect.arrayContaining(['00', '00', '00']));
    })
});