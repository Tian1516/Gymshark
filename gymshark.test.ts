import {Gymshark} from "./gymsharkObjects"

const gymshark = new Gymshark

test("sign in", async () => {
    await gymshark.navigate()
    await gymshark.click(gymshark.myAccount)
    await gymshark.click(gymshark.emailAddress)
    await gymshark.setInput(gymshark.emailAddress,"sebastianr0415@gmail.com")
    await gymshark.click(gymshark.password)
    await gymshark.setInput(gymshark.password,"Gymshark1!")
    await gymshark.click(gymshark.logIn)
})

test("add to cart", async () => {
    await gymshark.navigate()
    await gymshark.click(gymshark.search)
    await gymshark.click(gymshark.searchBar)
    await gymshark.setInput(gymshark.searchBar,"geo")
    await gymshark.click(gymshark.geoSeamless)
    await gymshark.click(gymshark.sizeL)
    await gymshark.driver.sleep(2000)
    await gymshark.click(gymshark.secondAddToCart)
    await gymshark.driver.sleep(2000)
})

test("wish list", async () => {
    await gymshark.navigate()
    await gymshark.click(gymshark.myAccount)
    await gymshark.click(gymshark.emailAddress)
    await gymshark.setInput(gymshark.emailAddress,"sebastianr0415@gmail.com")
    await gymshark.click(gymshark.password)
    await gymshark.setInput(gymshark.password,"Gymshark1!")
    await gymshark.click(gymshark.logIn)
    await gymshark.driver.sleep(2000)
    await gymshark.click(gymshark.searchAccount)
    await gymshark.click(gymshark.searchBar)
    await gymshark.setInput(gymshark.searchBar,"geo")
    await gymshark.click(gymshark.geoSeamless)
    await gymshark.click(gymshark.sizeL)
    await gymshark.driver.sleep(2000)
    await gymshark.click(gymshark.wishList)
    await gymshark.driver.sleep(2000)
    await gymshark.driver.quit()
})