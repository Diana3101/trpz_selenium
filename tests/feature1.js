let {Then, When, Given} = require('@cucumber/cucumber');
let MainPage = require("../pageobjects/MainPage")
let {browser} = require("protractor");
let chai = require("chai")
let chaiAsPromised = require("chai-as-promised")

chai.use(chaiAsPromised);
let expect = chai.expect;
let page;

Given(/^I am on the main page$/, {timeout: 10000}, async () =>{
    page = new MainPage();
    await page.openPage("https://www.epam.com");
    await page.acceptCookies();
});

When(/^I click on Global lan button$/, {timeout: 10000}, async() => {
    await page.clickLocation();
});

When(/^I choose Russian$/, {timeout: 10000}, async () => {
    await page.chooseRussian();
});

Then(/^I see main page on Russian$/,{timeout: 10000}, async () => {
    let new_title = await page.getTitle();
    expect(new_title).to.equal("EPAM | Разработка ПО");
});

When(/^I click Services page$/,{timeout: 10000}, async () => {
    await page.clickServicesButton();
});

Then(/^Services page opens$/, {timeout: 10000},async () =>{
    let new_title = await page.getTitle();
    expect(new_title).to.equal("Services");
});

When(/^I click "How we do it" page$/,{timeout: 10000}, async () => {
    await page.clickHowWeDoItButton();
});

Then(/^"How we do it" page opens$/, {timeout: 10000},async () =>{
    let new_title = await page.getTitle();
    expect(new_title).to.equal("How We Do It | Agile Product Engineering Services | EPAM");
});

When(/^I click "Our work" page$/,{timeout: 10000}, async () => {
    await page.clickOurWorkButton();
});

Then(/^"Our work" page opens$/, {timeout: 10000},async () =>{
    let new_title = await page.getTitle();
    expect(new_title).to.equal("Explore our Work | EPAM Customer Stories, Brochures & Accelerators");
});

When(/^I click Insights page$/,{timeout: 10000}, async () => {
    await page.clickInsightsButton();
});

Then(/^Insights page opens$/, {timeout: 10000},async () =>{
    let new_title = await page.getTitle();
    expect(new_title).to.equal("Discover our Latest Insights | EPAM");
});

When(/^I click About page$/,{timeout: 10000}, async () => {
    await page.clickAboutButton();
});

Then(/^About page opens$/, {timeout: 10000},async () =>{
    let new_title = await page.getTitle();
    expect(new_title).to.equal("One of the Fastest-Growing Public Tech Companies | About EPAM");
});

When(/^I click Careers page$/,{timeout: 10000}, async () => {
    await page.clickCareersButton();
});

Then(/^Careers page opens$/, {timeout: 10000},async () =>{
    let new_title = await page.getTitle();
    expect(new_title).to.equal("Explore Professional Growth Opportunities | EPAM Careers");
});