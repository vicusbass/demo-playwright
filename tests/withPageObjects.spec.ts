import { expect } from '@playwright/test'
import { test } from '../fixtures/fixtures'
import { INVALID_EMAIL_FORMAT_ERROR, REQUIRED_FIELD_ERROR, TITLE } from './constants'

test.beforeEach(async ({homePage}) => {
  await homePage.goto()
})

test('has title', async ({ homePage }) => {
  await expect(homePage.page).toHaveTitle(TITLE)
})

test.describe('Contact form', () => {
  test('email validation', async ({ homePage, contactPage }) => {
    await homePage.openContactForm()
    await expect(homePage.page).toHaveURL(/.*contact/)

    //TODO kind of debatable UX on Hubspot lazy form
    await contactPage.showContactForm()

    await contactPage.typeEmail('oh no')
    await expect(contactPage.emailErrors).toContainText(INVALID_EMAIL_FORMAT_ERROR)

    await contactPage.typeEmail('')
    await expect(contactPage.emailErrors).toContainText(REQUIRED_FIELD_ERROR)
  })
})