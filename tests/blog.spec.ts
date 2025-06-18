import { test, expect } from "@playwright/test";

test.describe("Blog page test", () => {
  test("Verify Recent Posts count and verify the length of each list item", async ({
    page,
  }) => {
    // open blog page
    await page.goto("https://practice.sdetunicorns.com/blog");

    // get the recent post list elements
    const recentPostsList = page.locator("#recent-posts-3 ul li");

    // loop thorugh the list and assert the char length > 10
    for (const el of await recentPostsList.elementHandles()) {
      console.log((await el.textContent()!).length);
      expect((await el.textContent()!).length).toBeGreaterThan(10);
    }

    // assert the total length = 5
    expect(await recentPostsList.count()).toEqual(5);
  });
});
