import React, { useState, useEffect } from "react";

import "./Dashboard.scss";

import Loader from "../common/Loader";
import Typography from "../common/Typography";
import DashboardImage from "./DashboardPhoto";

type PhotoApi = {
  author: string;
  download_url: string;
  height: number;
  id: string;
  url: string;
  width: number;
};

function Dashboard(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(true);
  const [photos, setPhotos] = useState<PhotoApi[]>([]);
  const hasPhotos = photos.length > 0;

  useEffect(getPhotos, []);

  function getPhotos() {
    fetch("https://picsum.photos/v2/list?limit=100")
      .then((res) => res.json())
      .then((res) => setPhotos(res))
      .finally(() => setLoading(false));
  }

  return (
    <div className="dashboard">
      {loading && <Loader />}
      {!loading &&
        hasPhotos &&
        photos.map((photo) => (
          <DashboardImage key={photo.id} url={photo.download_url} />
        ))}
      {!loading && !hasPhotos && <Typography>No photos</Typography>}
    </div>
  );
}

export default Dashboard;
