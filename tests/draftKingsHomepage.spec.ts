import { test, expect } from "@playwright/test";

test.describe("Draftkings website test", () => {
  test("Verify homepage title", async ({ page }) => {
    await page.goto("https://www.draftkings.com/");
    await expect(page).toHaveTitle(
      "DraftKings | Daily Fantasy Sports and Sportsbook"
    );
  });

  test("Click on NFL link and verify page navigation", async ({ page }) => {
    const nflLink = page.getByRole("link", { name: "NFL" });

    await page.goto("https://www.draftkings.com/");
    await expect(nflLink).toBeVisible();
    await nflLink.click();
    await expect(page).toHaveURL(/.*fantasy-footbal/);
    await expect(page).toHaveTitle(
      "Fantasy Football - Play NFL DFS on DraftKings"
    );
  });

  test("Click on Promos link and enter random user data", async ({ page }) => {
    await page.goto("https://www.draftkings.com/");
    await expect(page.locator('[data-test-id="Promos-link"]')).toBeVisible();
    await page.locator('[data-test-id="Promos-link"]').click();
    await expect(page).toHaveURL(/.*promotions/);

    const emailField = page.locator("#registration-email");
    const userNameField = page.locator("#registration-username");
    const passwordField = page.locator("#registration-password");
    const phoneNumberField = page.locator("#registration-phone-number");
    const createAccountButton = page.getByRole("button", {
      name: "Create Account",
    });

    await expect(emailField).toBeVisible();
    await emailField.click();
    await emailField.pressSequentially("JonTest@google.com");
    await userNameField.click();
    await userNameField.pressSequentially("JonUsername");
    await passwordField.click();
    await passwordField.pressSequentially("f@kePassword12");
    await phoneNumberField.click();
    await phoneNumberField.pressSequentially("4355555578");
    await expect(createAccountButton).toBeEnabled();
  });
});
