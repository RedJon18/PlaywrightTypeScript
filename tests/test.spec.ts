import { test, expect } from "@playwright/test";

test.describe("Homepage test", () => {
  test("Go to homepage", async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/");
    await expect(page).toHaveTitle("Title test");
  });
});

