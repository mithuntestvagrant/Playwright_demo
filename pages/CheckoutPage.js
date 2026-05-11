export class CheckoutPage {
    constructor(page) {
        this.page = page;

        this.checkoutBtn = page.getByRole('button', { name: 'Checkout' });
        this.firstName = page.locator('#first-name');
        this.lastName = page.locator('#last-name');
        this.zipCode = page.locator('#postal-code');
        this.continueBtn = page.locator('#continue');
    }

    async fillDetails(first, last, zip) {
        await this.checkoutBtn.click();
        await this.firstName.fill(first);
        await this.lastName.fill(last);
        await this.zipCode.fill(zip);
        await this.continueBtn.click();
    }
}