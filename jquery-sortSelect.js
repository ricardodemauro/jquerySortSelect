(function ($) {
    $.fn.sortSelect = function (options) {
        var opts = $.extend({
            compareFunction: compare
        }, options);

        return this.each(function () {
            __sortSelect(this);
        });

        function __sortSelect(selElem) {
            var tmpAry = new Array();
            for (var i = 0; i < selElem.options.length; i++) {
                tmpAry[i] = new Array();
                tmpAry[i] = {
                    text: selElem.options[i].text,
                    value: selElem.options[i].value
                };
            }


            tmpAry.sort(opts.compareFunction);
            while (selElem.options.length > 0) {
                selElem.options[0] = null;
            }
            for (var i = 0; i < tmpAry.length; i++) {
                var op = new Option(tmpAry[i][0], tmpAry[i][1]);
                selElem.options[i] = op;
            }
            return;
        }

        function compare(elem1, elem2) {
            return elem1.value === elem2.value ? 0 : (elem1.value > elem2.value ? 1 : -1);
        }
    }
}(jQuery));
