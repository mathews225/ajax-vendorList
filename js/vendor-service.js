const url = `http://localhost:39623/api/vendors`;

const vendorList = () => {
    return $.getJSON(url);
}

const vendorDetail = (id) => {
    return $.getJSON(`${url}/${id}`);
}

const vendorCreate = (vendor) => {
    return $.ajax({
        method: "POST",
        url: url,
        data: JSON.stringify(vendor),
        contentType: "application/json"
    });
}