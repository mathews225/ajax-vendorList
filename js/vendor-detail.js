$().ready(()=>{
    
    $("#vendorLookup").click(() => {
        let id = $("#vendorId").val();
        vendorDetail(id)
        .done((vendor)=>{
                console.log(vendor);
                display(vendor);
            })
            .fail(console.error(`Failed!`));
    })
    
    
})


const display = (vendor) => {
    let row = "";
    let tbody = $("tbody");
    tbody.empty();
    
    for (property in vendor) {
        row = `<tr><th>${property}</th>`;
        row += (`<td><span class="submit" id="${property}">${vendor[property]}<span></td></tr>`);
        tbody = $("tbody").append(row);
    }
        
}