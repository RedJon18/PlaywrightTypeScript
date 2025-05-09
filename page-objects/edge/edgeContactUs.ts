import { expect, Locator, Page } from "@playwright/test";

export class EdgeContactUsPage {
  public readonly edgeBookDemoTitle: Locator;

  constructor(readonly page: Page) {
    this.edgeBookDemoTitle = page.getByRole("heading", {
      name: "Book an Edge demo for your",
    });
  }

  async navigateContactUs() {
    await this.page.goto("https://www.startedge.com/contact-us");
  }

  async verifyBookDemoVisible() {
    await expect(this.edgeBookDemoTitle).toBeVisible();
  }
}
