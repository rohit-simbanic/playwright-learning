import { test, expect } from "@playwright/test";

test("my first test", async ({ page }) => {
  await page.goto("https://google.com");
  await expect(page).toHaveURL(
    "https://ads.google.com/intl/en_in/home/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1"
  );
});
