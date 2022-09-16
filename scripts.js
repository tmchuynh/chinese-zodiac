/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

let checkin_date, checkin_div, checkin_dp,
  checkout_date, checkout_div, checkout_dp;

// function for udpating displayed date in button
function update() {
  if (checkin_date !== undefined) {
    $('#display-checkin').html(checkin_date.toLocaleDateString());
  }
  if (checkout_date !== undefined) {
    $('#display-checkout').html(checkout_date.toLocaleDateString());
  }
}

// create checkin datepicker
checkin_div = $('.checkin-picker').datepicker({
  autoclose: false,
  beforeShowDay: function(date) {
    if (checkout_date !== undefined) {
      // disabled date selection for day after checkout date
      if (date > checkout_date) {
        return false;
      }
      // display checkout date in checkin datepicker
      if (date.getDate() === checkout_date.getDate() &&
        date.getMonth() === checkout_date.getMonth() &&
        date.getFullYear() === checkout_date.getFullYear()) {
        return {
          classes: 'is-selected'
        };
      }
    }
    // display range dates in checkin datepicker
    if (checkin_date !== undefined && checkout_date !== undefined) {
      if (date > checkin_date && date < checkout_date) {
        return {
          classes: 'is-between'
        };
      }
    }
    // display checkin date
    if (checkin_date !== undefined) {
      if (date.getDate() === checkin_date.getDate() &&
        date.getMonth() === checkin_date.getMonth() &&
        date.getFullYear() === checkin_date.getFullYear()) {
        return {
          classes: 'active'
        };
      }
    }
    return true;
  }
});

// save checkin datepicker for later
checkin_dp = checkin_div.data('datepicker');

// update datepickers on checkin date change
checkin_div.on('changeDate', (event) => {
  // save checkin date
  checkin_date = event.date;
  // update checkout datepicker so range dates are displayed
  checkout_dp.update();
  checkin_dp.update();
  update();
});

// create checkout datepicker
checkout_div = $('.checkout-picker').datepicker({
  autoclose: false,
  beforeShowDay: function(date) {
    if (checkin_date !== undefined) {
      // disabled date selection for day before checkin date
      if (date < checkin_date) {
        return false;
      }
      // display checkin date in checkout datepicker
      if (date.getDate() === checkin_date.getDate() &&
        date.getMonth() === checkin_date.getMonth() &&
        date.getFullYear() === checkin_date.getFullYear()) {
        return {
          classes: 'is-selected'
        };
      }
    }
    // display range dates in checkout datepicker
    if (checkin_date !== undefined && checkout_date !== undefined) {
      if (date > checkin_date && date < checkout_date) {
        return {
          classes: 'is-between'
        };
      }
    }
    // display checkout date
    if (checkout_date !== undefined) {
      if (date.getDate() === checkout_date.getDate() &&
        date.getMonth() === checkout_date.getMonth() &&
        date.getFullYear() === checkout_date.getFullYear()) {
        return {
          classes: 'active'
        };
      }
    }
    return true;
  }
});

// save checkout datepicker for later
checkout_dp = checkout_div.data('datepicker');

// update datepickers on checkout date change
checkout_div.on('changeDate', (event) => {
  // save checkout date
  checkout_date = event.date;
  // update checkin datepicker so range dates are displayed
  checkin_dp.update();
  checkout_dp.update();
  update();
});

  