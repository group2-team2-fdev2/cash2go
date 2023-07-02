import React from "react";
import SmallStopCircleIcon from "../components/DashboardOverview/SmallStopCircleIcon";
import dot from "../Messages/MessageDot";
import MessageDot from "../Messages/MessageDot";
import MessageUpArrow from "./MessageUpArrow";
import Button from "../components/DashboardHeader/Button";
import MessageCheckbox from "./MessageCheckbox";
import MessageMark from "./MessageMark";
import MessageBentArrow from "./MessageBentArrow";
import Ellipse4 from "../Messages/Images/Ellipse4.png"
import MessageAlert from "./MessageAlert";
import { useState} from "react";

function New() {

  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <div className="message-new">
        <div className="Message-block__element">
          <div>
            <MessageCheckbox />
          </div>
          <div>
            <img src={Ellipse4} alt="" />
          </div>
          <div className="Message-block-info">
            <h3 className="Message-block-text">Ogbeni Mallam</h3>
            <p className="Message-paragraph">
              Hi Gbenga Stutern, I want to make enquiry of long term business
              loan. what are the things to consider for to get a good credit
              score...
            </p>
          </div>
          <div>
            <MessageMark />
          </div>

          <div>
            <MessageBentArrow />
          </div>
        </div>
        <div className="Message-new-block__element">
          <div>
            <h2 className="message-new-form">New mail</h2>
            <p className="message-new-text">sender@workmail.com</p>
          </div>
          <div className="message-new-form">
            <form className="new-form">
              <label className="new-label" htmlFor="To">
                {" "}
                To{" "}
              </label>
              <input
                className="new-input"
                type="text"
                placeholder="muktarbello@work.com"
              />
            </form>
          </div>
        </div>
        <div className="message-new-smallcontainer">
          <div className="message-new-smallcontent">
            <h2 className="message-new-small-heading">Message title Here</h2>
            <MessageDot />
          </div>
          <p className="message-new-small-paragraph">Title</p>
        </div>
        <div className="message-new-bodypart">
          <h2 className="message-new-body">Body</h2>
          <MessageUpArrow />
        </div>
        <div className="message-new-paragraph">
          <p>
            Image asset list variant image. Mask layout underline invite mask
            effect shadow. Star bullet shadow overflow shadow. Content device
            rectangle project link create invite star group.
          </p>
          <p>
            Image asset list variant image. Mask layout underline invite mask
            effect shadow. Star bullet shadow overflow shadow. Content device
            rectangle project link create invite star group. Image asset list
            variant image. Mask layout underline invite mask effect shadow. Star
            bullet shadow overflow shadow. Content device rectangle project link
            create invite star group.
          </p>
        </div>
        <div className="message-bord"></div>
        <div className="message-button">
        <Button onClick={() => setOpenModal(true)} title="send" backgroundColor="#FF6F5A" color="white" />
          {openModal && <MessageAlert closeModal={setOpenModal} />}
         </div>

      </div>
    </div>
  );
}

export default New;
