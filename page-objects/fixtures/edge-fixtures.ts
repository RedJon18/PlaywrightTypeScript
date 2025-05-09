import { test as base, expect, Page } from "@playwright/test";
import { EdgeHomePage } from "../edge/edgeHomePage";
import { EdgeContactUsPage } from "../edge/edgeContactUs";

// Extend the base test to add our custom fixtures
type EdgeFixtures = {
  homePage: EdgeHomePage;
  contactUs: EdgeContactUsPage;
};

export const test = base.extend<EdgeFixtures>({
  homePage: async ({ page }, use) => {
    const homePage = new EdgeHomePage(page);
    await use(homePage);
  },
  contactUs: async ({ page }, use) => {
    const contactUs = new EdgeContactUsPage(page);
    await use(contactUs);
  },
});

export { expect };
