import {
  CREATE_ITEM,
  GET_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  SELECT_ITEM,
  CLEAR_ITEM,
  DELETE_SELECTED_ITEMS,
} from "../constants/types";
const initialState = {
  items: [
    {
      id: 1,
      name: "Jitendra Achtani",
      email: "jack@gmail.com",
      link: "www.abc.com",
      gender:"Male",
      hobbies:"playing games",
    },
    {
      id: 2,
      name: "Ramesh Porwal",  
      email: "ramesh.p@gmail.com",
      link: "www.abc.com",
      gender:"Male",
      hobbies:"playing games",
    },
    {
      id: 3,
      name: "Leanne Graham",
      email: "Sincere@april.biz",
      link: "www.abc.com",
      gender:"Female",
      hobbies:"playing games",
    },
  ],
  selectedItems: [],
  contact: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items],
      };
    case GET_ITEM:
      let arr = state.items.filter(
        (item) => item.id == action.payload
      );
      arr = arr.values();
      for (let val of arr) {
        arr = val;
      }
      return {
        ...state,
        item: arr,
      };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id == action.payload.id ? action.payload : item
        ),
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(
          (item) => item.id != action.payload
        ),
      };
    case SELECT_ITEM:
      return {
        ...state,
        selectedItems: action.payload,
      };
    case CLEAR_ITEM:
      return {
        ...state,
        selectedItems: [],
      };
    case DELETE_SELECTED_ITEMS:
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
};
