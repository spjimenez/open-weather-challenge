import { AppPage } from './app.po';

describe('open-weather-challenge App', () => {
  it('Should search', () => {
  browser.get('/setting');
  element(by.css('input[name=city]')).sendKeys('Santiago');
  element(by.css('select[name=metric]')).sendKeys('Kelvins');
  element(by.css('button[type=submit]')).click();
  browser.sleep(3000); 
  expect(element(by.css('input[name=city]')).isPresent()).toBeFalsy();
});
});
