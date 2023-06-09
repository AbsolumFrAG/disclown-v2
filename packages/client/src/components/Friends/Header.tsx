import React from "react";
import Image from "next/image";
import Smile from "../../assets/smile.svg";
import MessageSquare from "../../assets/message-square.svg";
import Inbox from "../../assets/inbox.svg";
import HelpCircle from "../../assets/help-circle.svg";
import { HC } from "../Types";

const Header: React.FC<HC> = ({ handler }) => {
  return (
    <section className="text-gray-400 my-4 flex justify-between items-center gap-2 text-lg w-full">
      <article className="flex items-center gap-8">
        <div className="flex gap-2 p-3">
          <Image src={Smile} alt="smiley-face" />
          Friends
        </div>
        <button
          onClick={() => {
            handler.setOF(true);
            handler.setALL(false);
            handler.setPF(false);
            handler.setBF(false);
            handler.setADD(false);
          }}
        >
          <p className="hover:bg-gray-800 px-1 cursor-pointer ml-4">Online</p>
        </button>
        <button
          onClick={() => {
            handler.setOF(false);
            handler.setALL(true);
            handler.setPF(false);
            handler.setBF(false);
            handler.setADD(false);
          }}
        >
          <p className="hover:bg-gray-800 px-1 cursor-pointer ml-4">All</p>
        </button>
        <button
          onClick={() => {
            handler.setOF(false);
            handler.setALL(false);
            handler.setPF(true);
            handler.setBF(false);
            handler.setADD(false);
          }}
        >
          <p className="hover:bg-gray-800 px-1 cursor-pointer ml-4">Pending</p>
        </button>
        <button
          onClick={() => {
            handler.setOF(false);
            handler.setALL(false);
            handler.setPF(false);
            handler.setBF(true);
            handler.setADD(false);
          }}
        >
          <p className="hover:bg-gray-800 px-1 cursor-pointer ml-4">Blocked</p>
        </button>
        <button
          onClick={() => {
            handler.setOF(false);
            handler.setALL(false);
            handler.setPF(false);
            handler.setBF(false);
            handler.setADD(true);
          }}
        >
          <p className="text-green-500 hover:bg-gray-800 hover:text-green-600 px-1 cursor-pointer">
            Add Friend
          </p>
        </button>
      </article>
      <div className="flex gap-6 mr-6">
        <Image src={MessageSquare} alt="message-square" />
        <Image src={Inbox} alt="inbox" />
        <Image src={HelpCircle} alt="help-circle" />
      </div>
    </section>
  );
};

export default Header;
