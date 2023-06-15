import { test as base } from '@playwright/test'
import { HomePage } from '../pages/home'
import { ContactPage } from '../pages/contact'

type Pages = {
  homePage: HomePage
  contactPage: ContactPage
}

export const test = base.extend<Pages>({
  homePage: async ({ page }, use) => {
    await use(new HomePage(page))
  },
  contactPage: async ({ page }, use) => {
    await use(new ContactPage(page))
  },
})
