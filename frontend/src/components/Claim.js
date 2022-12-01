import React from "react";

export function Claim({ claiming, claimTokens, tokenSymbol }) {
  return (
    <div>
      <h4>Claim</h4>
      <form
        onSubmit={(event) => {
          // This function just calls the transferTokens callback with the
          // form's data.
          event.preventDefault();

          const formData = new FormData(event.target);
          const amount = formData.get("amount");

          if (amount) {
            claimTokens(amount);
          }
        }}
      >
        <div className="form-group">
          <label>Amount of {tokenSymbol}</label>
          <input
            className="form-control"
            type="number"
            name="amount"
            value="100"
            required
            readOnly
          />
        </div>
        <div className="form-group">
          {claiming ? (
            <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
            </div>
          ) : (
            <input className="btn btn-primary" type="submit" value="Claim" />
          )}
        </div>
      </form>
    </div>
  );
}
