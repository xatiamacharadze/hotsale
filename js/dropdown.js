function DropDown(el) {
    this.voucherChoosePrice = el;
    this.placeholder = this.voucherChoosePrice.children('span');
    this.opts = this.voucherChoosePrice.find('ul.dropdown > li');
    this.val = '';
    this.id = 0;
    this.index = -1;
    this.initEvents();
}


DropDown.prototype = {
    initEvents : function() {
        var obj = this;

        obj.voucherChoosePrice.on('click', function(event){
            if (!$('.search-input').is(':focus')) {
                $(this).toggleClass('active-voucher');
            }
            return false;
            // event.stopPropagation();
        });
        obj.opts.on('click',function() {
            var opt = $(this);
            obj.val = opt.text();
            // obj.id = opt.children().first().attr('id');
            obj.index = opt.index();
            obj.placeholder.text(obj.val);
            $('#voucher').val(opt.data('voucher-price'));
            // console.log($('#voucher').val());
        });
    },
    getValue : function() {
        return this.val;
    },
    getIndex : function() {
        return this.index;
    }
};

$(document).ready(function () {
    $(function() {



        var voucherChoosePrice = new DropDown( $('#voucherChoosePrice') );

        var searchBoxCategories = new DropDown( $('#searchBoxCategories') );


        $(document).click(function() {
            // all dropdowns
            $('.wrapper-dropdown-5').removeClass('active-voucher').removeClass('active-city');

            // $('.wrapper-dropdown-5').removeClass('active-city');

        });

        // $(document).click(function() {
        //     // all dropdowns
        // });

    });
});