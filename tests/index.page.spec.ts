import { test, expect } from "@playwright/test";

test.describe("Index Page", () => {
  test("Should navigate to auth page from index page", async ({ page }) => {
    // Arrange
    await page.goto("/");

    // Act
    await page.getByTestId("login-button").first().click();

    // Assert
    await expect(page).toHaveURL("/auth");
  });

  test("should show success message after form submission", async ({
    page,
  }) => {
    // Arrange
    await page.goto("/");
    await page.fill("textarea", "random question");

    // Act
    await page.click("button[type='submit']");

    // Assert
    await expect(page.getByTestId("success-notification")).toBeVisible();
  });

  test("should not show success message with empty textarea", async ({
    page,
  }) => {
    // Arrange
    await page.goto("/");
    await page.fill("textarea", "");

    // Act
    await page.click("button[type='submit']");

    // Assert
    await expect(page.getByTestId("success-notification")).not.toBeVisible();
  });

  test("should clear textare after reset action", async ({ page }) => {
    // Arrange
    await page.goto("/");
    await page.fill("textarea", "some random text");

    // Act
    await page.click("button[type='reset']");

    // Assert
    await expect(page.locator("textarea")).toHaveValue("");
  });
});
