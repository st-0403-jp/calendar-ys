/* common.js */

globalCommon.util = function () {
    var globalCommon = this;
    return {
        renderHandlebars: function (templateId, renderDomId, optionData) {
            if (templateId == null || typeof templateId !== 'string') {
                throw new Error('テンプレートがありません');
            }
            if (renderDomId == null || typeof renderDomId !== 'string') {
                throw new Error('出力先がありません');
            }
            var source   = $(templateId).html();
            var template = Handlebars.compile(source);
            $(renderDomId).html((optionData) ? template(optionData) : template);
        },
        requestCalendar: function (reqData, doneFunc, failFunc) {
            var util = this;
            var requestData = reqData || {
                type: 'GET',
                url: '',
                contentType: 'application/json',
                dataType: 'json'
            };
            $.ajax(requestData).done(function (responseData) {
                if (doneFunc != null && typeof doneFunc === 'function') {
                    doneFunc(responseData);
                } else {
                    console.log('doneFuncがありません');
                }
            }).fail(function (err, status, data) {
                if (failFunc != null && typeof failFunc === 'function') {
                    failFunc(err);
                }
            });
        }
    };
};

globalCommon.eventHandle = function () {
};

globalCommon.handlebarsHelper = function () {
    /* handlebars register helper */
    Handlebars.registerHelper('equal', function(val1, val2, option) {
        if (val1 === val2) {
            return option.fn(this);
        } else {
            return option.inverse(this);
        }
    });
};

/* 実行 */
globalCommon.util = globalCommon.util();
globalCommon.eventHandle();
globalCommon.handlebarsHelper();
