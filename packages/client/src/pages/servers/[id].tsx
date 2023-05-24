import React from "react";
import AddServer from "../../components/AddServer";
import Chat from "../../components/Chat";
import MidColContent from "../../components/MidColContent";
import Modal from "../../components/Modal";
import ServerNavigation from "../../components/ServerNavigation";

const Server = () => {
  const [ds, setds] = React.useState(false);

  const handleClose = () => {
    setds(!ds);
  };

  // Get the server id from the url
  // pass the messages from the server to the chat component

  return (
    <div className={`max-w-8xl mx-auto bg-gray-900`}>
      {ds && (
        <Modal handleClose={handleClose}>
          <AddServer />
        </Modal>
      )}
      <div className="fixed z-10 inset-0 -left-10 shadow-md right-auto px-8 overflow-y-auto">
        <ServerNavigation ds={ds} setds={setds} />
        <MidColContent />
        <Chat />
      </div>
    </div>
  );
};

export default Server;
