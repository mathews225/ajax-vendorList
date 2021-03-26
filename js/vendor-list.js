let allVendors = [];

$().ready(()=>{

    vendorList()
        .done((vendors)=>{
            allvendors = vendors;
            display(allvendors);
        })
        .fail();
    
        
    $.getJSON(url)
        .done((vendors) => {
            console.log(vendors);
        })

        .fail((err) => {
            console.error(err);
        })
})

const display = (vendors) => {
    let tbody = $("tbody");
    let header = "";
    tbody.empty();
    for (let vendor of vendors) {
        header = "";
        let td;
        for (prop in vendor) {
            header += `<th>${prop}</th>`;
            td += (`<td>${vendor[prop]}</td>`);
        }
        let tr = `<tr>${td}</tr>`;
        tbody = $("tbody").append(tr);
    }
    $("thead").append(header);
}