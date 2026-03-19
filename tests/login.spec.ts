/**
 * Test Suite: Login Functionality
 * 
 * This test verifies the login flow for the FashionHub application
 * as described in the technical challenge scenario.
 */
test.describe('Login Functionality', () => {

  test('As a customer, I want to verify I can log in to FashionHub', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await test.step('Given a valid user provides the right username & password', async () => {
      await loginPage.goto();
    });

    await test.step('When the user tries to login', async () => {
      await loginPage.login('demouser', 'fashion123');
    });

    await test.step('Then user should see a welcome message with his username', async () => {
      await expect(loginPage.welcomeMessage).toContainText('Welcome, demouser');
      
      // Optional but recommended: verify we are still on the FashionHub domain
      await expect(page).toHaveURL(/fashionhub/);
    });
  });
});
