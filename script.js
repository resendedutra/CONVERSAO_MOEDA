const conversionSelector = document.querySelector(".select-convert")
const convertedSelector = document.querySelector(".select-converted")
const converterButton = document.querySelector(".convert-button")


function valueConverter() {

    const inputValue = document.querySelector(".input-currency").value
    const conversionImage = document.querySelector(".image-flag-convert")
    const conversionParagraph = document.querySelector(".currency-convert")
    const conversionValue = document.querySelector(".convert-currency-value")
    const convertedImage = document.querySelector(".image-flag-converted")
    const convertedParagraph = document.querySelector(".currency-converted")
    const convertedValue = document.querySelector(".converted-currency-value")

    if (conversionSelector.value == "conversion-real") {

        if (convertedSelector.value == "real") {

            const realRate = 1
            const convertedResult = inputValue / realRate

            convertedImage.src = "./assets/real.svg"
            convertedParagraph.innerHTML = "Real"
            convertedValue.innerHTML = new Intl.NumberFormat("ept-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedResult)

        }
        
        if (convertedSelector.value == "dolar") {

            const dollarRate = 5
            const convertedResult = inputValue / dollarRate

            convertedImage.src = "./assets/dolar.svg"
            convertedParagraph.innerHTML = "Dólar"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "euro") {

            const euroRate = 6
            const convertedResult = inputValue / euroRate

            convertedImage.src = "./assets/euro.svg"
            convertedParagraph.innerHTML = "Euro"
            convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "libra") {

            const libraRate = 7
            const convertedResult = inputValue / libraRate

            convertedImage.src = "./assets/libra.svg"
            convertedParagraph.innerHTML = "Libra"
            convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "bitcoin") {

            const bitcoinRate = 8
            const convertedResult = inputValue / bitcoinRate

            convertedImage.src = "./assets/bitcoin.svg"
            convertedParagraph.innerHTML = "Bitcoin"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(convertedResult)

        }

        conversionImage.src = "./assets/real.svg"
        conversionParagraph.innerHTML = "Real"
        conversionValue.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }

    if (conversionSelector.value == "conversion-dolar") {

        if (convertedSelector.value == "real") {

            const realRate = 0.2
            const convertedResult = inputValue / realRate

            convertedImage.src = "./assets/real.svg"
            convertedParagraph.innerHTML = "Real"
            convertedValue.innerHTML = new Intl.NumberFormat("ept-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedResult)

        }
        
        if (convertedSelector.value == "dolar") {

            const dollarRate = 1
            const convertedResult = inputValue / dollarRate

            convertedImage.src = "./assets/dolar.svg"
            convertedParagraph.innerHTML = "Dólar"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "euro") {

            const euroRate = 2
            const convertedResult = inputValue / euroRate

            convertedImage.src = "./assets/euro.svg"
            convertedParagraph.innerHTML = "Euro"
            convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "libra") {

            const libraRate = 3
            const convertedResult = inputValue / libraRate

            convertedImage.src = "./assets/libra.svg"
            convertedParagraph.innerHTML = "Libra"
            convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "bitcoin") {

            const bitcoinRate = 4
            const convertedResult = inputValue / bitcoinRate

            convertedImage.src = "./assets/bitcoin.svg"
            convertedParagraph.innerHTML = "Bitcoin"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(convertedResult)

        }

        conversionImage.src = "./assets/dolar.svg"
        conversionParagraph.innerHTML = "Dolar"
        conversionValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }

    if (conversionSelector.value == "conversion-euro") {

        if (convertedSelector.value == "real") {

            const realRate = 0.2
            const convertedResult = inputValue / realRate

            convertedImage.src = "./assets/real.svg"
            convertedParagraph.innerHTML = "Real"
            convertedValue.innerHTML = new Intl.NumberFormat("ept-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedResult)

        }
        
        if (convertedSelector.value == "dolar") {

            const dollarRate = 2
            const convertedResult = inputValue / dollarRate

            convertedImage.src = "./assets/dolar.svg"
            convertedParagraph.innerHTML = "Dólar"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "euro") {

            const euroRate = 1
            const convertedResult = inputValue / euroRate

            convertedImage.src = "./assets/euro.svg"
            convertedParagraph.innerHTML = "Euro"
            convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "libra") {

            const libraRate = 3
            const convertedResult = inputValue / libraRate

            convertedImage.src = "./assets/libra.svg"
            convertedParagraph.innerHTML = "Libra"
            convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "bitcoin") {

            const bitcoinRate = 4
            const convertedResult = inputValue / bitcoinRate

            convertedImage.src = "./assets/bitcoin.svg"
            convertedParagraph.innerHTML = "Bitcoin"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(convertedResult)

        }

        conversionImage.src = "./assets/euro.svg"
        conversionParagraph.innerHTML = "Euro"
        conversionValue.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }

    if (conversionSelector.value == "conversion-libra") {

        if (convertedSelector.value == "real") {

            const realRate = 0.2
            const convertedResult = inputValue / realRate

            convertedImage.src = "./assets/real.svg"
            convertedParagraph.innerHTML = "Real"
            convertedValue.innerHTML = new Intl.NumberFormat("ept-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedResult)

        }
        
        if (convertedSelector.value == "dolar") {

            const dollarRate = 2
            const convertedResult = inputValue / dollarRate

            convertedImage.src = "./assets/dolar.svg"
            convertedParagraph.innerHTML = "Dólar"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "euro") {

            const euroRate = 3
            const convertedResult = inputValue / euroRate

            convertedImage.src = "./assets/euro.svg"
            convertedParagraph.innerHTML = "Euro"
            convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "libra") {

            const libraRate = 1
            const convertedResult = inputValue / libraRate

            convertedImage.src = "./assets/libra.svg"
            convertedParagraph.innerHTML = "Libra"
            convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "bitcoin") {

            const bitcoinRate = 4
            const convertedResult = inputValue / bitcoinRate

            convertedImage.src = "./assets/bitcoin.svg"
            convertedParagraph.innerHTML = "Bitcoin"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(convertedResult)

        }

        conversionImage.src = "./assets/libra.svg"
        conversionParagraph.innerHTML = "Libra"
        conversionValue.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }

    if (conversionSelector.value == "conversion-bitcoin") {

        if (convertedSelector.value == "real") {

            const realRate = 0.2
            const convertedResult = inputValue / realRate

            convertedImage.src = "./assets/real.svg"
            convertedParagraph.innerHTML = "Real"
            convertedValue.innerHTML = new Intl.NumberFormat("ept-BR", {
                style: "currency",
                currency: "BRL"
            }).format(convertedResult)

        }
        
        if (convertedSelector.value == "dolar") {

            const dollarRate = 2
            const convertedResult = inputValue / dollarRate

            convertedImage.src = "./assets/dolar.svg"
            convertedParagraph.innerHTML = "Dólar"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "euro") {

            const euroRate = 3
            const convertedResult = inputValue / euroRate

            convertedImage.src = "./assets/euro.svg"
            convertedParagraph.innerHTML = "Euro"
            convertedValue.innerHTML = new Intl.NumberFormat("de-DE", {
                style: "currency",
                currency: "EUR"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "libra") {

            const libraRate = 4
            const convertedResult = inputValue / libraRate

            convertedImage.src = "./assets/libra.svg"
            convertedParagraph.innerHTML = "Libra"
            convertedValue.innerHTML = new Intl.NumberFormat("en-GB", {
                style: "currency",
                currency: "GBP"
            }).format(convertedResult)

        }

        if (convertedSelector.value == "bitcoin") {

            const bitcoinRate = 1
            const convertedResult = inputValue / bitcoinRate

            convertedImage.src = "./assets/bitcoin.svg"
            convertedParagraph.innerHTML = "Bitcoin"
            convertedValue.innerHTML = new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "BTC"
            }).format(convertedResult)

        }

        conversionImage.src = "./assets/bitcoin.svg"
        conversionParagraph.innerHTML = "Bitcoin"
        conversionValue.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "BTC"
        }).format(inputValue)
    }

}

converterButton.addEventListener("click", valueConverter)