let id;
    
 $().ready(()=>{
    $("#vendorLookupEdit").click(() => {
       id = $("#vendorId").val();
        vendorDetail(id)
            .done((vendor)=>{
                    console.log(vendor);
                    updateInput(vendor);
                })
            .fail(console.error(`Failed!`));
    })
     //const vendorCreate = () => {}
 });

let vendor = {};
function update() {
    console.log('CLICK!')
    $(".submit").each(function() {
        let field = $(this).attr("id");
        let inputVal = (field!="id")?($(this).val()):parseInt($(this).val());
        vendor[field] = inputVal;
    });
    console.log(vendor);
    console.log(vendor.id);
    vendorUpdate(vendor, vendor.id);
};

const updateInput = (vendor) => {
    let row = "";
    let tbody = $("tbody");
    tbody.empty();  
    for (property in vendor) {
        row = `<tr><th>${property}</th>`;
        row += (`<td><input type="text" class="submit" id="${property}" value="${vendor[property]}"></td></tr>`);
        tbody = $("tbody").append(row);
    }
    $(".submit:first").prop("disabled", true);
    $("#submit").empty();
    $("#submit").append(`<button class="btn btn-secondary btn-35" type="button" id="vendorBtnEdit" onClick="update()">Submit</button>`);
    
}