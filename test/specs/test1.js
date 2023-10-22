describe('Testing Espncricinfo homepage',async() =>
{
    it('Launch the website and test the page title',async() =>
    {
        browser.url('https://www.espncricinfo.com');
        console.log(await browser.getTitle());
        await expect(browser).toHaveTitleContaining(await browser.getTitle(),"Today's Cricket Match | Cricket Update | Cricket News | ESPNcricinfo");
        await browser.maximizeWindow();
        await browser.pause(10000);
        await $("div.wzrk-button-container button.No.thanks").click();
    });












})