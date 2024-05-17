import inquirer from "inquirer";
let convert_flag = true;
while (convert_flag) {
    const Cur_sel = await inquirer.prompt([{
            type: "list",
            name: "Country",
            message: "\nSelect the Currency Converter",
            choices: ["Forign Currencies to Pakistani Rupees PKR ", "Pakistani Rupees PKR To other Forign Currencies"]
        }]);
    let pkr = 0.00;
    //let curr= 0.00;
    // Currency Exchange Rate e.g USD_PKR USD to PKR = 277.29
    let USD_PKR = 277.29; // Currency Exchange Rate e.g USD_PKR USD to PKR = 277.29
    let GBP_PKR = 347.52;
    let JPY_PKR = 1.78;
    let CNY_PKR = 38.29;
    let CAD_PKR = 202.06;
    let AUD_PKR = 181.23;
    let SAR_PKR = 73.92;
    let AED_PKR = 75.50;
    let KRW_PKR = 0.20;
    let INR_PKR = 3.32;
    let AFN_PKR = 3.84;
    let BDT_PKR = 2.54;
    let IRR_PKR = 0.0066;
    let ILS_PKR = 73.94;
    if (Cur_sel.Country == "Forign Currencies to Pakistani Rupees PKR ") {
        const currency2pkr = await inquirer.prompt([
            {
                type: "list",
                name: "Country",
                message: "\nSelect the Currency Converter",
                choices: ["One of Each Currency to Pakistani Rupees",
                    "USD_to_PKR | US Dollars to Pakistani Rupees",
                    "GBP_to_PKR | Great Britain Pound to Pakistani Rupees",
                    "JPY_to_PKR | Japanese Yen to Pakistan Rupees",
                    "CNY_to_PKR | Chinese Yuan to Pakistani Rupees",
                    "CAD_to_PKR | Canadian Dollars to Pakistani Rupees",
                    "AUD_to_PKR | Australian Dollars to Pakistani Rupees",
                    "SAR_to_PKR | Saudi Riyal to Pakistani Rupees",
                    "AED_to_PKR | United Arab Emirates Dinar to Pakistani Rupees",
                    "KRW_to_PKR | South Korean Won to Pakistani Rupees",
                    "INR_to_PKR | Indian Rupees to Pakistani Rupees",
                    "AFN_to_PKR | Afghani Afghani to Pakistani Rupees",
                    "BDT_to_PKR | Bangladeshi Takka to Pakistani Rupees",
                    "IRR_to_PKR | Iranian Rial to Pakistani Rupees",
                    "ILS_to_PKR | Israeli New Shekel to Pakistani Rupees"]
            }
        ]);
        if (currency2pkr.Country == "One of Each Currency to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to ALL LISTED \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount to convert in Pakistani Rupees  :  "
                    }
                ]);
                let curri = convert.pak * USD_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  US Dollars                   =     ${curr}/_ Pakistani Rupees`);
                curri = convert.pak * GBP_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Great Britain Pounds         =     ${curr}/_ Pakistani Rupees`);
                curri = convert.pak * JPY_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Japanese Yens                =     ${curr}/_ Pakistani Rupees `);
                curri = convert.pak * CNY_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Chinese Yuans                =     ${curr}/_ Pakistani Rupees`);
                curri = convert.pak * CAD_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Canadian Dollars             =     ${curr}/_ Pakistani Rupees  `);
                curri = convert.pak * AUD_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Australian Dollars           =     ${curr}/_ Pakistani Rupees `);
                curri = convert.pak * SAR_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Saudi Riyals                 =     ${curr}/_ Pakistani Rupees `);
                curri = convert.pak * AED_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  United Arab Emirates Dinars  =     ${curr}/_ Pakistani Rupees `);
                curri = convert.pak * KRW_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  South Korean Won             =     ${curr}/_ Pakistani Rupees  `);
                curri = convert.pak * INR_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Indian Rupees                =     ${curr}/_ Pakistani Rupees `);
                curri = convert.pak * AFN_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Afghani Afghanis             =     ${curr}/_ Pakistani Rupees `);
                curri = convert.pak * BDT_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Bangladeshi Takkas           =     ${curr}/_ Pakistani Rupees`);
                curri = convert.pak * IRR_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Iranian Rials                =     ${curr}/_ Pakistani Rupees  `);
                curri = convert.pak * ILS_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Israeli New Shekels          =     ${curr}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to US Dollars USD  ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "USD_to_PKR | US Dollars to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\nUS Dollars USD to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in USD Dollars to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * USD_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  US dollars  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another US Dollars USD to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "GBP_to_PKR | Great Britain Pound to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Great Britian Pound GBP to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Great Britain Pound to convert into Pakistani Rupees  :  "
                    }
                ]);
                let Paki = convert.curr * GBP_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Great Britain Pound  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Great Britian Pound GBP to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "JPY_to_PKR | Japanese Yen to Pakistan Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Japanese Yen JPY to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Japanese Yen to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * JPY_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Japanese Yen  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Japanese Yen JPY to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "CNY_to_PKR | Chinese Yuan to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Chinese Yuan CNY to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Chinese Yuan to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * CNY_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Chinese Yuan  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Chinese Yuan CNY to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "CAD_to_PKR | Canadian Dollars to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Canadian Dollars CAD to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Canadian Dollars to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * CAD_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Canadian Dollars  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Canadian Dollars CAD to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "AUD_to_PKR | Australian Dollars to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Australian Dollars AUD to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Australian Dollars to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * AUD_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Australian Dollars  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Australian Dollars AUD to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "SAR_to_PKR | Saudi Riyal to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Saudi Riyal SAR to Pakistani Rupees PKR  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Saudi Riyal to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * SAR_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Saudi Riyal  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Saudi Riyal SAR to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "AED_to_PKR | United Arab Emirates Dinar to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n United Arab Emirates Dinar AED to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in United Arab Emirates Dinar to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * AED_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  United Arab Emirates Dinar  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another United Arab Emirates Dinar AED to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "KRW_to_PKR | South Korean Won to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n South Korean Won KRW to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in South Korean Won to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * KRW_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  South Korean Won  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another South Korean Won KRW to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "INR_to_PKR | Indian Rupees to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Indian Rupees INR to Pakistani Rupees PKR  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Indian Rupees to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * INR_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Indian Rupees  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Indian Rupees INR to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "AFN_to_PKR | Afghani Afghani to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Afghani Afghani AFN to Pakistani Rupees PKR  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Afghani Afghani to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * AFN_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Afghani Afghani  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Afghani Afghani AFN to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "BDT_to_PKR | Bangladeshi Takka to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Bangladeshi Takka BDT to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Bangladeshi Takka to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * BDT_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Bangladeshi Takka  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Bangladeshi Takka BDT to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "IRR_to_PKR | Iranian Rial to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Iranian Rial IRR to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Iranian Rial to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * IRR_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Iranian Rial  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Iranian Rial IRR to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (currency2pkr.Country == "ILS_to_PKR | Israeli New Shekel to Pakistani Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Israeli New Shekel ILS to Pakistani Rupees PKR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "curr",
                        message: "\nEnter the Amount in Israeli New Shekel  to convert into Pakistani Rupees :  "
                    }
                ]);
                let Paki = convert.curr * ILS_PKR;
                let Pak = Paki.toLocaleString('en-US');
                console.log(`\t${convert.curr.toLocaleString('en-US')}/_  Israeli New Shekel  =  ${Pak}/_ Pakistani Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Israeli New Shekel ILS to Pakistani Rupees PKR ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
    }
    else if (Cur_sel.Country == "Pakistani Rupees PKR To other Forign Currencies") {
        const pkr2currency = await inquirer.prompt([
            {
                type: "list",
                name: "Country",
                message: "\nSelect the Currency Converter",
                choices: [
                    "**PKR_TO_ALL**",
                    "PKR_to_USD | Pakistani Rupees to US Dollars",
                    "PKR_to_GBP | Pakistani Rupees to Great Britain Pound",
                    "PKR_to_JPY | Pakistani Rupees to Japanese Yen",
                    "PKR_to_CNY | Pakistani Rupees to Chinese Yuan",
                    "PKR_to_CAD | Pakistani Rupees to Canadian Dollars",
                    "PKR_to_AUD | Pakistani Rupees to Australian Dollars",
                    "PKR_to_SAR | Pakistani Rupees to Saudi Riyal",
                    "PKR_to_AED | Pakistani Rupees to United Arab Emirates Dinar",
                    "PKR_to_KRW | Pakistani Rupees to South Korean Won",
                    "PKR_to_INR | Pakistani Rupees to Indian Rupees",
                    "PKR_to_AFN | Pakistani Rupees to Afghani Afghani",
                    "PKR_to_BDT | Pakistani Rupees to Bangladeshi Takka",
                    "PKR_to_IRR | Pakistani Rupees to Iranian Rial",
                    "PKR_to_ILS | Pakistani Rupees to Israeli New Shekel"
                ]
            }
        ]);
        if (pkr2currency.Country == "**PKR_TO_ALL**") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to ALL LISTED \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into ALL LISTED Currencies  :  "
                    }
                ]);
                let curri = convert.pak / USD_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ US Dollars `);
                curri = convert.pak / GBP_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Great Britain Pound`);
                curri = convert.pak / JPY_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Japanese Yen  `);
                curri = convert.pak / CNY_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Chinese Yuan `);
                curri = convert.pak / CAD_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Canadian Dollars `);
                curri = convert.pak / AUD_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Australian Dollars`);
                curri = convert.pak / SAR_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Saudi Riyal`);
                curri = convert.pak / AED_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ United Arab Emirates Dinar `);
                curri = convert.pak / KRW_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ South Korean Won`);
                curri = convert.pak / INR_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Indian Rupees`);
                curri = convert.pak / AFN_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Afghani Afghani`);
                curri = convert.pak / BDT_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Bangladeshi Takka`);
                curri = convert.pak / IRR_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Iranian Rial `);
                curri = convert.pak / ILS_PKR;
                curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees     =     ${curr}/_ Israeli New Shekel`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to US Dollars USD  ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_USD | Pakistani Rupees to US Dollars") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to US Dollars USD \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into USD Dollars  :  "
                    }
                ]);
                let curri = convert.pak / USD_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ US dollars `);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to US Dollars USD  ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_GBP | Pakistani Rupees to Great Britain Pound") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Pakistani Rupees PKR to  Great Britian Pound GBP  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Great Britain Pound  :  "
                    }
                ]);
                let curri = convert.pak / GBP_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Great Britain Pound`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to  Great Britian Pound GBP ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_JPY | Pakistani Rupees to Japanese Yen") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Pakistani Rupees PKR to Japanese Yen JPY  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Japanese Yen  :  "
                    }
                ]);
                let curri = convert.pak / JPY_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Japanese Yen  `);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to Japanese Yen JPY  ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_CNY | Pakistani Rupees to Chinese Yuan") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Pakistani Rupees PKR to Chinese Yuan CNY   \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Chinese Yuan :  "
                    }
                ]);
                let curri = convert.pak / CNY_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Chinese Yuan `);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to Chinese Yuan CNY   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_CAD | Pakistani Rupees to Canadian Dollars") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to  Canadian Dollars CAD  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Canadian Dollars  :  "
                    }
                ]);
                let curri = convert.pak / CAD_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Canadian Dollars `);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to  Canadian Dollars CAD   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_AUD | Pakistani Rupees to Australian Dollars") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Pakistani Rupees PKR to  Australian Dollars AUD \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Australian Dollars   :  "
                    }
                ]);
                let curri = convert.pak / AUD_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Australian Dollars`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to  Australian Dollars AUD   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_SAR | Pakistani Rupees to Saudi Riyal") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to Saudi Riyal SAR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Saudi Riyal   :  "
                    }
                ]);
                let curri = convert.pak / SAR_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Saudi Riyal`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another  Pakistani Rupees PKR to Saudi Riyal SAR   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_AED | Pakistani Rupees to United Arab Emirates Dinar") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Pakistani Rupees PKR to United Arab Emirates Dinar AED  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into United Arab Emirates Dinar   :  "
                    }
                ]);
                let curri = convert.pak / AED_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ United Arab Emirates Dinar `);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another  Pakistani Rupees PKR to United Arab Emirates Dinar AED   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_KRW | Pakistani Rupees to South Korean Won") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Pakistani Rupees PKR to South Korean Won KRW   \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into South Korean Won   :  "
                    }
                ]);
                let curri = convert.pak / KRW_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ South Korean Won`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to South Korean Won KRW   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_INR | Pakistani Rupees to Indian Rupees") {
            let conv_Flag = true;
            console.log("\n=====================================================\n Pakistani Rupees PKR to Indian Rupees INR \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Indian Rupees   :  "
                    }
                ]);
                let curri = convert.pak / INR_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Indian Rupees`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another  Pakistani Rupees PKR to Indian Rupees INR   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_AFN | Pakistani Rupees to Afghani Afghani") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to  Afghani Afghani AFN \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Afghani Afghani   :  "
                    }
                ]);
                let curri = convert.pak / AFN_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Afghani Afghani`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to  Afghani Afghani AFN   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_BDT | Pakistani Rupees to Bangladeshi Takka") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to Bangladeshi Takka BDT   \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Bangladeshi Takka   :  "
                    }
                ]);
                let curri = convert.pak / BDT_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Bangladeshi Takka`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to Bangladeshi Takka BDT   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_IRR | Pakistani Rupees to Iranian Rial") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to  Iranian Rial IRR  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Iranian Rial   :  "
                    }
                ]);
                let curri = convert.pak / IRR_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Iranian Rial `);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to  Iranian Rial IRR   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
        else if (pkr2currency.Country == "PKR_to_ILS | Pakistani Rupees to Israeli New Shekel") {
            let conv_Flag = true;
            console.log("\n=====================================================\n  Pakistani Rupees PKR to  Israeli New Shekel ILS  \n=====================================================\n");
            while (conv_Flag) {
                const convert = await inquirer.prompt([
                    {
                        type: "number",
                        name: "pak",
                        message: "\nEnter the Amount in Pakistani Rupees to convert into Israeli New Shekel    :  "
                    }
                ]);
                let curri = convert.pak / ILS_PKR;
                let curr = curri.toLocaleString('en-US');
                console.log(`\t${convert.pak.toLocaleString('en-US')}/_  Pakistani Rupees  =  ${curr}/_ Israeli New Shekel`);
                const { conv_loop } = await inquirer.prompt([
                    {
                        type: "confirm",
                        name: "conv_loop",
                        message: "\nConvert Another Pakistani Rupees PKR to  Israeli New Shekel ILS   ? ",
                        default: true
                    }
                ]);
                conv_Flag = conv_loop;
            }
        }
    }
    const { convert_loop } = await inquirer.prompt([
        {
            type: "confirm",
            name: "convert_loop",
            message: "\nConvert Another into Other Currency? ",
            default: true
        }
    ]);
    convert_flag = convert_loop;
}
