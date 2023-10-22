describe('Flipkart Testing',async ()=>
{
    it('Testing the auto pop-up for fresh sigin',async ()=>
    {
        await browser.url("https://www.flipkart.com");
        await browser.maximizeWindow();
        await $('span._30XB9F').click();
        await $("input[title='Search for Products, Brands and More']").setValue("Samsung LED 32 inch TV");



    })

})
