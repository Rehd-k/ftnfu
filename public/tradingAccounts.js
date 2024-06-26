console.log("ready from out side")
$(document).ready(() => {
    const url = `${window.location.origin}/clientarea/trading-space/api`
    $.ajax({
        url,
        type: 'GET',
        success: (res) => {
            displayData(res)
        },
        error: (err) => {
            console.log(err)
        }
    })
    // Function to display data in HTML
    function displayData(data) {
        // Assuming data is an array of objects
        var html = '';
        data.forEach(function (item) {
            html += `<div class="packages__inner package-0">
            <div class="packages__inner-header">
                <h3 class="main__subtitle sm text-center">${item.name}</h3>
            </div>
            <div class="packages__inner-body">
                <div class="packages__inner-price">
                    <span class="packages__inner-price__currency-symbol">$</span>
                    <strong>${item.price}</strong>
                </div>
                <div class="packages__inner-price__comment">One Time Fee</div>
                <ul>

                    <li>
                        <p class="main__text sm color-black ">Trading Capital <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">$ ${item.buyingPower}</div>
                        <p class="main__text sm color-black wide-text info-point__desc">Max position
                            size in $ (Price share X number of shares) $${item.buyingPower} active market hours,
                            $${item.buyingPower / 10} pre/after market (swing trading)</p>

                    </li>

                    <li>
                        <p class="main__text sm color-black ">Profit target <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">$ ${item.pofitTraget}</div>
                        <p class="main__text sm color-black wide-text info-point__desc">The profit
                            you need to reach to get funded
                            (2X your max loss)</p>

                    </li>

                    <li>
                        <p class="main__text sm color-black ">Max Loss <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">$ ${item.maxLoss}</div>
                        <p class="main__text sm color-black wide-text info-point__desc">The maximum
                            loss you can reach in this account
                            (3X your Daily Loss Allowance)</p>

                    </li>

                    <li>
                        <p class="main__text sm color-black ">Payout Split <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">${item.payoutSlip}</div>
                        <p class="main__text sm color-black wide-text info-point__desc">Profit share
                            when getting funded</p>

                    </li>

                    <li>
                        <p class="main__text sm color-black ">Minimum Trades <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">${item.minimumTrades}</div>
                        <p class="main__text sm color-black wide-text info-point__desc">The number
                            of trades left to meet the program goals (minimum ${item.minimumTrades} trades)</p>

                    </li>

                    <li>
                        <p class="main__text sm color-black ">Growth <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black"> ${item.growth} %</div>
                        <p class="main__text sm color-black wide-text info-point__desc">The growth
                            formula to increase your daily risk allowance. (Reach 5 consecutive
                            winning days, with a profit of 3 X daily loss and a 30% success rate to
                            get a Pump)</p>

                    </li>

                    <li>
                        <p class="main__text sm color-black ">Trading Period <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">${item.tradingPeriod} days</div>
                        <p class="main__text sm color-black wide-text info-point__desc">The number
                            of calendar days you have in order to reach the target. TThe count will
                            start from the day you join, however, if you join FTNFU on a
                            Friday/Saturday/Sunday, we will add extra days to your 45 days

                            (If you did not reach it within ${item.tradingPeriod} days, you can pay for another 45 days
                            and keep the progress you've already made)</p>

                    </li>

                    <li>
                        <p class="main__text sm color-black ">Daily Loss Allowance <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">$  ${item.dailyLossAllowance}</div>
                        <p class="main__text sm color-black wide-text info-point__desc">The max $
                            risk you can lose for each day.
                        </p>

                    </li>

                    <li class="wide-item">
                        <p class="main__text sm color-black ">Trading Booster <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">Optional</div>
                        <p class="main__text sm color-black wide-text info-point__desc">Once you
                            join Funded Trades Now For You you will get a FREE access to some of the
                            top
                            leading platforms in the industry, to gain a real edge in the market.
                            (Excluding Mini BP program)

                        </p>

                    </li>

                    <li>
                        <p class="main__text sm color-black ">Real Time Market Data <span
                                class='info-point'></span></p>
                        <div class="main__subtitle xs color-black">FREE</div>
                        <p class="main__text sm color-black wide-text info-point__desc">NASDAQ,
                            NYSE, CBOE, level 1 and 2</p>

                    </li>

                </ul>
                <a
                    href=${`${window.location.origin}/clientarea/trading-space/${item._id}`}
                    class="packages__inner-select hover-block__parent">Start Trading <span
                        class="hover-block__inner">
                        <p><strong>You can sign up for FREE to the hub and get a 14 day
                                trial.</strong></p>

                    </span>
                </a>

            </div>
        </div>`;
            // Add more properties as needed
        });


        // Display the HTML in the data-container div
        $('#tradingAccouonts').html(html);
    }
})