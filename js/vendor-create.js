const pushData = (data) => {
   inputData.push(data);
}
   
$().ready(()=>{
    
    let vendor = {};

    $("#vendorBtn").click(function(){
        vendor.id = 0;
        $(".submit").each(function() {
            let field = $(this).attr("id");
            let inputVal = $(this).val();
            vendor[field] = inputVal;
        });
        console.log(vendor);
        vendorCreate(vendor);
    });
    

    //const vendorCreate = () => {}
    
});