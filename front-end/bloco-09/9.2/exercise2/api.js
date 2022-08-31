const ul = document.querySelector('ul');
const footer = document.querySelector('footer');

// Bonus - convert from dollar to specified currency
const dollarToCurrency = async (currency) => {
    footer.innerHTML = `Current currency is the ${currency}.`;
    
    const url = 'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json'
    
    const response = await fetch(url);
    const object = await response.json();
    const { usd } = object;
    return usd[currency];
}
//

const append = (array, currency) => {
    const firstTenCoins = array.filter((coin, index) => index < 10);
    firstTenCoins.forEach((coin) => {
        const { name, symbol, priceUsd } = coin;
        const dollar = parseFloat(priceUsd) * currency;

        const li = document.createElement('li');
        li.innerHTML = `${name} (${symbol}): ${dollar.toFixed(2)}`;
        ul.appendChild(li);
    });
};

const getCoins = async () => {
    const url = 'https://api.coincap.io/v2/assets'

    const array = await fetch(url)
    const object = await array.json();
    const { data } = object
    
    const currency = await dollarToCurrency('brl');
    append(data, currency);
};

window.onload = () => getCoins();
