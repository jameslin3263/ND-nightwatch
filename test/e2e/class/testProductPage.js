module.exports = {
  '@tags': ['class'],
  '正常購物流程': browser => {
    browser //載入畫面
      .url('https://play.niceday.tw/product/3167')
      .waitForElementVisible('body', 1000)
      .windowMaximize()
    browser //點擊promotionCard "亞萬"的 url確認進入亞萬頁面
      .useXpath()
      .click('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[4]/p/a')
      .pause('1000')
      .assert.urlEquals('https://play.niceday.tw/purchase_qa/asiamiles')
    browser //回上頁確定回到原來的產品頁
      .back()
      .assert.urlEquals('https://play.niceday.tw/product/3167')
    browser //點擊確認付款銀行 "18"家 ，確認顯示 可分期付款銀行，關閉顯示窗口
      .useXpath()
      .click('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div/p[2]/span')
      .useCss()
      .pause('5000')
      .click('div.ioYzoA')
      .expect.element('body > div:nth-child(8) > div > div:nth-child(1) > div > div').to.not.present
    browser //展開簡介
      .useXpath()
      .click('//*[@id="introductionCkEditor"]/div[2]/div')
      .expect.element('//*[@id="introductionCkEditor"]').to.visible
    browser //scroll到1000確定Header有顯示
      .useXpath()
      .execute('scrollTo(0,1000)')
      .expect.element('//*[@id="__next"]/div/div/div/div[1]/div[2]/div').to.visible
    browser //繼續scroll確認顯示stickyHeader
      .useXpath()
      .execute('scrollTo(0,3295.199951171875)')
      .expect.element('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div[1]').to.visible
    browser //點擊stickyHeader的 體驗預訂button，確認calendar會出現
      .useXpath()
      .click('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[2]/button')
      .expect.element('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div').to.visible
    browser //選擇其他產品項目，變換日期
      .pause('5000')
      .useCss()
      .click('div.fTPNKi')
      .useXpath()
      .assert.visible('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[1]/div[3]')
    browser //選擇日期出現timeRange
      .pause('5000')
      .useXpath()
      .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[3]/div[6]/div[7]')
      .assert.visible('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[4]/div')
    browser //點選時段後點擊一次項目button，確認項目與訂單明細內容相同，送出訂單，進入結帳頁
      .pause('5000')
      .useXpath()
      .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[4]/div')
      .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[5]/div[2]/div[2]/div/button[2]')
      .getText('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[6]/div[3]', function(result) {
        this.expect.element('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[1]/div[3]/div[1]/div[1]').text.be.equal(result.value)
      })
      .saveScreenshot('./screenshots/index2.png')
      .pause('5000')
      .click('//*[@id="submitBtn"]')
      .assert.urlEquals('https://play.niceday.tw/purchase/contacter')
    browser //關閉頁面
      .end()
    }
}
