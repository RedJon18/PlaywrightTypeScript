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

  test("Got to Contact and submit form", async ({ page }) => {
    await page.goto("https://practice.sdetunicorns.com/");
    await page
      .getByRole("link", { name: "Contact", exact: true })
      .nth(0)
      .click();
    await expect(page).toHaveURL(/contact/);

    const nameField = page.getByRole("textbox", { name: "Name" });
    const emailField = page.getByRole("textbox", { name: "Email" });
    const phoneField = page.getByRole("textbox", { name: "Phone" });
    const messageField = page.getByRole("textbox", { name: "Message" });

    await nameField.pressSequentially("Jon test");
    await emailField.pressSequentially("Jontest@test.com");
    await phoneField.pressSequentially("9095555555");
    await messageField.pressSequentially(
      "This is a message for testing submitting a message on the contact page"
    );
    await page.getByRole("button", { name: "Submit" }).click();
    await expect(page.locator('div[role="alert"]')).toHaveText(
      "Thanks for contacting us! We will be in touch with you shortly"
    );
  });
});
