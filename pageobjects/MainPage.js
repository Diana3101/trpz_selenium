let {element,by} = require("protractor");
let BasePage = require("./BasePage");
let LanguageChanger = require("./LanguageChanger");

class MainPage extends BasePage {
    constructor() {
        super();
        this.locationButton = element(by.className("location-selector__button"));
        this.languageChanger = new LanguageChanger(element(by.css(".location-selector-ui.header__control")));
        this.servicesButton = element(by.cssContainingText(".top-navigation__item-link","Services"));
        this.howWeDoItButton = element(by.cssContainingText(".top-navigation__item-link","How We Do It"));
        this.ourWorkButton = element(by.cssContainingText(".top-navigation__item-link","Our Work"));
        this.insightsButton = element(by.cssContainingText(".top-navigation__item-link","Insights"));
        this.aboutButton = element(by.cssContainingText(".top-navigation__item-link","About"));
        this.careersButton = element(by.cssContainingText(".top-navigation__item-link","Careers"));
    }

    async clickLocation(){
        await this.locationButton.click();
    }

    async chooseRussian(){
        await this.languageChanger.selectRussian();
    }

    async clickServicesButton(){
        await this.servicesButton.click();
    }

    async clickHowWeDoItButton(){
        await this.howWeDoItButton.click();
    }

    async clickOurWorkButton(){
        await this.ourWorkButton.click();
    }

    async clickInsightsButton(){
        await this.insightsButton.click();
    }

    async clickAboutButton(){
        await this.aboutButton.click();
    }

    async clickCareersButton(){
        await this.careersButton.click();
    }
}

module.exports = MainPage;
