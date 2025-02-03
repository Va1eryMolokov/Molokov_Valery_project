import { test, expect } from '@playwright/test';
import * as fc from 'fast-check';
import * as funcs from '../utils.js';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080');
});

test('step1', async ({ page }) => {
  const form = page.locator('form');
  const nameInput = page.locator('input#name');
  const emailInput = page.locator('input#email');
  const passwordInput = page.locator('input#password');
  const messageTextarea = page.locator('textarea#message');
  const submitButton = page.locator('button[type="submit"]');
  await expect(form).toBeVisible();
  await expect(nameInput).toBeVisible();
  await expect(emailInput).toBeVisible();
  await expect(passwordInput).toBeVisible();
  await expect(messageTextarea).toBeVisible();
  await expect(submitButton).toBeVisible();
});

test('step2', async ({ page }) => {
  const fields = [...await page.locator('input').all(), page.locator('textarea')];
  await Promise.all(fields.flatMap((field) => [expect(field).toHaveCSS('font-size', '14px'),
    expect(field).toHaveCSS('padding', '10px'),
    expect(field).toHaveCSS('width', '300px'),
    expect(field).toHaveCSS('border', '1px solid rgb(204, 204, 204)'),
    expect(field).toHaveCSS('border-radius', '4px')]));
});

test('step3', () => {
  const isValidName = funcs.isValidName || (() => {});

  expect(isValidName('Test Name')).toBeTruthy();
  expect(isValidName('TestName')).toBeFalsy();
  expect(isValidName('test Name')).toBeFalsy();

  fc.assert(
    fc.property(
      fc.string({
        minLength: 1,
        maxLength: 5,
        unit: fc.constantFrom('A', 'B', 'C', 'D', 'Y', 'Z', 'a', 'b', 'c', 'd', 'z'),
      }),
      fc.string({
        minLength: 1,
        maxLength: 5,
        unit: fc.constantFrom('A', 'B', 'C', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'v', 'w', 'x', 'y', 'z'),
      }),
      (firstWord, secondWord) => {
        const validName = `${firstWord.charAt(0).toUpperCase() + firstWord.slice(1)} ${secondWord.charAt(0).toUpperCase() + secondWord.slice(1)}`;
        return isValidName(validName) === true;
      },
    ),
  );

  fc.assert(
    fc.property(
      fc.string({ minLength: 1, maxLength: 10 }),
      (name) => {
        fc.pre(!name.includes(' '));
        return isValidName(name) === false;
      },
    ),
  );

  fc.assert(
    fc.property(
      fc.string({ minLength: 1, maxLength: 10, unit: fc.constantFrom('a', 'b', 'c') }),
      fc.string({ minLength: 1, maxLength: 10, unit: fc.constantFrom('A', 'B', 'C', 'a', 'b', 'c') }),
      (firstName, lastName) => {
        const invalidName = `${firstName} ${lastName}`;
        return isValidName(invalidName) === false;
      },
    ),
  );
});

test('step4', () => {
  const isValidPassword = funcs.isValidPassword || (() => {});
  expect(isValidPassword('qwerty123')).toBeTruthy();
  expect(isValidPassword('qwertyqwerty')).toBeFalsy();
  expect(isValidPassword('qwerty1')).toBeFalsy();

  fc.assert(
    fc.property(
      fc.string({
        minLength: 8,
        maxLength: 15,
        unit: fc.constantFrom('A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'),
      }),
      (password) => isValidPassword(password) === (password.length >= 8 && /\d/.test(password)),
    ),
  );
});
