describe('Espncricinfo feature testing' ,async ()=>
{
    it('Testing the visual regression testing on HSB',async ()=>
    {
        await browser.url("https://www.espncricinfo.com");
        await browser.pause("3000");
        await browser.checkElement(
            await $('div.ci-hsb-carousel'),
            'Testing the HSB Espncricinfo',
            {
                fullPageScrollTimeouut: '3000',
            }
        )
    })
})