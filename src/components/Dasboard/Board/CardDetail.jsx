import useState from "react";

const CardDetail = ({ selectedCard, listTitle }) => {
  return (
    <div>
      <p className=" font-bold text-xl flex flex-col">
        <span className="text-blueish "> {selectedCard.content}</span>{" "}
        <span>
          {" "}
          in list <span className="text-blueish"> {listTitle}</span>
        </span>
      </p>
      <p>Description</p>
      <textarea
        name=""
        id=""
        className="border-2 px-2 py-3"
        placeholder="Add a more detailed description"
      >
        {" "}
      </textarea>
    </div>
  );
};

export default CardDetail;
