import { test, expect } from "../page-objects/fixtures/edge-fixtures";

test.describe("Edge Homepage", () => {
  test("Verify header links are visible and platform hover works", async ({
    homePage,
  }) => {
    await homePage.navigateHomepage();
    await expect(homePage.page).toHaveTitle(
      "Employee-Driven Growth for Multi-location Franchise & Service Brands  | Edge"
    );
    await homePage.verifyHeaderLinksVisible();
    await homePage.hoverVerifyPlatform();
  });

  test("Click Get Demo button navigates to contact page", async ({
    homePage,
    contactUs,
  }) => {
    await homePage.navigateHomepage();
    await homePage.clickGetDemoAndVerify();
    await contactUs.verifyBookDemoVisible();
  });
});
