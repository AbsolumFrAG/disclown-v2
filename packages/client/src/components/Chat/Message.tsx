import React from "react";

const Message: React.FC = () => {
  // ? Get the messages user id and message from query
  // ! not implemented yet

  return (
    <div className="bg-gray-800 z-20 hover:bg-gray-700">
      <div className="flex p-6">
        {/* Avatar */}
        <div className="block bg-gray-900 p-6 h-6 rounded-full" />

        <div className="flex flex-col items-start ml-8 gap-y-2">
          {/* Display Name */}
          <h1 className="hover:underline">Personne 👨</h1>

          {/* Message */}
          <span className="text-sm">
            Le message de l'utilisateur sera affiché ici 📭
          </span>
        </div>
      </div>
    </div>
  );
};

export default Message;
