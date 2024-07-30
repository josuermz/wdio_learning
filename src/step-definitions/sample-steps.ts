import {Given,Then} from '@wdio/cucumber-framework';
import {browser} from '@wdio/globals';

Given('I open Google HomePage', async()=>{
    await browser.url('https://www.google.com');
})

Given('I open the url {string}', async(url:string)=>{
    await browser.url(url);
})

Then('The page title contains the text {string}', async(expectedPageTitle:string)=>{
    const pageTitle = await browser.getTitle();
    expect(pageTitle).toEqual(expectedPageTitle);
})