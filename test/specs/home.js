describe('Login page for user', async()=>
{

    it('Login failure check',async()=>
    {
        await browser.url('https://rahulshettyacademy.com/loginpagePractise/')
        await browser.maximizeWindow();
        console.log(await browser.getTitle());
        try
        {
        await expect(browser).toHaveTitleContaining(browser.getTitle(),"LoginPage Practise | Rahul");
        }
        catch
        {
            console.log("Error");
        }
        browser.pause(3000);
        await $('#username').setValue('rahulshetty');
        const password = $('#password');
        browser.pause(3000);
        await password.setValue("Testing");
        browser.pause(3000);

        await $('input#signInBtn').click();
        browser.pause(4000);
        console.log(await $('div.alert.alert-danger.col-md-12').getText);
    })




})