// import data from "./message.json";
import MessageCheckbox from "./MessageCheckbox";
import MessageMark from "./MessageMark";
import MessageBentArrow from "./MessageBentArrow";
import Ellipse from "../Messages/Images/Ellipse1.png"
import Ellipse2 from "../Messages/Images/Ellipse2.png"
import Ellipse3 from "../Messages/Images/Ellipse3.png"
import Ellipse4 from "../Messages/Images/Ellipse4.png"

// const { inbox } = data;
// console.log(inbox)

function Inbox() {
  return (
    <div>
      <div className="Message-block">
        <div className="Message-container">
          <h1 className="Message-container__header">Inbox</h1>
          <p className="Message-container-paragraph">sorted by Date</p>
        </div>
        <div className="Message-block__element">
          <div>
            <MessageCheckbox />
          </div>
          <div>
          <img src={Ellipse} alt="" />
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
        <div className="Message-block__element">
          <div>
            <MessageCheckbox />
          </div>
          <div>
          <img src={Ellipse2} alt="" />
          </div>
          <div className="Message-block-info">
            <h3 className="Message-block-text">Ogbeni Mallam</h3>
            <p className="Message-paragraph">
              Hi, I am Mary, risk analayst in Company AA. I would like to invite
              for a hangout tagged “Analysing the fun” held at Bamboo kitchen
              on...
            </p>
          </div>
          <div>
            <MessageMark />
          </div>

          <div>
            <MessageBentArrow />
          </div>
        </div>

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
              Hi Gbenga, I received your last message with thanks. I am working
              to enable a good credit score, hope to work with on the...
            </p>
          </div>
          <div>
            <MessageMark />
          </div>

          <div>
            <MessageBentArrow />
          </div>
        </div>

        <div className="Message-block__element">
          <div>
            <MessageCheckbox />
          </div>
          <div>
          <img src={Ellipse3} alt="" />
          </div>
          <div className="Message-block-info">
            <h3 className="Message-block-text">Ogbeni Mallam</h3>
            <p className="Message-paragraph">
              Hi Gbenga, the risk analyst course is already available at AZ
              University. Don’t forget to register on time, deadline is on
            </p>
          </div>
          <div>
            <MessageMark />
          </div>

          <div>
            <MessageBentArrow />
          </div>
        </div>

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
              Hi Gbenga, can I know why my application was rejected
            </p>
          </div>
          <div>
            <MessageMark />
          </div>

          <div>
            <MessageBentArrow />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inbox;
