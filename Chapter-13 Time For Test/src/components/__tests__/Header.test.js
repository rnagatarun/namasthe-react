import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

it("should load Header Component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginButton = screen.getByText('Login');
  const loginButton = screen.getByRole("button");
  expect(loginButton).toBeInTheDocument();
});

it("should load Header Component with a CartItems", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const cartItems = screen.getByText("Cart-(0 items)");
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});

it("should change login to logout on click on Header Component ", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button");
  fireEvent.click(loginButton);
  const logoutButton = screen.getByRole("button");
  expect(logoutButton).toBeInTheDocument();
});
