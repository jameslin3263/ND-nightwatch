module.exports = {
    '@tags': ['stage'],
    'Stage正常購物流程': browser => {
        browser //載入畫面
            .url('http://play.stage.niceday.tw:8200/product/3221')
            .waitForElementVisible('body',1000)
            .windowMaximize()
        browser //展開簡介
            .useXpath()
            .click('//*[@id="introductionCkEditor"]/div[2]')
            .expect.element('//*[@id="introductionCkEditor"]').to.present
        browser //檢查PromotionCard是否有顯示折扣內容
            .useCss()
            .getText('div.kCJRRA',function(res){
                this.expect.element('div.jjGRGn').text.to.contain(res.value)
            })
        browser //scroll到顯示stickyHeader後檢查 '折扣中'的Tag是否顯示
            .useXpath()
            .execute('scrollTo(0,2000)')
            .isVisible('//*[@id="__next"]/div/div/div/div[3]',function(res){
                this.expect.element('//*[@id="__next"]/div/div/div/div[3]/div/div[1]/div[2]/div[2]/div[2]').to.visible
            })
        browser //點擊stickyHeader的體驗預訂Button確定自動顯示日曆
            .useXpath()
            .click('//*[@id="__next"]/div/div/div/div[3]/div/div[2]/button')
            .expect.element('//*[@id="__next"]/div/div/div/section[3]/div/aside/div').to.present
        browser 
            .useXpath()
                //  等5秒，不然流程無法進行 => 可能跟網站架構有關，正式環境不需要這個步驟
            .pause('5000')
                //點擊timeRange顯示itemList
            .click('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[3]/div/div')
                //點選一次產品項目
            .click('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[4]/div[2]/div[2]/div/button[2]')
                //確認明細容與項目內容相同
            .getText('//*[@id="__next"]/div/div/div/section[3]/div/article/div[3]/div[1]',function(result){
                this.expect.element('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[4]/div[2]').text.be.contain(result.value)
            })
                //確認優惠活動內容跟PromotionCard上顯示的優惠內容一致
            .getText('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[6]/div[1]/div[2]', function(result){
                this.expect.element('//*[@id="__next"]/div/div/div/section[2]/div/aside/div/div[1]/div[4]').text.be.equal(result.value)
            })
                //確認交易金額與折扣後金額相同
            .getText('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[7]/div/div/div[2]/div[2]', function(result){
                this.expect.element('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[6]/div[1]/div[2]').text.to.match(/[^\W_]+/,result.value)
            })
                //確認送出訂單後到達結帳頁
            .click('//*[@id="submitBtn"]')
            .assert.urlEquals('http://play.stage.niceday.tw:8200/purchase/contacter')
        browser
            .saveScreenshot('./screenshots/index2.png')
            .end()
    }
}