export function craeteSuccessPage({ serviceTitle, ...args }) {
  const successEl = document.createElement("div");
  successEl.className = "service-confirm-page";

  successEl.insertAdjacentHTML(
    "beforeend",
    `
    <div id="eservice-container" class="service-main-container">
      <div class="common-body">
          
          <div class="service-sub-container">
              <div class="service-sub-header">
                  <label>${serviceTitle}</label>
              </div>

              <div class="service-sub-body mb-24">
                  
                  <!-- section group -->                                                    
                  <div class="service-sub-body__group">
                      <div class="service-sub-body--content">
                          <div class="box-sm">
                              <div class="service-success-wrapper">
                                  <div class="card-success">
                                      <div class="card-success__media">
                                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                                          </svg>
                                      </div>
                                      <div class="card-success__body">
                                          <h3 class="card-success__title"><strong>Add Success Message title</strong></h3>
                                          <p class="card-success__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                                          tempor incididunt ut labore et dolore magna aliqua.</p>
                                      </div>
                                  </div>
                                  <div></div>
                              </div>      
                          </div>                     
                      </div>
                  </div>
                          
                  
                  <!-- section group -->                                                                                                        
                  <div class="service-sub-body__group">
                      <div class="service-sub-header">              
                          <label>Request Procedures</label>
                      </div>
                      <!-- Service group block -->
                      <div class="service-sub-body--content">

                          <ul class="v-timeline v-timeline--center">
                              <li class="completed">
                                  <p>Completed</p>
                              </li>
                              <li class="active">
                                  <p class="lead">
                                      <span style="color: #00ab67; display: block;">In Progress</span>
                                      <span>Add description about the Procedures</span>
                                  </p>
                              </li>
                              <li>
                                  <p>Next Step</p>
                              </li>                               
                          </ul>
                                                                                  
                      </div>
                  </div>

              </div>
          </div>

          <div class="formButtons" align="center">
              <!-- Add Buttons -->
              <input type="submit" value="Back to Main Page" class="round-button" />
              <input type="submit" value="Exit" class="round-button round-outline" />
          </div>

      </div>
  </div>
  `
  );

  return successEl;
}
