import React, { useState } from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import { NetworkErrorMessage } from "./NetworkErrorMessage";
import "./Loading.css";

export function ConnectWallet({
  connectWallet,
  connectGoogle,
  networkError,
  dismiss,
}) {
  const [connecting, setConnecting] = useState(false);
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage message={networkError} dismiss={dismiss} />
          )}
        </div>
        <div className="col-6 p-4 text-center">
          <button
            className="btn btn-warning"
            type="button"
            onClick={connectWallet}
          >
            Connect Wallet
          </button>
          {connectGoogle && (
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "120px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GoogleOAuthProvider clientId="225383676269-snak87ndq8a6clk2t7vjo9ti4pufmobh.apps.googleusercontent.com">
                <GoogleLogin
                  onSuccess={({ credential }) => {
                    setConnecting(true);
                    connectGoogle(credential);
                  }}
                  onError={() => {
                    console.log("Login Failed");
                  }}
                />
              </GoogleOAuthProvider>
              {connecting && (
                <div class="loader">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
