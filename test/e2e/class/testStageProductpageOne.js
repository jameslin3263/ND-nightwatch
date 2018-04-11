const PRODUCTS = {
    1: {
        canBuyafterTimeText:"2018-04-11-09:18 開賣"
    }
}
module.exports = {
    '@tags': ['stageOne'],
    'stageOne正常購物流程(未登錄)': browser => {
        browser //載入畫面
            .url('http://play.stage.niceday.tw:8200/product/1')
            .waitForElementVisible('body',1000)
            .windowMaximize()
        browser //展開簡介
            .useXpath()
            .click('//*[@id="introductionCkEditor"]/div[2]')
            .expect.element('//*[@id="introductionCkEditor"]').to.present
        browser //點擊確認付款銀行 "18"家 ，確認顯示 可分期付款銀行，關閉顯示窗口
            .useXpath()
            .click('//*[@id="__next"]/div/div/div/section[2]/div/aside/div/div[1]/div[3]/div/p[2]/span[2]')
            .pause('5000') 
            .click('/html/body/div[4]/div/div[1]/div/div/div/ul/div')
            .useCss()
            .expect.element('body > div:nth-child(9) > div > div:nth-child(1) > div > div').to.not.present
        browser //scroll到1000確認顯示Header
            .useXpath()
            .execute('scrollTo(0,1000)')
            .expect.element('//*[@id="__next"]/div/div/div/div[1]/header').to.visible
        browser //繼續scroll確認顯示stickyHeader
            .useXpath()
            .execute('scrollTo(0,2500)')
            .expect.element('//*[@id="__next"]/div/div/div/div[3]').to.visible
        browser //點擊stickyHeader的 體驗預訂button，確認calendar會出現
            .useXpath()
            .pause('5000')
            .click('//*[@id="__next"]/div/div/div/div[3]/div/div[2]/button')
            .expect.element('//*[@id="__next"]/div/div/div/section[3]/div/aside/div').to.visible
        browser //點擊項目二，確定timeRange沒有出現
            .pause('5000')
            .useXpath()
            .click('//*[@id="__next"]/div/div/div/section[3]/div/article/div[2]/div[2]')
            .useCss()
            .expect.element('div.gbmupP').to.not.visible
        browser
            .pause('5000')
            .useXpath()
            .click('//*[@id="__next"]/div/div/div/section[3]/div/article/div[2]/div[5]')
            .pause('5000')
            .useCss()
            .execute(function getStyle() {
                const getElement = document.querySelector('p.eTotNq')
                const styleContent = getComputedStyle(getElement, ':after').content
                return styleContent
            },[],function(res){
                console.log(res);
                this.assert.equal(res.value,res.value)
            })
            .expect.element('div.gbmupP').to.not.visible
        browser
            .useXpath()
            .click('//*[@id="__next"]/div/div/div/section[3]/div/article/div[2]/div[1]')
            .pause('5000')
            .click('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[3]/div[1]/div')
            .pause('5000')
            .click('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[4]/div[2]/div[2]/div/button[2]')
            .getText('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[4]/div[2]/div[1]/div[1]',function(res){
                this.expect.element('//*[@id="__next"]/div/div/div/section[3]/div/aside/div/div[5]/div[3]').text.be.equal(res.value)
            })
            // .click('//*[@id="submitBtn"]')
            // .assert.urlEquals('http://play.stage.niceday.tw:8200/purchase/contacter')
        browser
            .back()
            .session('get',function(res){
                console.log(res.value);
                
            })
        browser //截圖，關閉瀏覽器
            .saveScreenshot('./screenshots/stageProductpageOne.png')
            .end()
    }
}