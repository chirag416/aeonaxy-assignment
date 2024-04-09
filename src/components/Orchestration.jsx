import React from 'react'
import orches from '../assets/orches.png'

const Orchestration = () => {
  return (
    <div>
        <div className="textimgdiv p-20 h-1/4 flex gap-20 items-center">
          <div className="textimgdiv w-1/2 justify-center">
            <h1 className="text-2xl font-semibold">Orchestration made simple</h1>{" "}
            <br />
            <h2 className="text-sm font-medium">
              Move on from piecemeal management of disparate tools, reporting systems, and processors. Use our flexible tools to manage the entire payment process, help increase resiliency, and reduce operational complexity. 
            </h2>
          </div>
          <div className="w-1/2">
            <img
              className="w-2/3 rounded-xl object-cover"
              src={orches}
              alt=""
            />
          </div>
        </div>
        <div className="flex four-divs gap-20 p-20">
        <div className="">
          <h2 className="text-sm font-bold">Orchestrate multiple payments partners</h2> <br />
          <h2>
            You always maintain full control of your data and configure partner access.
          </h2>
        </div>
        <div>
          <h2 className="text-sm font-bold">Easily create secure data connections</h2>{" "}
          <br />
          <h2>
            Use just a few snippets of code to securely share data with partners you choose.
          </h2>
        </div>
        <div>
          <h2 className="text-sm font-bold">Streamline reconciliation</h2>{" "}
          <br />
          <h2>
            Enable separate accounts to connect and share information.
          </h2>
        </div>
        <div>
          <h2 className="text-sm font-bold">Unlock new sales channels</h2> <br />
          <h2>
            Connect to commercial partners so you can accept payments on their websites.
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Orchestration