import { Locator, Page } from '@playwright/test'

export class HomePage {
  readonly contactBtn: Locator = this.page.getByText('Start a conversation')

  constructor (readonly page: Page) {
    this.page = page
  }

  async goto () {
    await this.page.goto('/')
    await this.page.waitForLoadState()
  }

  async openContactForm() {
    await this.contactBtn.click()
  }
}
