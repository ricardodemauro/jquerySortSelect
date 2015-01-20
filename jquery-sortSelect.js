/*! jQuery SortSelect v1.0.0 | (c) 2015 
//@ sourceMappingURL=https://github.com/ricardodemauro/jquerySortSelect
*/
(function ($) {
    $.fn.sortSelect = function (options) {
        var opts = $.extend({
            compareFunction: compare,
            firstAttribute: 'text',
            secondAttribute: 'value'
        }, options);

        return this.each(function () {
            __sortSelect(this);
        });

        function __sortSelect(selElem) {
            var tmpAry = new Array();
            for (var i = 0; i < selElem.options.length; i++) {
                tmpAry[i] = new Array();
                tmpAry[i] = {
                    first: selElem.options[i][opts.firstAttribute],
                    second: selElem.options[i][opts.secondAttribute],
                    elem: selElem.options[i]
                };
            }


            tmpAry.sort(opts.compareFunction);
            while (selElem.options.length > 0) {
                selElem.options[0] = null;
            }
            for (var i = 0; i < tmpAry.length; i++) {
                selElem.options[i] = tmpAry[i]['elem'];
            }
            return;
        }

        function compare(elem1, elem2) {
            return elem1.first === elem2.first ? 0 : (elem1.first > elem2.first ? 1 : -1);
        }
    }
}(jQuery));
