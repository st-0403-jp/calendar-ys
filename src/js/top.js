/* top.js */
globalPage.top = function () {
    var nowYearMonth = globalNowYear + globalNowMonth;

    var yearMonthOptions = $('#select-year-month').find('option');
    $.each(yearMonthOptions, function (i, option) {
        var option = $(option);
        option.prop('selected', false);
        if (nowYearMonth === option.val()) {
            option.prop('selected', true);
        }
    });

    $('#select-year-month').on('change', function () {
        var selectYearMonth = nowYearMonth;
        $.each(yearMonthOptions, function (i, option) {
            if ($(option).prop('selected')) {
                selectYearMonth = $(option).val();
            }
        });
        var calendarApiUrl = '/api/' + selectYearMonth + '/date.json';
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
    });

    var calendarApiUrl = '/api/' + nowYearMonth + '/date.json';
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
