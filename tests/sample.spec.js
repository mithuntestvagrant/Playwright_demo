import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { InventoryPage } from "../pages/InventoryPage";
import { CheckoutPage } from "../pages/CheckoutPage";

let loginPage;
let inventoryPage;
let checkoutPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    checkoutPage = new CheckoutPage(page);

    await loginPage.goto();
});

test.afterEach(async () => {
    console.log("Test completed");
});

test("complete sauce demo flow", async ({ page }) => {

    await loginPage.login("standard_user", "secret_sauce");

    await inventoryPage.addItem();
    await inventoryPage.openCart();

    await checkoutPage.fillDetails("mithun", "mishra", "842343");

    await expect(page).toHaveURL(
        "https://www.saucedemo.com/checkout-step-two.html"
    );
});