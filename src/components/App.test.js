import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import App from "./App";
import * as GithubAPI from "../api/GithubAPI";

configure({ adapter: new Adapter() });

describe("App functionalities", () => {
  test("getUser resove redirects to user url", () => {
    expect.assertions(1);

    GithubAPI.getUser = (t, u) => Promise.resolve({});

    const history = { push: jest.fn() };

    shallow(<App />)
      .instance()
      .submitForm("token", "name", history)
      .then(() => {
        expect(history.push).toBeCalledWith("/user/name");
      });
  });

  test("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
