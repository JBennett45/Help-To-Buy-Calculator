// Init functions on submit
window.onload = function() {
  document.getElementById("calc_submit").onclick = getValues;
};
jQuery(document).ready(function($) {
  // reset form
  $("#reset_htb_form").click(function() {
    document.getElementById("htb_form_calc").reset();
    // reset errors
    $('.input_wrapp').removeClass('error_handle');
    $('.rangeslider__handle').css('left','0px');
    $('.rangeslider__handle').html('0');
    $('.rangeslider__handle').val('0');
    $('.Htb_Results').hide(300);
    $('#htb_equity_amm').hide(300);
  });
  // Slider Range Styling
  var $element = $('input[type="range"]');
  $element
    .rangeslider({
      polyfill: false,
      onInit: function() {
        var $handle = $('.rangeslider__handle', this.$range);
        updateHandle($handle[0], this.value);
      }
    })
    .on('input', function(e) {
      var $handle = $('.rangeslider__handle', e.target.nextSibling);
      updateHandle($handle[0], this.value);
    });
  function updateHandle(el, val) {
    el.textContent = '£' + thousandFormaterK(val);
  }
  var rangeSlider = document.getElementById("rs-range-line");
  var rangeBullet = document.getElementById("rs-bullet");
  function showSliderValue() {
    rangeBullet.innerHTML = rangeSlider.value;
    var bulletPosition = (rangeSlider.value /rangeSlider.max);
    rangeBullet.style.left = (bulletPosition * 578) + "px";
  }
});
