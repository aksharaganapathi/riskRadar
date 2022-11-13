let volArr = [30, 28.6, 39.9, 42.4, 37.4];


let lists = document.getElementsByClassName("radarData");
let rdrList = document.getElementsByClassName("rdrConstant");
for(let i = 0; i < lists.length; i++)
{
    let element = lists[i];
    let second = rdrList[i];
    switch(i)
    {
        case 0:
            element.textContent = "Implied Volatility: " + volArr[i];
            second.textContent = "Low risk";
            element.setAttribute("style", "color: orange");
            break;
        case 1:
            element.textContent = "Implied Volatility: " + volArr[i];
            second.textContent = "Low risk";
            element.setAttribute("style", "color: green");
            break;
        case 2:
            element.textContent = "Implied Volatility: " + volArr[i];
            second.textContent = "Low risk";
            element.setAttribute("style", "color: orange");
            break;
        case 3:
            element.textContent = "Implied Volatility: " + volArr[i];
            second.textContent = "Low risk";
            element.setAttribute("style", "color: red");
            break;
        case 4:
            element.textContent = "Implied Volatility: " + volArr[i];
            second.textContent = "Low risk";
            element.setAttribute("style", "color: orange");
            break;
    }
}