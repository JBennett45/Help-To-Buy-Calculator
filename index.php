<?php include('includes/header.php'); ?>


<div class="calc_main_Wrap">
  <form id="htb_form_calc">
    <div class="top_row_htb">
      <div class="col">
        <div class="label_wrapp">
          <label>Household Income</label>
        </div>
        <div class="input_wrapp income_input_wrap">
           <span>&pound;</span> <input type="text" id="household_income" name="household_income"/>
        </div>
      </div>

      <div class="col">
        <div class="label_wrapp">
          <label>Deposit</label>
        </div>
        <div class="input_wrapp deposit_input_wrap">
           <span>&pound;</span> <input type="text" id="user_deposit" name="user_deposit"/>
        </div>
      </div>

      <div class="col">
        <div class="label_wrapp">
          <label>Help To Buy Equity?</label>
          <span>Tick this box to use HTB equity Loan</span>
        </div>
        <div class="input_wrapp ">
           <span></span> <input type="checkbox" id="helpToBuyShow" onclick="toggleSelectorHtb()">
        </div>
      </div>


      <div id="htb_equity_amm">
        <div class="col">
          <div class="label_wrapp">
            <span>Equity loan ammount:</span>
          </div>
          <div class="input_wrapp">
            <span></span>
            <select id="htb_loan_am" name="htb_loan_am">
              <option value="5">5%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
            </select>
          </div>
        </div>
      </div>

      <div class="col">
        <div class="label_wrapp">
          <label>Property Value</label>
          <span>Click and drag marker to change property price and monthly costs</span>
        </div>
        <div class="input_wrapp">
          <div class="range-slider">
            <div class="wrapper_Ranger">
              <input id="property_value_fld" class="rs-range" type="range" value="0" min="0" max="600000">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="Htb_Results">
      <div class="results_title_wrap">
        <h4>Mortgage guide results</h4>
      </div>
      <div class="results_breakdown_wrap">
        <div class="inner_bdwp">
          <div class="label_bdwp">
            Property Ammount:
          </div>
          <div class="label_bdwp">
            &pound;	<span class="prop_ammount"></span>
          </div>
        </div>
        <div class="inner_bdwp" id="helpToBuyRsults">
          <div class="label_bdwp">
            Help To Buy Equity Loan:
          </div>
          <div class="label_bdwp">
            - &pound;	<span class="htb_allow_ammount"></span>
          </div>
        </div>
        <div class="inner_bdwp">
          <div class="label_bdwp">
            Desposit:
          </div>
          <div class="label_bdwp">
            - &pound;	<span class="dep_ammount"></span>
          </div>
        </div>
        <div class="inner_bdwp">
          <div class="label_bdwp">
            Estimated Mortgage Needed:
          </div>
          <div class="label_bdwp">
            &pound;	<span class="mortremain_ammount"></span>
          </div>
        </div>
      </div>
    </div>
    <div class="btn_wrapper_end">
      <input type="button" id="calc_submit" class="yel_sub_btn" value="Submit" />
      <a id="reset_htb_form">Reset Form</a>
    </div>
  </form>
</div>
<div class="terms_wrap">
  <p>This calculator is provided for guidance only; the owner does not offer mortgage advice. Subject to full affordability checks, you may qualify for a higher equity loan amount from the government. To read more about help to buy equity loans, <a href="https://www.helptobuy.gov.uk/equity-loan/equity-loans/">click here</a>.</p>
</div>
<?php include('includes/footer.php'); ?>
