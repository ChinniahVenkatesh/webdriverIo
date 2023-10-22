describe('Testing espncricinfo',async ()=>
{
    it('Alert pop-up text validation', async () =>
    {

        await browser.url("https://www.espncricinfo.com");
        await browser.maximizeWindow();
        (await $("#wzrk-cancel")).waitForExist;
        (await $("#wzrk-cancel")).click();
        
        
    })
})