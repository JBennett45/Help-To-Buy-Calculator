// Vars
var user_income;
var user_dep;
var htb_term;
var prop_value;
var checkBox_htb_checked = document.getElementById("helpToBuyShow");

// Toggle Help to Buy
function toggleSelectorHtb() {
  var htb_show = document.getElementById("htb_equity_amm");
  if (checkBox_htb_checked.checked == true){
    jQuery(htb_show).show(300);
  } else {
    jQuery(htb_show).hide(300);
  }
}
// Add K to thousands
function thousandFormaterK(num) {
  return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(0)) + 'k' : Math.sign(num)*Math.abs(num)
}
// Add comma to high numbers
function numberSepWithCommas(n) {
  var parts = n.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return parts.join(".");
}
// Remove commas or spaces
function noToCleanNoChars(nc) {
  comss = nc.replace(/^[, ]+|[, ]+$|[, ]+/g, " ").trim();
  newnumb = comss.replace(/\s/g, '');
  return newnumb;
}
// calculate HTB percentage
function calculateHTBPayment() {
  var minus_dep = htb_term/100*prop_value;
  var finaldeposit = minus_dep.toFixed(0);
	return finaldeposit;
}
// calculate or spot errors
function getValues() {
  // reset errors
  jQuery('.input_wrapp').removeClass('error_handle');
  // set vars
  user_income = document.getElementById("household_income").value;
  user_dep = document.getElementById("user_deposit").value;
  htb_term = document.getElementById("htb_loan_am").value;
  prop_value = document.getElementById("property_value_fld").value;
  // strip characters from inputs
  user_incomeChar = noToCleanNoChars(user_income);
  userepChar = noToCleanNoChars(user_dep);
  // error checks
  if(!user_income || isNaN(user_incomeChar)) {
    jQuery('.income_input_wrap').addClass('error_handle');
  }
  else if(!user_dep || isNaN(userepChar)) {
    jQuery('.deposit_input_wrap').addClass('error_handle');
  }
  // all good calculate HTB
  else {
    subtracted_htb = calculateHTBPayment();
    jQuery('.prop_ammount').html(numberSepWithCommas(prop_value));
    // Show or hide HTB result based on check box
    if (checkBox_htb_checked.checked == true){
      jQuery('#helpToBuyRsults').show();
      jQuery('.htb_allow_ammount').html(numberSepWithCommas(subtracted_htb));
      // subtract htb and deposit
      remain_Mortgage = prop_value - subtracted_htb - noToCleanNoChars(user_dep);
    } else {
      jQuery('#helpToBuyRsults').hide();
      // subtract only deposit
      remain_Mortgage = prop_value - noToCleanNoChars(user_dep);
    }
    jQuery('.dep_ammount').html(numberSepWithCommas(userepChar));
    jQuery('.mortremain_ammount').html(numberSepWithCommas(remain_Mortgage));
    jQuery('.Htb_Results').show(300);
  }
};
