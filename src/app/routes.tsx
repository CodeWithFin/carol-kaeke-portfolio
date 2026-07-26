import { createBrowserRouter, Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import Portfolio from "./pages/Portfolio";
import BelongCaseStudy from "./pages/BelongCaseStudy";
import SkootGasCaseStudy from "./pages/SkootGasCaseStudy";
import SkootRideCaseStudy from "./pages/SkootRideCaseStudy";
import BumaCaseStudy from "./pages/BumaCaseStudy";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", Component: Portfolio },
      { path: "/case-study/belong", Component: BelongCaseStudy },
      { path: "/case-study/skoot-gas", Component: SkootGasCaseStudy },
      { path: "/case-study/skoot-ride", Component: SkootRideCaseStudy },
      { path: "/case-study/buma-awards", Component: BumaCaseStudy },
    ],
  },
]);

