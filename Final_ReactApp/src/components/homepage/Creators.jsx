import Avatars from "./Avatars";

const Creators = () => {
  return (
    <>
      <div id="creators-section" className="the-creators-container">
        <h1 className="the-creators-title">The Creators</h1>
        <div className="avatar-content-container">
          <div className="avatar-container">
            <Avatars />
          </div>
        </div>
      </div>
    </>
  );
};

export default Creators;
