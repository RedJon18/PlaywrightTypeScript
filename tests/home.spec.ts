import { test, expect } from "@playwright/test";

test.describe("Verify Edge Homepage", () => {
  const expectedLinks = [
    "Platform",
    "Solutions",
    "Inegrations",
    "Resources",
    "Support",
  ];
  test("Navigate to homepage and verify title", async ({ page }) => {
    await page.goto("https://www.startedge.com/");
    await expect(page).toHaveTitle(
      "Employee-Driven Growth for Multi-location Franchise & Service Brands  | Edge"
    );
  });

  test("Navigate to About Us", async ({ page }) => {
    await page.goto("https://www.startedge.com/about-us");
    await expect(page).toHaveTitle(
      "Online Reviews & Employee Rewards Platform | Edge"
    );
  });

  test("Click Get Demo button", async ({ page }) => {
    await page.goto("https://www.startedge.com/");
    await page
      .getByRole("banner")
      .getByRole("link", { name: "Get a Demo" })
      .click();
    await expect(page).toHaveURL("https://www.startedge.com/contact-us");
  });
});
