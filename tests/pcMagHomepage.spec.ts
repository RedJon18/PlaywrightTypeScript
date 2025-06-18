import { expect, test } from "@playwright/test";

test.describe("New PC Mag test", () => {
  test("Navigate to homepage", async ({ page }) => {
    await page.goto("https://www.pcmag.com/");
    await expect(page).toHaveTitle(
      "The Latest Technology Product Reviews, News, Tips, and Deals | PCMag"
    );
  });

  test("Verify and click on Best Products link", async ({ page }) => {
    await page.goto("https://www.pcmag.com/");

    const bestProductsLink = page
      .getByRole("link", { name: "Best Products", exact: true })
      .first();
    const searchField = page.getByRole("searchbox", { name: "Search" });

    await expect(bestProductsLink).toBeVisible();
    await bestProductsLink.click();
    await expect(page).toHaveTitle("Our Top Product Picks for 2025 | PCMag");
    await searchField.click();
    await page.keyboard.type("Laptops");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL(/.*Laptops/);
  });
});
