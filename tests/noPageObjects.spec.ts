import { test, expect } from '@playwright/test'
import { INVALID_EMAIL_FORMAT_ERROR, REQUIRED_FIELD_ERROR, TITLE } from './constants'

test.beforeEach(async ({page}) => {
  await page.goto('/')
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(TITLE)
})

test.describe('Contact form', () => {
  test('email validation', async ({ page }) => {
    await page.getByText('Start a conversation').click()
    await expect(page).toHaveURL(/.*contact/)

    //TODO kind of debatable UX on Hubspot lazy form, you need to hover the page
    await page.getByRole('heading', { name: 'Get in touch.' }).hover()

    await expect(page.locator('.hbspt-form')).toBeVisible()
    const contactFrame = page.frameLocator('.hs-form-iframe')

    await contactFrame.locator('input[name="email"]').type('oh no')
    await expect(contactFrame.locator('.hs-email')).toContainText(INVALID_EMAIL_FORMAT_ERROR)

    await contactFrame.locator('input[name="email"]').clear()
    await expect(contactFrame.locator('.hs-email')).toContainText(REQUIRED_FIELD_ERROR)
  })
})
