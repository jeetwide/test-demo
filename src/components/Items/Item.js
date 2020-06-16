import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteItem } from "../../actions/itemAction";

const Item = ({ contact, selectAll }) => {
  const dispatch = useDispatch();
  const { name, email, id, link,gender,hobbies } = contact;
  return (
    <tr>
      <td>
        {" "}
        <div className="custom-control custom-checkbox">
          <input
            checked={selectAll}
            type="checkbox"
            className="custom-control-input"
          />
          <label className="custom-control-label"></label>
        </div>
      </td>
      <td>
        <Avatar className="mr-2" name={name} size="40" round={true} /> {name}
      </td>
      <td>{email}</td>
      <td>{link}</td>
      <td>{gender}</td>
      <td>{hobbies}</td>
      <td className="actions">
        <Link to={`/contacts/edit/${id}`}>
          <span className="material-icons mr-2 ">edit</span>
        </Link>

        <span
          className="material-icons text-danger"
          onClick={() => dispatch(deleteItem(id))}
        >
          remove_circle
        </span>
      </td>
    </tr>
  );
};

export default Item;
