const {
  randomNumber,
  upperString,
  firstLetter,
  concatTwoStrings,
  dogPicturesFetch,
} = require("./service");
jest.mock("./service");

describe("tests for function randomNumber", () => {
  afterEach(() => jest.clearAllMocks());

  it("1 - should be return default value 10", () => {
    randomNumber.mockReturnValue(10);
    randomNumber();

    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  });

  it("2 - should take two parameters and return the division", () => {
    randomNumber.mockImplementationOnce(
      (dividend, divider) => dividend / divider
    );

    expect(randomNumber(4, 2)).toBe(2);
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber).toHaveBeenCalledTimes(1);
    expect(randomNumber()).toBe(10);
  });

  it("3 - should take three parameters", () => {
    randomNumber.mockImplementation((a, b, c) => a * b * c);

    expect(randomNumber(2, 4, 6)).toBe(48);
    expect(randomNumber).toHaveBeenCalledWith(2, 4, 6);
    expect(randomNumber).toHaveBeenCalled();

    randomNumber.mockReset();
    randomNumber.mockImplementation((number) => number * 2);

    expect(randomNumber(10)).toBe(20);
    expect(randomNumber).toHaveBeenCalledWith(10);
    expect(randomNumber).toHaveBeenCalledTimes(1);
  });
});

describe("4 - tests for functions upperString, firstLetter and concatTwoStrings", () => {
  it("function upperString must return string in lowerCase", () => {
    upperString.mockImplementation((string) => string.toLowerCase());

    expect(upperString("HarRy PoTTer")).toBe("harry potter");
    expect(upperString).toHaveBeenCalled();
  });

  it("function firstLetter must return last work", () => {
    firstLetter.mockImplementation((string) => string[string.length - 1]);

    expect(firstLetter("Sherlock Holmes")).toBe("s");
    expect(firstLetter).toHaveBeenCalled();
  });

  it("function concatTwoStrings must concat three string", () => {
    concatTwoStrings.mockImplementation(
      (firstString, secondString, thirdString) =>
        firstString.concat(secondString, thirdString)
    );

    expect(concatTwoStrings("Game", "of", "Thrones")).toBe("GameofThrones");
    expect(concatTwoStrings).toHaveBeenCalled();
  });

  it("should be restore function upperString", () => {
    upperString.mockReset();
    upperString.mockImplementation((string) => string.toUpperCase());

    expect(upperString("HarRy PoTTer")).toBe("HARRY POTTER");
    expect(upperString).toHaveBeenCalledTimes(1);
  });
});

describe("5 - tests for function dogPicturesFetch", () => {
  it("requisition sucess and receive value 'request success'", async () => {
    const dog = {
      message: "https://images.dog.ceo/breeds/brabancon/n02112706_637.jpg",
      status: "request success",
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(dog),
      })
    );

    dogPicturesFetch.mockImplementation(() => {
      return fetch()
        .then((response) => response.json())
        .then(({ status }) => status);
    });
    await dogPicturesFetch();

    expect(dogPicturesFetch).toHaveBeenCalled();
    expect(await dogPicturesFetch()).toBe("request success");
  });

  it("requisiton failed nad receive value 'request failed'", async () => {
    const dog = {
      message: "https://images.dog.ceo/breeds/brabancon/n02112706_637.jpg",
      status: "request failed",
    };
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(dog),
      })
    );

    dogPicturesFetch.mockImplementation(() => {
      return fetch()
        .then((response) => response.json())
        .then(({ status }) => status);
    });
    await dogPicturesFetch();

    expect(dogPicturesFetch).toHaveBeenCalled();
    expect(await dogPicturesFetch()).toBe("request failed");
  });
});
