import "./service-styles.css";
import "./theme.css";
import "./welcome.css";
import { createHeader } from "../../stories/atom-templates/header/Header";
import { createButton } from "../../stories/atom-components/button/Button";
import NewRequest from "./images/new-request.png";
import ViewRequest from "./images/view-requests.png";

export const createWelcome = ({ servieTitle, mainBtnLbl, subBtnLbl }) => {
  const welcomeEl = document.createElement("div");
  welcomeEl.className = "service-page-welcome";
  //welcomeEl.appendChild(createHeader({ user: { name: "Absher User" } }));
  welcomeEl.insertAdjacentHTML(
    "beforeend",
    `
    <div id="eservice-container" class="service-main-container">
        <div class="common-body">
            <div class="service-messages">
                <!-- Add Validation messages -->
            </div>
            <div class="service-sub-container">
                <div class="service-sub-header">
                    <!-- Add Service main title -->
                    <label>${servieTitle}</label>
                </div>
                <div class="service-sub-body">
                    <!-- Add Service Description -->
                    <p><strong>Welcome to Absher Service.</strong></p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Nullam non nisi est sit amet. Tristique sollicitudin nibh sit amet commodo. Vitae ultricies leo integer malesuada nunc vel risus commodo viverra.</p>
                    <div class="service-sub-body__group">
                        <div class="service-sub-body--content">
                            <div class="service-sub-header"> <label>Terms and Conditions</label> </div>
                            <ul>
                                <li>Vestibulum sit amet nulla ut mauris venenatis porttitor.</li>
                                <li>Ut tempus dui sit amet dignissim sagittis.</li>
                                <li>Morbi id magna vel lectus condimentum tempus sit amet quis ex.</li>
                                <li>Quisque vitae justo sollicitudin, pretium ligula eget, imperdiet lorem.</li>
                                <li>Vestibulum laoreet tortor sed diam semper tincidunt.</li>
                            </ul>
                            <p>For more info about Absher service <a href="#">Click here</a></p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row buttons-row">
                <div class="col-sm-3">
                    <a href="#" class="service-start-card">
                        <div class="text-center"> <img class="service-card-media" src="${NewRequest}"> </div>
                        <h3 class="title-success"><span>New Request</span> </h3>
                    </a>
                </div>
                <div class="col-sm-3">
                    <a href="#" class="service-start-card">
                        <div class="text-center"> <img class="service-card-media" src="${ViewRequest}"> </div>
                        <h3 class="title-success"><span>View Previous Request</span> </h3>
                    </a>
                </div>
            </div>
        </div>
    </div>
  `
  );
  //Page actions
  //   const pageAction = document.createElement("div");
  //   pageAction.className = "page-action text-center my-4";
  //   pageAction.appendChild(createButton({ type: "primary", label: mainBtnLbl }));
  //   pageAction.appendChild(createButton({ type: "link", label: subBtnLbl }));
  //   welcomeEl.appendChild(pageAction);
  return welcomeEl;
};
