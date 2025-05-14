import { test, expect } from "@playwright/test";

test.describe("Sdet Homepage testing", () => {
  test("Navigate to homepage and verify Title", async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/");
    await expect(page).toHaveTitle("Practice E-Commerce Site – SDET Unicorns");
  });

  test("Click Get Started button ussing CSS selector", async ({ page }) => {
    // open url
    await page.goto("https://practice.sdetunicorns.com/");

    // find the text locator
    const headingText = page.locator("text=Think different. Make different.");

    //veriy heading
    await expect(headingText).toBeVisible();

    // click the button
    await page.locator("#get-started").click();

    // verify the url has #get-started
    await expect(page).toHaveURL(/.*#get-started/);
  });

  test("Verify home link is enabled using text and css selector", async ({
    page,
  }) => {
    await page.goto("https://practice.sdetunicorns.com/");

    //const locators
    const homeText = page.locator('#zak-primary-menu:has-text("Home")');
    const desktopSearchIcon = page.locator(
      ".zak-header-actions--desktop .zak-header-search__toggle"
    );
    const desktopSearchField = page.locator(
      ".zak-header-actions--desktop .zak-search-field"
    );

    //search testing
    await expect(homeText).toBeEnabled();
    await expect(desktopSearchIcon).toBeVisible();
    await desktopSearchIcon.click();
    await expect(desktopSearchField).toBeVisible();
    await desktopSearchField.click();
    await desktopSearchField.fill("test");
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL("https://practice.sdetunicorns.com/?s=test");
  });
});
