// $("#close-modal-button").click(function () {
//   $(".sign-up-modal").fadeOut(200);
//   // $(".sign-up-modal").fadeIn(2000);
// });

$('#s1, #s2').change(function () {
  if ($(this).is(":checked")) {
    $('.bl-submit').removeClass('disabled');
    $(".bl-submit").removeAttr('disabled');
  } else {
    $('.bl-submit').addClass('disabled');
    $(".bl-submit").prop('disabled', true);
  }
});

// (function ($) {
//   window.fnames = new Array();
//   window.ftypes = new Array();
//   fnames[0] = "EMAIL";
//   ftypes[0] = "email";
//   fnames[1] = "BNAME";
//   ftypes[1] = "text";
//   fnames[2] = "ONAME";
//   ftypes[2] = "text";
//   fnames[3] = "ADDRESS";
//   ftypes[3] = "address";
//   fnames[4] = "WEBSITE";
//   ftypes[4] = "url";
//   fnames[5] = "INSTAGRAM";
//   ftypes[5] = "text";
//   fnames[6] = "TWITTER";
//   ftypes[6] = "text";
//   fnames[7] = "LINKEDIN";
//   ftypes[7] = "text";
//   fnames[8] = "NATURE";
//   ftypes[8] = "dropdown";
//   fnames[9] = "ONATURE";
//   ftypes[9] = "text";
//   fnames[16] = "WEBSTORE";
//   ftypes[16] = "radio";
//   fnames[11] = "ESTABLISH";
//   ftypes[11] = "date";
//   fnames[12] = "MMERGE12";
//   ftypes[12] = "text";
//   fnames[13] = "MMERGE13";
//   ftypes[13] = "radio";
//   fnames[14] = "MMERGE14";
//   ftypes[14] = "text";
//   fnames[15] = "MMERGE15";
//   ftypes[15] = "text";
// })(jQuery);
// var $mcj = jQuery.noConflict(true);