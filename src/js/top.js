/* top.js */
globalPage.top = function () {
    var calendarApiUrl = '/api/' + globalNowYear + globalNowMonth + '/date.json';
    globalCommon.util.requestCalendar({
                type: 'GET',
                url: calendarApiUrl,
                contentType: 'application/json',
                dataType: 'json'
            }, function (resData) {
                //setTimeout(function () {
                    globalCommon.util.renderHandlebars('#calendar-template', '#calendar', resData);
                //}, 2000);
            }, function (resErr) {
                console.log(resErr.responseText);
            });
};
globalPage.top();
