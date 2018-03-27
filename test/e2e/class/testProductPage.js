module.exports = {
  '@tags': ['class'],
  '正常購物流程': browser => {
    browser //載入畫面
      .url('https://play.niceday.tw/product/3167')
      .waitForElementVisible('body')
    browser //展開簡介
      .useXpath()
      .click('//*[@id="introductionCkEditor"]/div[2]/div')
      .expect.element('//*[@id="introductionCkEditor"]').to.present
    // browser
    //   .useXpath()
    //   .click('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div/div[1]/div[3]/div/p[2]/span')
    //   .expect.element('/html/body/div[4]/div/div[1]/div/div').to.present
    // browser
    //   .useCss()
    //   .click('body > div:nth-child(8) > div > div:nth-child(1) > div > div > div > ul > div')
    //   .assert.hidden('body > div:nth-child(8) > div > div:nth-child(1) > div > div')
    browser //scroll顯示stickyHeader
      .useXpath()
      .execute('scrollTo(0,3295.199951171875)')
      .expect.element('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div[1]').to.present
    browser //選擇其他產品項目，變換日期
      .useCss()
      .click('div.fTPNKi')
      .useXpath()
      .assert.visible('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[1]/div[3]')
    browser //選擇日期出現timeRange
      .useXpath()
      .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[3]/div[3]/div[1]')
      .assert.visible('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[4]/div')
    // browser //點選時段出現項目
    //   .useXpath()  
    //   .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[4]/div')
    //   .expect.element('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[5]').to.be.present
    browser //點選時段後點擊一次項目button，確認項目與訂單明細內容相同，送出訂單
      .useXpath()
      .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[4]/div')
      .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[5]/div[2]/div[2]/div/button[2]')
      .getText('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[6]/div[3]', function(result) {
        this.expect.element('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[1]/div[3]/div[1]/div[1]').text.be.equal(result.value)
      })
      .click('//*[@id="submitBtn"]/div')
      .assert.urlEquals('https://play.niceday.tw/purchase/contacter')
    browser //關閉頁面
      .end()
    }
}
