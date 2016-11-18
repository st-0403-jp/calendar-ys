/* top.js */
globalPage.top = function () {
    var requestData = {
        //async: true,
        type: 'GET',
        url: '/api/201611/date.json',
        contentType: 'application/json',
        dataType: 'json'
    };
    $.ajax(requestData).then(function (err, responseData) {
        console.log(1);
    }).fail(function (err, status, data) {
        console.log(err.responseText);
        console.log(JSON.parse(err.responseText));
    });
    setTimeout(function () {
        var source   = $("#template").html();
        var template = Handlebars.compile(source);
        $('#calendar').html(template);
    }, 2000);
};
globalPage.top();
