export function createFormPage({ servieTitle, ...args }) {
  const formPageEl = document.createElement("div");

  formPageEl.className = "service-page-form";

  formPageEl.insertAdjacentHTML(
    "beforeend",
    `
    <div id="eservice-container" class="service-main-container">
      <div class="common-body">
          <div class="service-sub-container">
              <div class="service-sub-header">
                  <label>Service Page - Form</label>
              </div>

              <div class="service-sub-body">
                  <div class="service-progressbar">
                      <ul id="progressbar">
                          <li class="active"><label>Resident Information</label></li>
                          <li class=""><label>Resident ID period</label></li>
                          <li class=""><label>Select Delivery Address</label></li>
                          <li class=""><label>Review and Confirm</label></li>
                      </ul>
                  </div>

                  <div class="service-messages">
                      <ul>
                          <li class="message-alert message-info">
                              <span>Please enter resident name in arabic</span>
                          </li>
                      </ul>
                  </div>

                  <div class="service-sub-body__group">
                      <div class="service-sub-header">
                          <label>Resident Information</label>
                      </div>

                      <div class="service-sub-body--content">
                          <div class="form-grid">
                              <div class="form-group__item">
                                  <label class="form__label">First Name</label>
                                  <input class="form__input" type="text" placeholder="ex: First name" />
                              </div>
                              <div class="form-group__item">
                                  <label class="form__label">Father Name</label>
                                  <input class="form__input" type="text" placeholder="ex: Father name" />
                              </div>
                              <div class="form-group__item">
                                  <label class="form__label">Grandfather Name</label>
                                  <input class="form__input" type="text" placeholder="ex: First name" />
                              </div>
                              <div class="form-group__item">
                                  <label class="form__label">Family Name</label>
                                  <input class="form__input" type="text" placeholder="ex: Father name" />
                              </div>
                              <div class="form-group__item">
                                  <label class="form__label">Birth Country</label>
                                  <select class="form__input">
                                      <option>Select</option>
                                      <option>Saudi Arabia</option>
                                  </select>
                              </div>
                              <div class="form-group__item">
                                  <label class="form__label">Marital Status</label>
                                  <select class="form__input">
                                      <option>Select</option>
                                      <option>Married</option>
                                  </select>
                              </div>
                              <div class="form-group__item">
                                  <label class="form__label">Place of passport issuance</label>
                                  <select class="form__input">
                                      <option>Country</option>
                                      <option>Saudi Arabia</option>
                                  </select>
                              </div>
                              <div class="form-group__item">
                                  <label class="form__label"></label>
                                  <select class="form__input">
                                      <option>City</option>
                                      <option>Riyadh</option>
                                  </select>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="formButtons" align="center">
              <!-- Add Buttons -->
              <input type="submit" value="Next" class="round-button" />
              <input type="submit" value="Back" class="round-button round-outline" />
          </div>
      </div>
  </div>
  `
  );
  return formPageEl;
}
