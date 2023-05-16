const axios = require('axios');
const cheerio = require('cheerio');

async function getPrice() {
    try {
        const response = await fetch("https://price.nat.gov.tw/q/zh_tw/E1", {
            "headers": {
                "accept": "application/json, text/javascript, */*; q=0.01",
                "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "x-requested-with": "XMLHttpRequest",
                "Referer": "https://price.nat.gov.tw/p/zh_tw/energy",
                "Referrer-Policy": "strict-origin-when-cross-origin"
            },
            "body": "type=fpcc",
            "method": "POST"
        });
        const price = await response.json()
        //console.log(price)
        return price;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
  getPrice : getPrice(),
};
