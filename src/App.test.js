import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders weather app link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
