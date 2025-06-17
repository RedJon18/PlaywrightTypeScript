import { expect, test } from "@playwright/test";

test.describe("This is a sample test", () => {
  test("Test the homepage", async ({ page }) => {
    await page.goto("https://www.meta.com/ai-glasses/");
    await expect(page).toHaveTitle(
      "Meta AI Glasses | Ray-Ban Meta | Meta Store"
    );
    await page.getByRole("link", { name: "Shop all styles" }).click();
    await expect(page).toHaveURL(/shop-all/);
  });
});
