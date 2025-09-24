import { test, expect } from "@playwright/test";

test("Should navigate to auth page", async ({ page }) => {
  // Arrange
  await page.goto("/");

  // Act
  await page.click("text=Войти");

  // Assert
  await expect(page).toHaveURL("/auth");
});
