describe('Testing wait mechanims',async()=>
{

    it('Testing wait until scenario',async()=>
    {
        browser.url("https://rahulshettyacademy.com/loginpagePractise/");
        browser.maximizeWindow();
        /*
        Locator for username and password field css selector
        we are using await to for sync where js is non sync, we use await when performing some function
        when using await we need to use async
        */
        await $('input#username').setValue("Chinniah");
        browser.pause(3000);
        await $('input#password').setValue("Meyyammai");
        browser.pause(3000);

        /*
        To click sigin button
        */

        await $("input[id='signInBtn']").click();
        browser.pause(5000);

        /*Implementing wait option*/

        browser.waitUntil(async () => await $("input[id='signInBtn']").getAttribute('value') === 'Sign In' ,
        {
                timeout: 5000,
                timeoutMsg: 'expected text to be different after 5s'
            
        } )

       console.log((await $('form#login-form div.alert-danger')).getText());
       


    })


})
