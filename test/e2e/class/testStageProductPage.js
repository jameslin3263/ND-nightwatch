module.exports = {
    '@tags': ['stage'],
    'Stage正常購物流程': browser => {
        browser //載入畫面
            .url('http://play.stage.niceday.tw:8200/product/3221')
            .waitForElementVisible('body',1000)
        browser //展開簡介
            .useXpath()
            .click('//*[@id="introductionCkEditor"]/div[2]')
            .expect.element('//*[@id="introductionCkEditor"]').to.present
        browser //檢查是否有顯示折扣內容
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
        browser //點擊timeRange顯示itemList
            .useXpath()
            .click('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[3]/div/div')
            .saveScreenshot('./screenshots/index2.png')

            // .expect.element('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[3]/div/div').to.be.present
            // .click('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[4]/div[2]/div[2]/div/button[2]')
            // .getText('div.bBNViN//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[5]/div[3]',function(res){
            //     this.expect.element('//*[@id="__next"]/div/div/div/section[3]/div/article/div[3]/div[1]').text.be.equal(res.value)
            // })
        browser
            .end()
    }
}