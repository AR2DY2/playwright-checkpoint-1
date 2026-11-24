import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('[1] search', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.search('Red Lipstick');
  // END
});

test('[2] selectBrand', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.selectBrand('Essence');
  // END
});

test('[3] openProduct', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.openProduct('Red Lipstick');
  // END
});

test('[4] nextPage', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.nextPage();
  // END
});

