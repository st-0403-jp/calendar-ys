/* top.js */
globalPage.top = function () {
    var requestData = {
        type: 'GET',
        url: '/api/201611/date.json',
        contentType: 'application/json',
        dataType: 'json'
    };
    $.ajax(requestData).done(function (responseData) {
        console.log(responseData);
        setTimeout(function () {
            var source   = $("#calendar-template").html();
            var template = Handlebars.compile(source);
            var renderTmp = template(responseData);
            $('#calendar').html(renderTmp);
        }, 2000);
    }).fail(function (err, status, data) {
        console.log(err.responseText);
        console.log(JSON.parse(err.responseText));
    });
};
globalPage.top();
