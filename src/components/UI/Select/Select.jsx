import React from "react";
import "./Select.css";

const Select = ({ open, close, value, item, where }) => {
  return (
    <>
      <div className="select">
        {item
          .filter((obj) => obj.name.toLowerCase().includes(value.toLowerCase()))
          .filter((obj) => obj.name !== where)
          .map((el, index) => (
            <div
              onClick={() =>
                close({
                  ...open,
                  select: false,
                  value: `${el.name}`,
                  sign: `${el.code_name}`,
                })
              }
              key={index}
              className="select_div"
            >
              <div className="flex">
                <p className="title">{el.name}</p>
                <div className="flex_box">
                  <p className="text big">
                    {el.code_name} ({el.country})
                  </p>
                </div>
              </div>
            </div>
          ))}
        {item.filter((obj) =>
          obj.name.toLowerCase().includes(value.toLowerCase())
        ).length === 0 && (
          <div className="block">
            <p>Введите название города или аэропорта</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Select;
