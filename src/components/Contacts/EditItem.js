import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getItem, updateItem } from "../../actions/itemAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditItem = () => {
  let { id } = useParams();
  let history = useHistory();
  const dispatch = useDispatch();
  const item = useSelector((state) => state.contact.item);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [gender, setGender] = useState("");

  useEffect(() => {
    if (item != null) {
      setName(item.name);
      setEmail(item.email);
      setLink(item.link);
      setGender(item.gender);
    }
    dispatch(getItem(id));
  }, [item]);

  const onUpdateItem = (e) => {
    e.preventDefault();
    const update_item = Object.assign(item, {
      name: name,
      email: email,
      link: link,
      gender: gender,
    });

    dispatch(updateItem(update_item));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header">Update an Item</div>
      <div className="card-body">
        <form onSubmit={(e) => onUpdateItem(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Phone Number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your E-mail Address"
              value={link}
              onChange={(e) => setLink(e.target.value)}
            />
          </div>
          <label className="font-weight-bold">Gender</label>
          <div className="form-group">
            <label className="mr-2">
              <input
                type="radio"
                name="Male"
                className="mr-2"
                checked={gender === "Male"}
                value="Male"
                onChange={(e) => setGender("Male")}
              />
              Male
            </label>
            <label>
              <input
                type="radio"
                name="Female"
                className="mr-2"
                value="Female"
                onChange={(e) => setGender("Female")}
              />
              Female
            </label>
          </div>
          <button className="btn btn-warning" type="submit">
            Update Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditItem;
