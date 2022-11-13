document.getElementById("submitBtn").addEventListener("click", function(){
    let str = document.getElementById("firstDrop").value;
    console.log(str);
    if(str == "Tech")
        window.open('tech.html', '_blank');

    if(document.getElementById("firstDrop").value == "Energy")
        window.open('energy.html', '_blank');

    if(str == "Healthcare")
        window.open('healthcare.html', '_blank');

    if(str == "Manufacturing")
        window.open('manufacturing.html', '_blank');

    if(str == "Retail")
        window.open('retail.html', '_blank');
});
