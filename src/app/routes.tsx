import { createBrowserRouter } from "react-router";
import Portfolio from "./pages/Portfolio";
import BelongCaseStudy from "./pages/BelongCaseStudy";
import SkootGasCaseStudy from "./pages/SkootGasCaseStudy";
import SkootRideCaseStudy from "./pages/SkootRideCaseStudy";
import BumaCaseStudy from "./pages/BumaCaseStudy";

export const router = createBrowserRouter([
  { path: "/", Component: Portfolio },
  { path: "/case-study/belong", Component: BelongCaseStudy },
  { path: "/case-study/skoot-gas", Component: SkootGasCaseStudy },
  { path: "/case-study/skoot-ride", Component: SkootRideCaseStudy },
  { path: "/case-study/buma-awards", Component: BumaCaseStudy },
]);
