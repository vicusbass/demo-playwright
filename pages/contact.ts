import { FrameLocator, Locator, Page } from '@playwright/test'

export class ContactPage {
  readonly heading: Locator = this.page.getByRole('heading', { name: 'Get in touch.' })
  readonly contactFrame: FrameLocator = this.page.frameLocator('.hs-form-iframe')
  readonly emailInput: Locator = this.contactFrame.locator('input[name="email"]')
  readonly emailErrors: Locator = this.contactFrame.locator('.hs-email')

  constructor (readonly page: Page) {
    this.page = page
  }

  async showContactForm() {
    await this.heading.hover()
  }

  async typeEmail(email: string) {
    await this.emailInput.clear()
    await this.emailInput.type(email)
  }
  
}
