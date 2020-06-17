import React, { useState,useEffect } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../actions/itemAction";
import shortid from "shortid";
import { useHistory } from "react-router-dom";

const AddItem = () => {
  let history = useHistory();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [link, setLink] = useState("");
  const [gender, setGender] = useState("Male");
  const [hobbies, setHobbies] = useState([]);

  const initialCheckboxes = [
    { name: "Watching TV", checked: false },
    { name: "Playing Games", checked: false },
  ];
  const [checkboxItems, setCheckboxItems] = useState(initialCheckboxes);

  const checkedItems = checkboxItems.filter(({ checked }) => checked);
  console.log("checkedItems ", checkedItems);
  let myJSON = JSON.stringify(checkedItems);

  var names = JSON.parse(myJSON);
  let result = names.map(a => a.name);
 
  console.log("checkedItems in String  ",result); //outputs  ["Watching TV", "Playing Games"]

 // setHobbies(result); here I am facing an issue

  // useEffect(() => {
  //   // Should not ever set state during rendering, so do this in useEffect instead.
  //   setHobbies(...hobbies,result);
  // }, [hobbies]);

  const createContact = (e) => {
    e.preventDefault();
    const new_contact = {
      id: shortid.generate(),
      name: name,
      gender: gender,
      email: email,
      link: link,
      hobbies: hobbies,
    };

    dispatch(addItem(new_contact));
    history.push("/");
  };

  return (
    <div className="card border-0 shadow">
      <div className="card-header"> Add an Item</div>
      <div className="card-body">
        <form onSubmit={(e) => createContact(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="invalid-feedback">
              Please enter a valid email address.
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your Link "
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
          <label className="font-weight-bold">Hobbies</label>

          <div>
            {checkboxItems.map((checkbox, index) => (
              <div className="form-check-inline">
                <p class="form-check-label mr-2">{checkbox.name}</p>
                <input
                  type={"checkbox"}
                  onChange={(e) => {
                    const newCheckboxes = [...checkboxItems];
                    newCheckboxes[index].checked = e.target.checked;
                    setCheckboxItems(newCheckboxes);
                  }}
                  checked={checkbox.checked}
                />
              </div>
            ))}
          </div>

          <button className="btn btn-primary mt-2" type="submit">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
