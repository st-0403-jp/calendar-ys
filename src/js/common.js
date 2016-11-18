/* common.js */

globalCommon.util = function () {
    var globalCommon = this;
    return {
        console: function () {
            var util = this;
        }
    };
};

globalCommon.eventHandle = function () {
    console.log(this);
};

/* 実行 */
globalCommon.util = globalCommon.util();
globalCommon.eventHandle();
