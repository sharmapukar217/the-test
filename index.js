const puppeteer = require('puppeteer');

async function main() {
   const browser = await puppeteer.launch({
    headless: "new",
    executablePath: 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe', // Path to your Microsoft Edge executable
  });

  const page = await browser.newPage();
  await page.goto('https://web.whatsapp.com');

  await page.waitForTimeout(10000);
  await page.screenshot({ path: 'screenshot.png' });


  await browser.close();
}


main().catch(console.error);
