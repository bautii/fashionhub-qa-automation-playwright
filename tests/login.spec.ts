import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('As a customer, I want to verify I can log in to FashionHub', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await test.step('Given a valid user provides the right username & password', async () => {
    await loginPage.goto();
  });

  await test.step('When the user tries to login', async () => {
    await loginPage.login('demouser', 'fashion123');
  });

  await test.step('Then user should see a welcome message somewhere with his username', async () => {
    await expect(loginPage.welcomeMessage).toContainText('Welcome, demouser');
    await expect(page).toHaveURL(/fashionhub/);
  });
});
