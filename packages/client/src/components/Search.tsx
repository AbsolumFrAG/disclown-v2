import React from "react";

const Search: React.FC = () => {
  return (
    <section className="flex justify-center">
      <div className="w-[90%] mt-8">
        <form>
          <input
            className="w-56 px-3 py-2 text-gray-400 bg-background rounded-xl focus:outline-0"
            type="text"
            placeholder="Find or Start a conversation"
          />
        </form>
      </div>
    </section>
  );
};

export default Search;
