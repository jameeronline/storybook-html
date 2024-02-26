import NewRequest from "./images/new-request.png";
import ViewRequest from "./images/view-requests.png";
import WelcomeIcon from "./images/welcome-icon.svg";

export function createWelcomePage({ servieTitle, ...args }) {
  const welcomePageEl = document.createElement("div");

  welcomePageEl.className = "service-page-form";

  welcomePageEl.insertAdjacentHTML(
    "beforeend",
    `
    <div id="eservice-container" class="service-main-container">
      <div class="common-body">
          <div class="service-sub-container welcomeMessage">
              <div class="service-sub-header">
                <!-- Add Service main title -->
                <label>${servieTitle}</label>
              </div>

              <div class="service-sub-body">
                  <p><strong>Welcome to Absher Service.</strong></p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Nullam non nisi est sit amet. Tristique sollicitudin nibh sit amet commodo. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.</p>

                  <div class="service-sub-header">
                      <label>Terms of Service</label>
                  </div>

                  <div class="service-terms-steps">
                      <ul>
                          <li>
                              <div class="service-terms__item">
                                  <div class="service-terms__media">
                                      <img src="${WelcomeIcon}" />
                                  </div>
                                  <div class="service-terms__body">
                                      <strong class="service-terms__title">Vestibulum sit amet nulla ut mauris</strong>
                                      <p class="service-terms__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit aliqua.</p>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div class="service-terms__item">
                                  <div class="service-terms__media">
                                      <img src="${WelcomeIcon}" />
                                  </div>
                                  <div class="service-terms__body">
                                      <strong class="service-terms__title">Ut tempus dui sit amet dignissim sagittis</strong>
                                      <p class="service-terms__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit aliqua.</p>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div class="service-terms__item">
                                  <div class="service-terms__media">
                                      <img src="${WelcomeIcon}" />
                                  </div>
                                  <div class="service-terms__body">
                                      <strong class="service-terms__title">Morbi id magna vel lectus condimentum</strong>
                                      <p class="service-terms__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit aliqua.</p>
                                  </div>
                              </div>
                          </li>
                          <li>
                              <div class="service-terms__item">
                                  <div class="service-terms__media">
                                      <img src="${WelcomeIcon}" />
                                  </div>
                                  <div class="service-terms__body">
                                      <strong class="service-terms__title">Vestibulum laoreet tortor sed diam semper</strong>
                                      <p class="service-terms__description">Lorem ipsum dolor sit amet, consectetur adipisicing elit aliqua.</p>
                                  </div>
                              </div>
                          </li>
                      </ul>
                  </div>
              </div>
          </div>

          <div class="service-actions">
              <a href="#" class="service-action__item">
                  <div class="service-action__media">
                      <img src="${NewRequest}" />
                  </div>
                  <h3 class="service-action__title">
                      <span>New Request</span>
                  </h3>
              </a>
              <a href="#" class="service-action__item">
                  <div class="service-action__media">
                      <img src="${ViewRequest}" />
                  </div>
                  <h3 class="service-action__title">
                      <span>View Request</span>
                  </h3>
              </a>
          </div>
      </div>
    </div>
  `
  );

  return welcomePageEl;
}
