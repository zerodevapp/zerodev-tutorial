import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

import { NetworkErrorMessage } from "./NetworkErrorMessage";

export function ConnectWallet({ connectWallet, connectGoogle, networkError, dismiss }) {
  return (
    <div className="container">
      <div className="row justify-content-md-center">
        <div className="col-12 text-center">
          {/* Metamask network should be set to Localhost:8545. */}
          {networkError && (
            <NetworkErrorMessage
              message={networkError}
              dismiss={dismiss}
            />
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
          {
            connectGoogle &&
            <GoogleOAuthProvider clientId="225383676269-snak87ndq8a6clk2t7vjo9ti4pufmobh.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={({ credential }) => {
                  connectGoogle(credential)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />
            </GoogleOAuthProvider>
          }
        </div>
      </div>
    </div>
  );
}
