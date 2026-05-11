export class InventoryPage {
    constructor(page) {
        this.page = page;
        this.addBackpack = page.locator('#add-to-cart-sauce-labs-backpack');
        this.cart = page.locator('.shopping_cart_link');
    }

    async addItem() {
        await this.addBackpack.click();
    }

    async openCart() {
        await this.cart.click();
    }
}