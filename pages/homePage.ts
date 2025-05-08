import { expect, Locator, Page } from "@playwright/test";

export class HomePageEdge {
  public readonly edgeHomeButtonLink: Locator;
  public readonly edgePlatformLink: Locator;
  public readonly edgeSolutionsLink: Locator;
  public readonly edgeIntegrationsLink: Locator;
  public readonly edgeResourcesLink: Locator;
  public readonly edgeSupportLink: Locator;
  public readonly edgeLoginLink: Locator;
  public readonly edgeGetDemoLink: Locator;
  public readonly edgeCreateSalesContest: Locator;

  constructor(readonly page: Page) {
    this.edgeHomeButtonLink = page.getByRole("link", {
      name: "home",
      exact: true,
    });
    this.edgePlatformLink = page.getByRole("button", { name: "Platform" });
    this.edgeSolutionsLink = page.getByRole("button", { name: "Solutions" });
    this.edgeIntegrationsLink = page.getByRole("link", {
      name: "Integrations",
      exact: true,
    });
    this.edgeResourcesLink = page.getByRole("button", { name: "Resources" });
    this.edgeSupportLink = page.getByRole("link", {
      name: "Support",
      exact: true,
    });
    this.edgeLoginLink = page.getByRole("link", { name: "Edge Login" });
    this.edgeGetDemoLink = page
      .getByRole("banner")
      .getByRole("link", { name: "Get a Demo" });
    this.edgeCreateSalesContest = page.getByRole("link", {
      name: "Create Sales Contests",
    });
  }

  async navigate() {
    await this.page.goto("https://www.startedge.com/");
  }

  async verifyHeaderLinksVisible() {
    await expect(this.edgeHomeButtonLink).toBeVisible();
    await expect(this.edgePlatformLink).toBeVisible();
    await expect(this.edgeSolutionsLink).toBeVisible();
    await expect(this.edgeIntegrationsLink).toBeVisible();
    await expect(this.edgeResourcesLink).toBeVisible();
    await expect(this.edgeSupportLink).toBeVisible();
    await expect(this.edgeLoginLink).toBeVisible();
    await expect(this.edgeGetDemoLink).toBeVisible();
  }

  async hoverVerifyPlatform() {
    await this.edgePlatformLink.hover();
    await expect(this.edgeCreateSalesContest).toBeVisible();
  }

  async clickGetDemoAndVerify() {
    await this.edgeGetDemoLink.click();
    await expect(this.page).toHaveURL("https://www.startedge.com/contact-us");
  }
}
