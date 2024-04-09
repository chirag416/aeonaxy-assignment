import React from "react";
import approvimg from "../assets/Approval-img.jpg";

const Approval = () => {
  return (
    <div>
      <div className="four-divs flex gap-20 p-20">
            <div className="">
              <h2 className="text-sm font-bold">
                Enable Multiple commerce scenarios
              </h2>{" "}
              <br />
              <h2>
                Web. Mobile. App. In Store. Get paid in the channels where you
                sell today and tomorrow.
              </h2>
            </div>
            <div>
              <h2 className="text-sm font-bold">
                Reach millions of <br /> consumers
              </h2>{" "}
              <br />
              <h2>
                Connect with your expansive network of shoppers around the world
                who love to use PayPal, Venmo and Pay Later.
              </h2>
            </div>
            <div>
              <h2 className="text-sm font-bold">
                Vault customer payment <br /> info
              </h2>{" "}
              <br />
              <h2>
                Help drive conversion and make repeat purchases simple for our
                customers with secure data storage.
              </h2>
            </div>
            <div>
              <h2 className="text-sm font-bold">
                Optimize checkout <br /> experience
              </h2>{" "}
              <br />
              <h2>
                Control the look and feel of your checkout page with drop-in UI,
                hosted fields, and customizable smart payment buttons.
              </h2>
            </div>
          </div>

      <div className="bg-slate-200">
        <div className="textimgdiv p-20 flex gap-20 items-center">
          <div className="home2img w-1/2">
            <img
              className="w-full rounded-xl h-full object-cover"
              src={approvimg}
              alt=""
            />
          </div>
          <div className="approvaldiv w-1/2 justify-center">
            <h1 className="text-2xl font-semibold">Boost Approval Rates</h1>{" "}
            <br />
            <h2 className="text-sm font-medium">
              Optimize your backend payments setup with granular , clean <br />{" "}
              messaging and the right payment rails, so you can help boost{" "}
              <br /> approval chances and capture more of your hard-earned{" "}
              <br /> revenue.{" "}
            </h2>
          </div>
        </div>
        <div>
        <div className="flex four-divs gap-20 p-20">
        <div className="">
          <h2 className="text-sm font-bold">Keep data fresh</h2> <br />
          <h2>
            Use account updater to securely makr batch and real-time updates for
            Visa,Mastercard, and Discover.
          </h2>
        </div>
        <div>
          <h2 className="text-sm font-bold">Adopt Network Tokenization</h2>{" "}
          <br />
          <h2>
            Boost security and approvals with a partner who has already
            tokenized hundreds of millions of credit cards.
          </h2>
        </div>
        <div>
          <h2 className="text-sm font-bold">Retry failed transactions</h2>{" "}
          <br />
          <h2>
            We strive to optimize approvals right from the start. But if thry
            fail, we can retry the transaction on alternative acquiring
            networks.
          </h2>
        </div>
        <div>
          <h2 className="text-sm font-bold">Optimize routing</h2> <br />
          <h2>
            Route transactions to global acquireres and networks that will yield
            the fastest, most reliable, and least expensive transaction.
          </h2>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default Approval;
