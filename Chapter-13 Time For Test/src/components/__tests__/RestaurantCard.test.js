import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom';
import RestaurantCard from '../RestaurentCard';
import MOCK_DATA from '../mocks/resCardMock.json';
import { withOfferLabel } from '../RestaurentCard';

it("should render RestaurantCard component with mock props data",() => {
    render(<RestaurantCard resData={MOCK_DATA}/>);
    const resName = screen.getByText("Pizza Hut");
    expect(resName).toBeInTheDocument();
})

it("should render restaurant card with offer label", () => {
    const MockRestaurantCardWithOffer = withOfferLabel(RestaurantCard);
    render(<MockRestaurantCardWithOffer resData={MOCK_DATA} />);

    const offerLabel = screen.getByText(MOCK_DATA.info.aggregatedDiscountInfoV3.header);
    expect(offerLabel).toBeInTheDocument();
});