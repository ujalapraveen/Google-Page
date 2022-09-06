const puppeteer=require("puppeteer");
function main(){
    automateSearch();
}

async function automateSearch(){
    const browser =await puppeteer.launch({headless:false});
    const page=await browser.newPage();
    await page.setViewport({ width:1288,height:800})
    await page.goto("https://google.com")
    await page.type(".gLFyf.gsfi","cat")
    await page.click("input.gNO89b")
}
main()








