import {Builder, By, Capabilities, until, WebDriver,} from "selenium-webdriver";
import { BasePage } from "./basePage";

export class Gymshark extends BasePage {
    driver; WebDriver
    url: string = "https://www.gymshark.com/";
    mens: By = By.xpath ('//a[@href="https://www.gymshark.com/pages/shop-men"]')
    myAccount: By = By.xpath ('//a[@title="My Account"]')
    newReleases: By = By.xpath ('//a[@title="New releases"]')
    geoSeamless: By = By.xpath ('(//h3[@class="Styles__Name-sc-1opi9vf-0 eHCfav"])[3]')
    sizeL: By = By.xpath ('//button[@id="size-select_l"]')
    addToCart: By = By.xpath ('//button[@id"add-to-cart_cta_pdp"]')
    wishList: By = By.xpath ('//button[@id="wishlist_heart_pdp"]')
    emailAddress: By = By.xpath ('//input[@id="email"]')
    password: By = By.xpath ('//input[@id="password"]')
    logIn: By = By.xpath ('//button[@id="js-auth-login"]')
    search: By = By.xpath ('//button[@class="Styles__Search-sc-4mixh6-0 gBWdom"]')
    searchBar: By = By.xpath ('//input[@id="search-input"]')
    searchAccount: By = By.xpath ('//button[@class="Styles__Search-sc-4mixh6-0 gBWdom"]')
    secondAddToCart: By = By.xpath ('//button[@id="add-to-cart_cta_pdp"]')
    


    constructor(){
        super({url: "https://www.gymshark.com/"});
    }




}
