module.exports = {
  '@tags': ['class'],
  '購物流程': browser => {
    browser //載入畫面
      .url('https://play.niceday.tw/product/3167')
      .waitForElementVisible('body')
    browser //展開簡介
      .useXpath()
      .click('//*[@id="introductionCkEditor"]/div[2]/div')
      .expect.element('//*[@id="introductionCkEditor"]').to.be.present
    browser //scroll顯示stickyHeader
      .useXpath()
      .execute('scrollTo(0,3295.199951171875)')
      .expect.element('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div[1]').to.present
      // .click('//*[@id="__next"]/div/div/div/div[2]/div[2]/div/div[2]/div[1]/div/div[2]/button')
      // .expect.element('//*[@id="__next"]/div/div/div/div[1]/div[2]/div').to.be.present
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
    browser //點擊一次項目button確認數目為1
      .useXpath()
      .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[4]/div')
      .click('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[5]/div[2]/div[2]/div/button[2]')
      //.expect.element('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[5]/div[2]/div[2]/div/div').text.to.equal('1')
      .expect.element('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[2]/div/div[6]/div[3]').text.be.equal('//*[@id="__next"]/div/div/div/div[2]/div[3]/div/div[1]/div[3]/div[1]/div[1]')
    browser //關閉頁面
      .end()
    }
}