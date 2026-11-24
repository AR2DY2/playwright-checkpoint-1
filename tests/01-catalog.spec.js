import { test, expect } from '@playwright/test';
import { CatalogPage } from '../pages/CatalogPage.js';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('Задание 1', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  const appleCard = page.locator('article, .card, [data-testid="product-card"]').filter({
    has: page.getByRole('heading', { name: 'Apple', exact: true }),
  });
  const lipstickCard = page.locator('article, .card, [data-testid="product-card"]').filter({
    has: page.getByRole('heading', { name: 'Red Lipstick', exact: true }),
  });

  await expect(appleCard).toBeVisible();

  await model.search('Red Lipstick');

  await expect(lipstickCard).toBeVisible();
  await expect(appleCard).toHaveCount(0);
  // END
});

test('Задание 2', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  const appleCard = page.locator('article, .card, [data-testid="product-card"]').filter({
    has: page.getByRole('heading', { name: 'Apple', exact: true }),
  });
  const mascaraCard = page.locator('article, .card, [data-testid="product-card"]').filter({
    has: page.getByRole('heading', { name: 'Essence Mascara Lash Princess', exact: true }),
  });

  await expect(appleCard).toBeVisible();

  await model.selectBrand('Essence');

  await expect(page.getByRole('checkbox', { name: 'Essence', exact: true })).toBeChecked();
  await expect(mascaraCard).toBeVisible();
  await expect(appleCard).toHaveCount(0);
  // END
});

test('Задание 3', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.openProduct('Red Lipstick');

  await expect(page).toHaveURL(/\/products\/4$/);
  await expect(page.getByRole('heading', { name: 'Red Lipstick', exact: true })).toBeVisible();
  // END
});

test('Задание 4', async ({ page }) => {
  const model = new CatalogPage(page);
  // BEGIN
  await model.nextPage();
  // END
});

