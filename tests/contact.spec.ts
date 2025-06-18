import { test, expect } from "@playwright/test";

test.describe("Contact page test", () => {
  test("Go to Contact page, submit form, and verify success message", async ({
    page,
  }) => {
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
