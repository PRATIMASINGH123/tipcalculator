window.onload = () => {
    document.querySelector('#calculate').onclick = calculateTip;
}

function calculateTip()
{
    var bill = document.querySelector("#billamt").value;
    var tipPercentage = document.querySelector("#serviceQual").value;
    var persons = document.querySelector("#peopleamt").value;
    if(bill === '' || tipPercentage === 'Select' || persons === '')
    {
        alert("Please Enter Bill Amount");
        return;
    }
    if(persons === '1')
    {
        document.querySelector('#each').style.display = 'none';
    }
    else
    {
        document.querySelector('#each').style.display = 'block';
    }
    var tip=(bill*tipPercentage)/persons;
    tip=tip.toFixed(2);
    document.getElementById("total").innerHTML=tip;
}