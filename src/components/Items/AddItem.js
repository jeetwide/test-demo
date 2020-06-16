import React, { useState } from "react";
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
  const [hobbies, setHobbies] = useState("");
  const [state, setState] = React.useState({
    gender: false,
    love: false,
  });

  const initialCheckboxes = [{ name: "test", checked: false,
   },{name: "love", checked: false}];
  const [checkboxItems, setCheckboxItems] = useState(initialCheckboxes);

  // const handleToggle = ({ target }) =>
  // setState(s => ({ ...s, [target.name]: !s[target.name] }));


  const checkedItems = checkboxItems.filter(({ checked }) => checked);
  //console.log("checkedItems ",checkedItems)
  


  const handleToggle = (event) => {
    console.log(event.target.value);
    setHobbies((s) => ({ ...s, [event.target.name]: event.target.checked }));
  };

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
          <div className="form-group">
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  name="Playing_Games"
                  onChange={(e) => handleToggle(e)}
                />
                Playing Games
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Watching_TV"
                  onChange={(e) => handleToggle(e)}
                />
                Watching TV
              </label>
            </div>
            <div class="form-check-inline">
              <label class="form-check-label">
                <input
                  type="checkbox"
                  class="form-check-input"
                  value="Reading_Books"
                  value="Reading_Books"
                  onChange={(e) => handleToggle(e)}
                />
                Reading Books
              </label>
            </div>
          </div>
          {/* <div>
        {Object.keys(state).map(key => (
          <input
            type="checkbox"
            onChange={handleToggle}
            key={key}
            name={key}
            checked={state[key]}
          />
        ))}
      </div> */}
          <div className="form-group">
            {checkboxItems.map((checkbox, index) => (
              <div>
                <p>{checkbox.name}</p>
                <input
                  type={"checkbox"}
                  onChange={(checked) => {
                    const newCheckboxes = [...checkboxItems];
                    newCheckboxes[index].checked= checked.target.value;
                    setCheckboxItems(newCheckboxes);
                    console.log("checked target" +checked.target.value);
                  }}
                  checked={checkbox.checked}
                />
             
              </div>
            ))}
          </div>

          <button className="btn btn-primary" type="submit">
            Add Item
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
