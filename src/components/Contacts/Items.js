import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Item from "./Item";
import {
  selectAllItem,
  clearAllItem,
  deleteAllItem,
} from "../../actions/itemAction";

const Items = () => {
  const dispatch = useDispatch();
  const [selectAll, setSelectAll] = useState(false);
  const items = useSelector((state) => state.contact.items);
  const selectedItems = useSelector(
    (state) => state.contact.selectedItems
  );

  useEffect(() => {
    if (selectAll) {
      dispatch(selectAllItem(items.map((contact) => contact.id)));
    } else {
      dispatch(clearAllItem());
    }
  }, [selectAll]);
  return (
    <div>
      {selectedItems.length > 0 ? (
        <button
          className="btn btn-danger mb-3"
          onClick={() => dispatch(deleteAllItem())}
        >
          delete all
        </button>
      ) : null}
      <table class="table shadow">
        <thead>
          <tr>
            <th>
              <div className="custom-control custom-checkbox">
                <input
                  id="selectAll"
                  type="checkbox"
                  value={selectAll}
                  className="custom-control-input"
                  onClick={() => setSelectAll(!selectAll)}
                />
                <label
                  htmlFor="selectAll"
                  className="custom-control-label"
                ></label>
              </div>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Portfolio Link</th>
            <th>Gender</th>
            <th>Hobbies</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((contact) => (
            <Item
              contact={contact}
              key={contact.key}
              selectAll={selectAll}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Items;
