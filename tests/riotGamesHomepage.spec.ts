import { test, expect } from "@playwright/test";

test.describe("Riot website test", () => {
  test("Verify main homepage links and click Who We Are", async ({ page }) => {
    await page.goto("https://www.riotgames.com/en");
    await expect(page.locator(".hero-new__content__logo")).toBeVisible();
    await expect(page.getByRole("link", { name: "Who We Are" })).toBeVisible();
    await expect(
      page.locator(
        '[data-testid="riotbar:desktopNav:link-internal-workwithus"]'
      )
    ).toBeVisible();
    await expect(
      page.getByRole("link", { name: "News", exact: true })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Play Now" })).toBeVisible();
    await page.getByRole("link", { name: "Who We Are" }).click();
    await expect(page).toHaveURL(/.*who-we-are/);
  });

  test("Search for TFT and follow links to application page", async ({
    page,
  }) => {
    await page.goto("https://www.riotgames.com/en");

    const searchBar = page.locator(".root-portal-header .search-input");

    await searchBar.click();
    await searchBar.pressSequentially("TFT");
    await page.keyboard.press("Enter");
    await expect(
      page.getByRole("heading", { name: "TFT", exact: true })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Jobs" })).toBeVisible();
    await expect(
      page.locator('.job-row--body:has-text("TeamFight Tactics")').first()
    ).toBeVisible();
    await page
      .locator('.job-row--body:has-text("TeamFight Tactics")')
      .first()
      .click();
    await expect(page).toHaveURL(/.*work-with-us/);
    await expect(page.getByRole("button", { name: "Apply" })).toBeVisible();
    await page.getByRole("button", { name: "Apply" }).click();

    const iframeHeader = page
      .frameLocator('iframe[title="Greenhouse Job Board"]')
      .getByRole("heading", { name: "Apply for this job" });
    const iframeSubmitButton = page
      .frameLocator('iframe[title="Greenhouse Job Board"]')
      .getByRole("button", { name: "Submit application" });

    await expect(iframeHeader).toBeVisible();
    await expect(iframeSubmitButton).toBeVisible();
  });
});
