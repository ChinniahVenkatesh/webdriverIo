describe('testing the homepage of cricinfo', ()=>
{
    it("Testing the alert pop-up with waits",async ()=>
    {
        browser.url("https://www.espncricinfo.com");
        browser.maximizeWindow();
        browser.waitUntil(async ()=>
        {
          return await $("#wzrk-cancel").getText() === "Not Now"
        },{
            timeout: 20000,
            timeoutMsg: 'expected text to be different after 5s'
        })
        await $("#wzrk-cancel").click();
        browser.pause(3000);
    })
})