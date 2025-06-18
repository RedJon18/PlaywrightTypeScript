import { expect, test } from "@playwright/test";

test.describe("This is a sample test", () => {
  test("Test the homepage", async ({ page }) => {
    await page.goto("https://www.meta.com");
    await expect(page).toHaveTitle(
      "Meta - Shop MR, VR Headsets & AI Glasses | Meta Store"
    );
    await page.getByRole("link", { name: "Shop AI glasses" }).click();
    await expect(page).toHaveURL(/shop-all/);
  });
});
