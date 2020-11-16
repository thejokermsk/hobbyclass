$(document).ready(function () {
    svg4everybody({});


    $('.sidenav__menu__block-title').on('click', function() {
        $(this).parent().children('.sidenav__menu__block-items').slideToggle()
    })
    

    $('.product_cart__actions__quantity-input').each(function() {
        if ($(this).val() <= 1) {
            $(this).parent().find('[data-actions=minus]').addClass('product_cart__actions__quantity-button--disabled')
        } else {
            $(this).parent().find('[data-actions=minus]').removeClass('product_cart__actions__quantity-button--disabled')
        }
    })
    $('.product_cart__actions__quantity-input').on('change', function() {
        if ($(this).val() <= 1) {
            $(this).parent().find('[data-actions=minus]').addClass('product_cart__actions__quantity-button--disabled')
        } else {
            $(this).parent().find('[data-actions=minus]').removeClass('product_cart__actions__quantity-button--disabled')
        }
    })
    

    $('.product_cart__actions__quantity-button').on('click', function() {
        const item = $(this).parent().children('.product_cart__actions__quantity-input')

        if ($(this).attr('data-actions') === 'minus') {
            if (!$(this).hasClass('product_cart__actions__quantity-button--disabled')) {
                item.val(+item.val() - 1)
            }
        } else if ($(this).attr('data-actions') === 'plus') {
            item.val(+item.val() + 1)
        }


        if (item.val() <= 1) {
            item.parent().find('[data-actions=minus]').addClass('product_cart__actions__quantity-button--disabled')
        } else {
            item.parent().find('[data-actions=minus]').removeClass('product_cart__actions__quantity-button--disabled')
        }

        $(item).change()
    })


    $('.owl-carousel').owlCarousel({
        dots: true,
        items: 1
    });

    $('.header__bottom__nav-small-mnu').on('click' ,function() {
        $('.header__bottom__nav').slideToggle()
    })

    $('.sidenav-slide-catalog').on('click', function() {
        $('.sidenav__menu').slideToggle()
    })

    function resize() {
        if ($(window).width() < 900) {
            $('.sidenav__menu').css('display', 'none')
            $('.header__bottom__nav').css('display', 'none');
        } else {
            $('.header__bottom__nav').css('display', 'flex');
            $('.sidenav__menu').css('display', 'block')
        }
    }

    $(window).on('resize', resize)
    resize()
});


// Полифилы

// forEach IE 11
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

// closest IE 11
(function () {
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (css) {
            var node = this;
            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

// matches IE 11
(function () {
    if (!Element.prototype.matches) {
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();

//Array.form IE 11
if (!Array.from) {
    Array.from = function (object) {
        'use strict';
        return [].slice.call(object);
    };
}
