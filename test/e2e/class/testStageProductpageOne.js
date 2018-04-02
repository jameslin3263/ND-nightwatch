var request = require("request");
var cheerio = require("cheerio");

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
            .expect.element('//*[@id="__next"]/div/div/div/section[2]/div/article/div[4]').to.present
        browser //scroll到顯示stickyHeader後檢查 '折扣中'的Tag是否顯示
            .useXpath()
            .getLocation('//*[@id="__next"]/div/div/div/section[3]/div/aside/div',function(result){
                this.locationValue = result.value.y
            })
            .execute('scrollTo(0,2000)')
            .execute(function(client){
                //console.log('locationValue', this.locationValue)
                if(window.scrollY>2000){
                    this.expect.element('//*[@id="__next"]/div/div/div/div[3]').to.be.visible
                }else{
                    this.expect.element('//*[@id="__next"]/div/div/div/div[1]/header').to.be.visible
                }
            })
        browser //截圖，關閉瀏覽器
            .saveScreenshot('./screenshots/index2.png')
            .end()
    }
}