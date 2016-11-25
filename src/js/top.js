/* top.js */
globalPage.top = function () {
    // 現在のyyyymmを取得
    var nowYearMonth = globalNowYear + globalNowMonth;

    // セレクトメニューを現在のyyyymmにする
    var yearMonthOptions = $('#select-year-month').find('option');
    $.each(yearMonthOptions, function (i, option) {
        var option = $(option);
        option.prop('selected', false);
        if (nowYearMonth === option.val()) {
            option.prop('selected', true);
        }
    });

    // セレクトメニューでカレンダーを取得
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
                    globalCommon.util.renderHandlebars('#calendar-template', '#calendar', resData);
                }, function (resErr) {
                    console.log(resErr.responseText);
                    var errorCalendar = '<div class="col-sm-7 col-sm-offset-3 calendar-grid"><p class="" style="text-align: center;">データが見つかりませんでした</p></div>'
                    $('#calendar').html(errorCalendar);
                });
    });
    // 初期表示のカレンダーをレンダリング
    $('#select-year-month').trigger('change');
};
globalPage.top();
