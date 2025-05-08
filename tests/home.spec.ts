import { test, expect } from "@playwright/test";
import { HomePageEdge } from "../pages/homePage";

test.describe("Edge Homepage", () => {
  let homePage: HomePageEdge;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePageEdge(page);
    await homePage.navigate();
  });

  test("Verify header links are visible and platform hover works", async () => {
    await expect(homePage.page).toHaveTitle(
      "Employee-Driven Growth for Multi-location Franchise & Service Brands  | Edge"
    );
    await homePage.verifyHeaderLinksVisible();
    await homePage.hoverVerifyPlatform();
  });

  test("Click Get Demo button navigates to contact page", async () => {
    await homePage.clickGetDemoAndVerify();
  });
});
