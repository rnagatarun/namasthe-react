import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { act } from "react";
import Body from "../Body";
import { MOCK_DATA } from "../mocks/mockRestaurantList.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render Body Component with search bar", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBar = screen.getByPlaceholderText("Search by name");
  expect(searchBar).toBeInTheDocument();
});

it("should render updated restaurants by searching through search bar", async () => {
    await act(async () =>
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const searchBar = screen.getByTestId("searchbyname");
    expect(searchBar).toBeInTheDocument();

    // Simulate typing in the search bar
    await act(async () => {
        searchBar.value = "Captain olive";
        searchBar.dispatchEvent(new Event("input"));
    });

    // Wait for the filtered restaurants to be displayed
    const restaurantList = await screen.findByTestId("res-container");
    expect(restaurantList).toBeInTheDocument();

    // Ensure only one restaurant matches the search query
    expect(restaurantList.children.length).toBe(1);

    // Check if the displayed restaurant matches the search query
    const displayedRestaurant = restaurantList.children[0];
    expect(displayedRestaurant.textContent.toLowerCase()).toContain("captain olive");
});