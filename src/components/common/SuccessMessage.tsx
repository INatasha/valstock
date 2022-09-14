import React from "react";

import "./SuccessMessage.scss";
import Typography from "./Typography";

const successMessage = "This is a success message!";

function SuccessMessage(): JSX.Element {
  return (
    <div className="success-message">
      <Typography weight="bold" size={32} color="light">
        {successMessage}
      </Typography>
    </div>
  );
}

export default SuccessMessage;
