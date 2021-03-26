$().ready(()=>{
    
    $("#vendorBtn").click(() => {
    let id = $("#vendorId").val();
    vendorDetail(id)
        .done((vendor)=>{
                console.log(vendor);
                display(vendor);
            })
    })
    .fail(console.error(`Failed!`));
    
})





const display = (vendor) => {
    let row = "";
    let tbody = $("tbody");
    tbody.empty();
    
    for (prop in vendor) {
        row = `<tr><th>${prop}</th>`;
        row += (`<td>${vendor[prop]}</td></tr>`);
    }
    
        tbody = $("tbody").append(row);
}