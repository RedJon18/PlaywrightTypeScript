import { expect, test } from "@playwright/test";

test.describe("This is a sample test", () => {
  test("Test the homepage", async ({ page }) => {
    await page.goto("https://www.meta.com/ai-glasses/");
    await expect(page).toHaveTitle("Ray-Ban Meta AI Glasses | Meta Store");
    await page.getByRole("link", { name: "Shop all styles" }).click();
    await expect(page).toHaveURL(/shop-all/);
  });
});
