$(function () {

    $('.responsive-show-hide').on('click', function (e) {
        $(this).find('.helper-class-show-hide').toggleClass("hide-text"); //you can list several class names
        $(this).find('.remove-padding-title').toggleClass("responsive-title");
        e.preventDefault();
    });
});

$(function () {

    $('.company-page-contact-company-detailed-info').on('click', function (e) {
        $(this).find('.company-page-extend-or-not').toggleClass("extend-info"); //you can list several class names
        $(this).find('.company-page-contact-company-content').toggleClass("extend-info");
        e.preventDefault();
    });
});


var scrollHeight, clientHeight, footerHeight, companies;
var searchWrapHeight, popularDealsHeight, hotsaleOffersHeight, popularDealsMargin, hotsaleOffersMargin, hotsaleDealsCompaniesMargin;
var contentTop;


$(document).ready(function () {

    headerSize();

    changeLanguage();

    chooseYourSeat();

    technologyCategoriesChecked();

    technologyFilter();



    $('.cinema-time').click(function () {
        $('.cinema-date-choose').slideUp();

        $('.cinema-time-choose').slideToggle(300, 'linear', function () {
            if ($(this).is(':visible'))
                $(this).css('display','flex');
        });
    });

    $('.cinema-date').click(function () {
        $('.cinema-time-choose').slideUp();

        $('.cinema-date-choose').slideToggle(300, 'linear', function () {
            if ($(this).is(':visible'))
                $(this).css('display','flex');
        });
    });


    $('.about-hotSale-section').click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');


        $('html, body').animate({
            scrollTop: $(id).offset().top - 150
        }, 500);

    });


    $('.categories-search-left-category').click(function () {
        // $('.category-search-subcategory').slideDown('subcategory-hide-show');
        // $(this).find('.category-search-subcategory').slideDown('subcategory-hide-show');


        // $('.category-search-subcategory').slideUp("fast");

        if ($(this).has('.category-search-subcategory').length) {

            if ($(this).hasClass("subcategory-hide-show")) {

                $(this).removeClass("subcategory-hide-show");

                $(this).find(".category-search-subcategory").slideUp("fast");

            } else {
                $('.category-search-subcategory').removeClass("subcategory-hide-show");

                $(this).addClass("subcategory-hide-show");

                $(this).find(".category-search-subcategory").slideDown("fast");

            }
        }


        // e.preventDefault();

    });


    $('#writeUsBtn').click(function () {
        $('#responsive-overlay').addClass("active-overlay");
        $('#contactUs').addClass('contact-us-active');
        $('.hotSale-gives-you-body').addClass('pos-fixed');
    });


    $('.how-it-works-responsive-btn').click(function () {
        $('#responsive-overlay').toggleClass("active-overlay");

        $('.how-it-works-title').slideToggle('active-answer');
        $('.faq-responsive-how-it-works').slideToggle('active-answer');
        $('.how-it-works-text').slideToggle('active-answer');
        $('.hotsale-body').toggleClass('pos-fixed');

    });


    $('#responsive-overlay').click(function () {
        $('#responsive-overlay').removeClass("active-overlay");
        $('.how-it-works-title').slideUp('active-answer');
        $('.faq-responsive-how-it-works').slideUp('active-answer');
        $('.how-it-works-text').slideUp('active-answer');
        $('.hotsale-body').removeClass('pos-fixed');


        $(".hamburger").removeClass("is-active");
        $('.responsive-header-menu-burger').addClass("responsive-header-burger-main-active");
        // $('#responsive-overlay').removeClass("active-overlay");
        // $('.hotsale-body').removeClass('hotsale-body-fixed');
        $('#responsive-header-categories').removeClass('active-menu-categories-overlay');
        // $('#bodyHide').removeClass('overflow-hidden');
        $('.sign-popup').removeClass('sign-popup-active');
        $('#dd').removeClass('active-city');
        $('#searchBoxCategories').removeClass('active-city');
        $('#contactUs').removeClass('contact-us-active');
        $('.hotSale-gives-you-body').removeClass('pos-fixed');
    });


    $(".question-answer-faq").click(function (e) {

        $('.answer-faq').slideUp("fast");

        if ($(this).hasClass("active-answer")) {

            $(".minus").removeClass("faq-answer-closed");
            $(".plus").addClass("faq-answer-closed");

            $(this).removeClass("active-answer");

            $(this).find(".answer-faq").slideUp("fast");

        } else {
            $('.question-answer-faq').removeClass("active-answer");
            $(".minus").removeClass("faq-answer-closed");
            $(".plus").addClass("faq-answer-closed");

            $(this).find(".minus").addClass("faq-answer-closed");
            $(this).find(".plus").removeClass("faq-answer-closed");

            $(this).addClass("active-answer");

            $(this).find(".answer-faq").slideDown("fast");

        }


        e.preventDefault();

    });


    $('#basketBtn').click(function () {
        $('.shopping-bag-mini-info-cart').toggleClass('hide-shopping-cart');
    });


    $('#closeDealInfo').click(function () {
        $('.map-company-mini-info-pin').toggleClass('map-company-mini-info-close');
    });


    $('#closeCategories').click(function () {
        $('.map-categories-responsive').removeClass('map-categories-responsive-open');
    });


    $('#closeCities').click(function () {
        $('.map-cities-responsive').removeClass('map-cities-responsive-open');
    });


    $('#categories').click(function () {

        $('.map-company-mini-info-pin').addClass('map-company-mini-info-close');
        $('.map-cities-responsive').removeClass('map-cities-responsive-open');

        $('.map-categories-responsive').toggleClass('map-categories-responsive-open');

    });


    $('#cities').click(function () {

        $('.map-company-mini-info-pin').addClass('map-company-mini-info-close');
        $('.map-categories-responsive').removeClass('map-categories-responsive-open');

        $('.map-cities-responsive').toggleClass('map-cities-responsive-open');
    });


    $('.map-categories-search-left-title').click(function () {


        $('.map-categories-search-left-title').toggleClass('is-active');
        $('.map-categories-search-with-city').removeClass('is-active');
        $('.map-categories-search-wrap').toggleClass('is-active');

        // $('.map-categories-search-left').toggleClass('is-active');

        $(".hamburger-city").removeClass("is-active");
        $(".map-categories-search-city-wrap").removeClass("is-active");
    });


    $(".hamburger-city").click(function (e) {
        $(".hamburger-city").toggleClass("is-active");
        $(".map-categories-search-city-wrap").toggleClass("is-active");

        $('.map-categories-search-left-title').removeClass('is-active');
        $('.map-categories-search-wrap').removeClass('is-active');
        $(".hamburger").removeClass("is-active");
        $('.map-categories-search-with-city').toggleClass('is-active');

    });


    $('#searchBoxCategories').click(function () {
        $('#categoriesSearch').toggleClass('passive-header');

        $('#searchBoxCategories').toggleClass('active-city');
    });


    $('#bodyOverlay').click(function (event) {

        $('#extendedSearchBody').addClass('header-logo-second').removeClass('appear-extended-search');
        $('#extendedSearchHeader').addClass('header-logo-second').removeClass('appear-extended-search');

    });


    $('#searchBoxHeader, #searchBoxBody').click(function () {

        var headerSearch = $('#extendedSearchHeader');

        var bodySearch = $('#extendedSearchBody');


        // bodySearch.removeClass('header-logo-second').addClass('appear-extended-search');


        if ($(this).attr('id') === 'searchBoxHeader') {
            // extendSearch(headerSearch);
        } else {
            // extendSearch(bodySearch);
        }

    });


    $(function () {
        $('.jcarousel').jcarousel({

            scroll: '+=1'
            // vertical: true
        });

        $('.jcarousel-prev').jcarouselControl({
            target: '-=1'
        });

        $('.jcarousel-next').jcarouselControl({
            target: '+=1'
        });
    });


    $('.header-menu-wrap').scroll(function () {
        headerArrowHide();
    });


    $('.button').click(function () {
        $('#modal').css('display', 'block');
        $('.modal-bg').fadeIn();
    });


    $('#close').click(function () {
        $('.modal-bg').fadeOut();
        $('#modal').fadeOut();
        return false;
    });


    $('#dd').click(function () {
        $('#dd').toggleClass('active-city');
    });


    $('#headerCitySearch').click(function () {
        $('#headerCitySearch').toggleClass('active-city');
    });


    $('#voucherChoosePrice').click(function () {
        $('#voucherChoosePrice').toggleClass('active-city');
    });


    $('.user-types .type').click(function () {
        $('.user-types .type').removeClass('active-type');
        $(this).addClass('active-type');
    });


    $('.company-page-responsive-things').click(function () {
        $('.company-page-responsive-things').removeClass('active-company-info-responsive');
        $(this).addClass('active-company-info-responsive');
    });


    $('.company-page-company-info-responsive').click(function () {
        $('.responsive-company-detailed-info').addClass('responsive-company-detailed-info-active');
        $('.company-page-company-deals').addClass('responsive-disable-company-deals');
    });


    $('.active-company-info-responsive').click(function () {
        $('.responsive-company-detailed-info').removeClass('responsive-company-detailed-info-active');
        $('.company-page-company-deals').removeClass('responsive-disable-company-deals');

    });


    $('.categories-search-deals').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        arrows: true
        // accessibility: false
        // lazyLoad: 'progressive'
    });


    $('.deal-gallery-info-img').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        // dots: true,
        arrows: true
        // accessibility: false
        // lazyLoad: 'progressive'
    });


    $('#galleryPrev').click(function (e) {

        $('.slick-prev').click();
        // e.preventDefault();
    });


    $('#galleryNext').click(function (e) {

        $('.slick-next').click();

        // e.preventDefault();
    });



    $('#cinemaPrev').click(function (e) {

        $('.slick-prev').click();
        // e.preventDefault();
    });


    $('#cinemaNext').click(function (e) {

        $('.slick-next').click();

        // e.preventDefault();
    });


    $('#datePrev').click(function (e) {

        $('.slick-prev').click();
        // e.preventDefault();
    });


    $('#dateNext').click(function (e) {

        $('.slick-next').click();

        // e.preventDefault();
    });


    $('.search-categories').click(function () {
        var categories = $('.categories-search-body');
        var citySearch = $('#headerCitySearch');
        if (citySearch.hasClass('active-city')) {
            citySearch.removeClass('active-city')
        }
        if (categories.hasClass('passive-header')) {
            // console.log(categories.hasClass('passive-header'));

            categories.removeClass('passive-header');
            $('#bodyHide').addClass('overflow-hidden');
            $('#bodyOverlay').addClass('body-overlay');
        } else {
            categories.addClass('passive-header');
            $('#bodyHide').removeClass('overflow-hidden');
            $('#bodyOverlay').removeClass('body-overlay');
        }
    });


    $('#bodyOverlay, #headerCitySearch').click(function () {
        $('.categories-search-body').addClass('passive-header');
        $('#bodyHide').removeClass('overflow-hidden');
        $('#bodyOverlay').removeClass('body-overlay');
    });


    $('#prevArrow').click(function (e) {

        $('.slick-prev').click();
        // e.preventDefault();
    });


    $('#nextArrow').click(function (e) {

        $('.slick-next').click();

        // e.preventDefault();

    });


    $('#prevArrowRecommended').click(function (e) {

        $('.slick-prev').click();
        // e.preventDefault();
    });


    $('#nextArrowRecommended').click(function (e) {


        $('.slick-next').click();

        // e.preventDefault();

    });


    $(function () {
        $('.header-menu-item').click(function () {
            $('.header-menu-item').removeClass('active-header-item');
            $(this).addClass('active-header-item');
        });
    });


    $(".hamburger").click(function (e) {
        $(".hamburger").toggleClass("is-active");

        // console.log("rame");
        // Do something else, like open/close menu
        $('.responsive-header-menu-burger').toggleClass("responsive-header-burger-main-active");
        $('#responsive-overlay').toggleClass("active-overlay");
        // $('.hotsale-body').toggleClass('hotsale-body-fixed');
        // $('#bodyHide').toggleClass('overflow-hidden');
        // $('.responsive-header-menu-burger').show();

    });


    $('#responsive-header-categories-btn').click(function () {
        $('#responsive-header-categories').toggleClass('active-menu-categories-overlay');
    });


    $('#responsive-header-categories-back').click(function () {
        $('#responsive-header-categories').toggleClass('active-menu-categories-overlay');

    });


    $('#contactPopup').click(function () {
        $('#responsive-overlay').addClass("active-overlay");
        $('#contactUs').addClass('contact-us-active');
        $('.hotsale-body').addClass('pos-fixed');
    });


    $('.close-btn').click(function () {
        $('.sign-popup').removeClass('sign-popup-active');
        $('#contactUs').removeClass('contact-us-active');
        $('#responsive-overlay').removeClass("active-overlay");
        $('.hotsale-body').removeClass('pos-fixed');
        $('.hotSale-gives-you-body').removeClass('pos-fixed');

    });


});


function createSlick() {

    $(".slick-slider").not('.slick-initialized').slick({
        // autoplay: true,
        dots: true,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        responsive: [{
            breakpoint: 500,
            settings: {
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 5,
                slidesToScroll: 5
            }
        }]
    });

}

createSlick();

//Now it will not throw error, even if called multiple times.
$(window).on('resize', createSlick);


function technologyCategoriesChecked() {

    $(".isSelected").click(function () {
        $(this).siblings('.subcategories').slideToggle('fast');  // checked
        $(this).siblings('img').toggleClass('rotated');
    });

}


function technologyFilter() {
    $('.technology-filter-js').click(function () {
        $(this).siblings('.technology-category-filter').slideToggle('fast');
    });
}


function chooseYourSeat() {

    // console.log("aq modixar?");
    $('.cinema-hall-seats svg ').click(function () {
        // console.log(this);

        this.classList.toggle("chosen-seat");
        // $(this).toggleClass('chosen-seat');
    })

}


function changeLanguage() {
    $('.blue-header-lang img').click(function () {

        $('.blue-header-lang img').removeClass('active-lang');
        $(this).addClass('active-lang');

    });
}


function headerArrowHide() {
    if ($('.header-menu').css('left') === "0px") {
        $('.white-header-arrow-left').hide();
    } else {
        console.log("ra");
        $('.white-header-arrow-left').show();
    }
}


function detailPageChangeHeader() {

    scrollHeight = document.documentElement.scrollHeight;
    clientHeight = document.documentElement.clientHeight;
    footerHeight = $('.hotsale-footer').height();

    var dealMinimalInfoHeight = $('.deal-minimal-info').height();
    var detailsRightImg = $('.details-right-img').height();
    var contentTop = detailsRightImg + dealMinimalInfoHeight + 70;


    var detailCompanies = $('.deal-companies-wrapper-details-page');
    var recommendedDealsHeight = $('.hotsale-recommended-deals').outerHeight(true) + 30;


    var buyVoucherHeight = $('.buy-voucher').outerHeight(true);
    var actionTermsHeight = $('.action-terms.action-terms-jquery').height();

    var marginHeight = $('.detail-middle').outerHeight(true) - $('.detail-middle').height() - $('#burger').height();

    $(window).scroll(function () {
        var scrollTopHeight = buyVoucherHeight + $('.action-terms.action-terms-jquery').height() + marginHeight;

        if ($(window).scrollTop() > scrollTopHeight) {

            detailCompanies.addClass('fixed-companies-detail');

            console.log(scrollHeight - footerHeight - clientHeight - recommendedDealsHeight, $('.action-terms.action-terms-jquery').height());

            if ($(window).scrollTop() > scrollHeight - footerHeight - clientHeight - recommendedDealsHeight + 50) {

                // detailCompanies.css({bottom: (footerHeight - (scrollHeight - $(window).scrollTop() - clientHeight) + 40)});
                // var sum = scrollHeight - footerHeight - clientHeight - recommendedDealsHeight - 30;
                // console.log("scroll: " + $(window).scrollTop(),"sum: " + sum);
                // console.log(scrollHeight, $(window).scrollTop(), scrollHeight - $(window).scrollTop(), clientHeight, $(window).height(),  footerHeight);
                // detailCompanies.css({top: 'inherit'});
                // detailCompanies.addClass('detail-companies-top-auto');
                detailCompanies.addClass('detail-companies-fixed-bottom');

            } else {
                detailCompanies.removeClass('detail-companies-fixed-bottom');

                // detailCompanies.css({top: 180});
                // detailCompanies.addClass('detail-companies-top-long');
                // detailCompanies.css({bottom: 'auto'});
            }

        }
        else {
            // detailCompanies.css({top: 0});
            // detailCompanies.addClass('detail-companies-top-zero');
            detailCompanies.removeClass('fixed-companies-detail');
        }

        // var scrollTop = $(window).scrollTop();
        if ($(window).scrollTop() > contentTop) {
            $("#burger").addClass("passive-header");
            $(".deal-header-after-scroll").removeClass("passive-header");

            // scrollTopHeight = $('.get-scroll-top-height').height();

        } else {
            $("#burger").removeClass("passive-header");
            $(".deal-header-after-scroll").addClass("passive-header");
        }
    });

}


function fixedSideBarScroll() {

    scrollHeight = document.documentElement.scrollHeight;
    clientHeight = document.documentElement.clientHeight;
    footerHeight = $('.hotsale-footer').height();
    companies = $('.hotsale-companies');
    var popularDeals = $('.popular-deals');
    var hotSaleOffers = $('.hotsale-offers');
    // var hotSaleCompanies = $(".hotsale-companies");

    searchWrapHeight = $('.search-wrap').height();
    popularDealsHeight = popularDeals.height();
    hotsaleOffersHeight = hotSaleOffers.height();
    popularDealsMargin = popularDeals.css('margin-top');
    hotsaleOffersMargin = hotSaleOffers.css('margin-top');
    hotsaleDealsCompaniesMargin = $('.hotsale-deals-companies').css('margin-top');

    if (typeof popularDealsMargin != 'undefined' && typeof hotsaleOffersMargin != 'undefined' && typeof hotsaleDealsCompaniesMargin != 'undefined') {
        popularDealsMargin = parseInt(popularDealsMargin.substring(0, popularDealsMargin.length - 2), 10);
        hotsaleOffersMargin = parseInt(hotsaleOffersMargin.substring(0, hotsaleOffersMargin.length - 2), 10);
        hotsaleDealsCompaniesMargin = parseInt(hotsaleDealsCompaniesMargin.substr(0, hotsaleDealsCompaniesMargin.length - 2), 10);

        contentTop = searchWrapHeight + popularDealsHeight + hotsaleOffersHeight + popularDealsMargin + hotsaleOffersMargin + 2 * hotsaleDealsCompaniesMargin;

        // jQuery plug-in
        $(window).scroll(function () {
            if ($(window).scrollTop() > contentTop) {
                // console.log("client height: " + clientHeight);

                $(".white-header-wrap").addClass("passive-header");
                $(".white-header-before-wrap").removeClass("passive-header");
                companies.addClass("hotsale-companies-fixed");

                // console.log($(window).scrollTop(), scrollHeight, footerHeight, clientHeight);

                if ($(window).scrollTop() > scrollHeight - footerHeight - clientHeight - 25) {
                    $(".hotsale-companies").addClass("hotsale-companies-fixed-bottom");

                    // console.log(scrollHeight, $(window).scrollTop(), scrollHeight - $(window).scrollTop(), clientHeight, $(window).height(),  footerHeight);
                    console.log("raa");
                    companies.css({bottom: (footerHeight - (scrollHeight - $(window).scrollTop() - clientHeight) + 40)});
                } else {
                    companies.css({bottom: 'auto'});
                    $(".hotsale-companies").removeClass("hotsale-companies-fixed-bottom");

                }

            } else {
                $(".white-header-wrap").removeClass("passive-header");
                $(".white-header-before-wrap").addClass("passive-header");
                $(".hotsale-companies").removeClass("hotsale-companies-fixed");

            }
        });

    }


}


function shoppingCartFixed() {
    scrollHeight = document.documentElement.scrollHeight;
    clientHeight = document.documentElement.clientHeight;
    footerHeight = $('.hotsale-footer').height();
    var companies = $('.cart-left-part');
    var shoppingBag = $('.cart-right-part');

    companiesHeight = companies.height();
    shoppingHeight = shoppingBag.height();
    var diff = companiesHeight - shoppingHeight;

    $(window).scroll(function () {

        if ($(window).scrollTop() > diff) {

            shoppingBag.css({bottom: (footerHeight - (scrollHeight - $(window).scrollTop() - clientHeight) + 35)});

        } else {
            shoppingBag.css({bottom: 'auto'});
        }
    });
}


function fixCompanyInfo() {
    scrollHeight = document.documentElement.scrollHeight;
    clientHeight = document.documentElement.clientHeight;
    footerHeight = $('.hotsale-footer').height();
    var companyPageDeals = $('.company-page-company-deals');
    var companyPageHeaderHeight = $('.company-page-header-photo-info').height();
    var companyOffersHeight = $('.company-page-offers-order').height();
    var companyDealsHeight = companyPageDeals.height();

    var companyRightContent = $('.company-right-content');
    var contactInfo = $('.company-page-company-contact-info');

    var contact_info_width = contactInfo.width();

    var company_deals_num = companyPageDeals.children().length;



    contentTop = companyPageHeaderHeight + companyOffersHeight + companyDealsHeight;



    if (company_deals_num > 1) {

        if(company_deals_num > 7) {

            $(window).scroll(function () {

                if ($(window).scrollTop() > companyPageHeaderHeight + 40) {
                    contactInfo.addClass('fixed-contact-info');
                    companyRightContent.addClass('fixed-contact-info-wrap');

                    contactInfo.width(contact_info_width);

                    if ($(window).scrollTop() > scrollHeight - footerHeight - clientHeight) {

                        // console.log("scrollTop: ", $(window).scrollTop(), ". fixHeight", scrollHeight - footerHeight - clientHeight );

                        contactInfo.css({bottom: (footerHeight - (scrollHeight - $(window).scrollTop() - clientHeight) + 40)});

                    } else {
                        // contactInfo.css({bottom: 'auto'});
                    }

                } else {
                    contactInfo.css({bottom: 'auto'});
                    contactInfo.removeClass('fixed-contact-info');
                    companyRightContent.removeClass('fixed-contact-info-wrap');

                    // contactInfo.css({bottom: 'auto'});
                }
            });

        }
    } else {
        $('.company-page-no-deals').removeClass('company-page-no-deals-hide');
    }

}


function companyDealsHide() {

    clientHeight = document.documentElement.clientHeight;
    var headerHeight = $('#burger').outerHeight(true);
    var itemHeight = 0;
    var margin = 0;
    var item_count = 0;

    if ($('.hotsale-company').length) {
        margin = 15;
        itemHeight = $('.hotsale-company').outerHeight(true) + margin;
        item_count = $('.hotsale-company').length;
    } else {
        margin = 13;
        itemHeight = $('.deal-hotsale-company').outerHeight() + margin;
        item_count = $('.deal-hotsale-company').length;
    }

    var item_fit = Math.floor((clientHeight - headerHeight - 20) / itemHeight);
    var items = item_fit > item_count ? item_count : item_fit;
    var dealsHeight = items * itemHeight;

    console.log(dealsHeight, itemHeight, margin);
    $('.hotsale-companies').height(dealsHeight);
    $('.hotsale-companies').css({height: dealsHeight});

}


function headerSize() {

    var sum_width = 0;

    var header = $('.header-menu-wrap');



    $('.header-menu-width').children().each(function () {
        sum_width += $(this).width();
    });

    if(sum_width <= header.width() && sum_width !== 0){
        header.css({
            'right': 0,
            'width': sum_width
        });

        $('.jcarousel-prev, .jcarousel-next').addClass('display-none');
    }

}


function extendSearch(headerPosition) {

    if (headerPosition.hasClass('appear-extended-search')) {

        headerPosition.addClass('header-logo-second').removeClass('appear-extended-search');


        console.log("rame1");

        $('#bodyHide').removeClass('overflow-hidden');
        $('#bodyOverlay').removeClass('body-overlay');

    } else {
        headerPosition.removeClass('header-logo-second').addClass('appear-extended-search');


        console.log("rame2");

        $('#bodyHide').addClass('overflow-hidden');
        $('#bodyOverlay').addClass('body-overlay');
    }

}


$(window).resize(function () {

    // fixCompanyInfo();
    //
    // shoppingCartFixed();
    //
    // fixedSideBarScroll();
    //
    // detailPageChangeHeader();

    headerSize();

    companyDealsHide();

    if ($('body').outerWidth() <= 1200) {
        $('.deal-company-info').click(function () {
            window.location = 'responsive-company-info.html';
        });

        $('.deal-company-branches').click(function () {
            window.location = 'responsive-branches.html';
        });
    }
});


$(window).load(function () {

    // fixCompanyInfo();
    //
    // shoppingCartFixed();

    headerSize();

    companyDealsHide();


    if ($('body').outerWidth() <= 1200) {
        $('.deal-company-info').click(function () {
            window.location = 'responsive-company-info.html';
        });

        $('.deal-company-branches').click(function () {
            window.location = 'responsive-branches.html';
        });
    }

});

$(document).on('click', function (e) {
    if ($(e.target).closest('.search-part').length === 0) {
        $('#extendedSearchBody').removeClass('appear-extended-search');
        $('#extendedSearchHeader').removeClass('appear-extended-search');
    }

    if ($(e.target).closest('.blue-header-basket').length === 0) {
        $('.shopping-bag-mini-info-cart').addClass('hide-shopping-cart');
    }

    if ($(e.target).closest('#user-part').length === 0) {
        $('#user-menu').removeClass('active-drop-down');
    }
});