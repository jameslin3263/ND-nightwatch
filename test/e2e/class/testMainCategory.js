module.exports = {
  '@tags': ['class'],
  'Assert Ruten MainCategory Title': browser => {
    browser
      .url('https://play.niceday.tw/product/3167')
      .waitForElementVisible('body');
    browser.useXpath()
      .expect.element('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div/div[2]/button/div/span').text.to.equal("體驗預訂");
    browser.end()
  }
}