module.exports = {
  '@tags': ['class'],
  'Assert Category Advertisements': browser => {
    browser
      .url('https://play.niceday.tw/product/3167')
      .waitForElementVisible('body')
    browser
      .useCss()
      .click('div.fTPNKi')
      .useXpath()
      .assert.visible('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[1]/div[3]')
    browser.end();
    }
  }
