import PriceLogo from "./images/price-logo.png";

export function createConfirmationPage({ serviceTitle, ...args }) {
  const confirmationEl = document.createElement("div");
  confirmationEl.className = "service-confirm-page";

  confirmationEl.insertAdjacentHTML(
    "beforeend",
    `
  <div id="eservice-container" class="service-main-container">
    <div class="common-body">
        <div class="service-messages">
            <!-- Add Validation messages -->
        </div>
        
        <div class="service-sub-container">
            <div class="service-sub-header">
                <label>${serviceTitle}</label>
            </div>

            <div class="service-sub-body mb-24">
                <div class="service-progressbar">
                    <ul id="progressbar">
                        <li class="completed"><label>Completed</label></li>
                        <li class="active"><label>Active</label></li>
                        <li class=""><label>Next Step</label></li>
                        <li class=""><label>Final</label></li>
                    </ul>
                </div>
                
                <!-- section group -->                                                    
                <div class="service-sub-body__group">
                    <div class="service-sub-header service-sub-header--noborder mb-0">        
                        <label>Review the entered information</label>
                    </div>
                    <div class="service-sub-body--content">
                        <div class="detailed-list-group">
                            <ul class="list-unstyled">
                                <li><label>Resident Name</label> <span>User Name</span></li>
                                <li><label>Birth Country</label> <span>KSA</span></li>
                                <li><label>Resident ID period</label> <span>One year</span></li>
                                <li><label>Translate Name</label> <span>User Name AR</span></li>
                                <li><label>Place of passport Issuance</label> <span>KSA - Riyadh</span></li>
                            </ul>
                        </div>                     
                    </div>
                </div>
                
                <!-- section group -->                                                    
                <div class="service-sub-body__group">
                    <div class="service-sub-header service-sub-header--noborder mb-0">
                        <label>Delivery Address</label>
                    </div>
                    <div class="service-sub-body--content">
                        <div class="detailed-list-group">
                            <div class="detailed-address__card">
                                <div class="detailed-address__media">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door" viewBox="0 0 16 16">
                                        <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z"/>
                                    </svg>
                                </div>
                                <div class="detailed-address__details">
                                    <strong>Home</strong> <br />
                                    Street Name, District, 1988, Riyadh <br />
                                    05XXXXXXXX
                                </div>
                            </div>
                        </div>                     
                    </div>
                </div>
                
                <!-- section group -->                                                    
                <div class="service-sub-body__group">
                    <div class="service-sub-header service-sub-header--noborder mb-0">
                        <label>Fees Information</label>
                    </div>
                    <div class="service-sub-body--content">
                        <div class="detailed-list-group">
                            <div class="pricing-details__group">
                                <div class="pricing-details__item">
                                    <label class="pricing-details__label">Delivery Charges</label>
                                    <div class="pricing-details__info">
                                        <span>100</span>
                                        <span>SAR</span>
                                    </div>
                                </div>
                                <div class="pricing-details__item">
                                    <label class="pricing-details__label">Value Added Tax %</label>
                                    <div class="pricing-details__info">
                                        <span>15</span>
                                        <span>SAR</span>
                                    </div>
                                </div>
                                <div class="pricing-details__divider"></div>
                                <div class="pricing-details__item">
                                    <div class="pricing-details__summary">
                                        <img src="${PriceLogo}" alt="pricing summary" width="48" />
                                        <label class="pricing-details__label">Total</label>
                                    </div>
                                    <div class="pricing-details__info">
                                        <span>115</span>
                                        <span>SAR</span>
                                    </div>
                                </div>
                            </div> 
                        </div>                    
                    </div>
                </div>

                <!-- ------------------------------------- -->
                <!-- ------------------------------------- -->
                <!-- ------------------------------------- -->
                <!-- TERMS COMPONENT STARTS -->
                <div class="service-sub-body__group mt-32">
                    <div class="termform">
                        <label>
                            <input type="checkbox" onclick="return checkTermsAndConditions();" class="accepttermsAndConditionsChecked" />
                            <div class="termform__wrapper">
                                <em>
                                    <span>Agree to the </span>
                                    <a href="javascript: void(0)" data-toggle="modal" data-target="#modal-terms" class="text-underlined"><span>Terms and Conditions</span></a>
                                </em>
                            </div>
                        </label>
                    </div>
                </div>

                <div class="modal default-modal-theme" tabindex="-1" id="modal-terms">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <a href="javascript:void(0)" class="close" data-dismiss="modal"><i class="icon-cancel"></i></a>
                                <h4 class="modal-title"><span>Terms and Conditions</span></h4>
                            </div>
                            <div class="modal-body">
                                <ul style="margin-left: 30px; margin-right: 30px">
                                    <li><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</span></li>
                                    <li><span>tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span></li>
                                    <li><span>quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</span></li>
                                    <li><span>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse</span></li>
                                    <li><span>cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non</span></li>
                                    <li><span>proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- TERMS COMPONENT END -->

                <!-- ------------------------------------- -->
                <!-- ------------------------------------- -->
                <!-- ------------------------------------- -->

            </div>
        </div>

        <div class="formButtons" align="center">
            <!-- Add Buttons -->
            <input type="submit" value="Next" class="round-button proceedToNext" />
            <input type="submit" value="Back" class="round-button round-outline" />
        </div>

        <script>
            $(document).ready(function(e) {
                $(".accepttermsAndConditionsChecked").attr('checked', false);
                checkTermsAndConditions();
            });

            function checkTermsAndConditions() {
                if ($(".accepttermsAndConditionsChecked").is(':checked')) {
                    $(".proceedToNext").removeAttr('disabled');
                    $(".accepttermsAndConditionsChecked").val(true);
                } else {
                    $(".proceedToNext").attr('disabled', 'disabled');
                    $(".accepttermsAndConditionsChecked").val(false);
                }
            }
        </script>

    </div>

</div>
  `
  );
  return confirmationEl;
}
