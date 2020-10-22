import React from "react";
import Footer from "../component/Footer";
import ProfileSect from "./HomeItems/ProfileSect";
import Posts from "./HomeItems/Posts";
import Adverts from "./HomeItems/Adverts";
import Image from "./modals/Image";

const HomepageUI = ({ loading, error, data }) => {
  const imgModal = (image) => {
    document.getElementById("imgModal").style.display = "block";
    document.querySelector("#imgModal img").setAttribute("src", image);
    return image;
  };

  return (
    <>
      <Image image={() => imgModal()} />
      <main className="homepage">
        <div className="homepage__wrapper">
          <ProfileSect />
          <Posts imgModal={imgModal} />
          <Adverts />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomepageUI;
