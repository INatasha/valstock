import React from "react";

import "./DashboardPhoto.scss";

type DashboardPhotoProps = {
  url: string;
};

function DashboardPhoto({ url }: DashboardPhotoProps): JSX.Element {
  return (
    <div>
      <img src={url} alt="photo" />
    </div>
  );
}

export default DashboardPhoto;
