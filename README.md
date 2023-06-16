# demo-playwright
Playing around with Playwright

## Usage

Run tests (Chromium, headless mode)

```
npx playwright test
```

Run tests in headed mode

```
HEADLESS=false npx playwright test
```

Run tests against custom url (there is a default Prod url, but a custom url allows running against dev environments)

```
BASE_URL=<your url> playwright test
```


## Playwright is cool

- tests retries - not the best pattern, but helpful in some setups
- video recording
- trace report - one of the best things about Playwright, being able to see browser state at any state, network calls, screenshots, local storage, cookies, etc. Just run `npx playwright show-trace <trace report path, usually in tests-results folder>`
- plenty reports, including custom one, but `html` report is already quite nice
- parallel tests out of the box
- browser compatibility
- run tests against different viewports (mobile, etc)