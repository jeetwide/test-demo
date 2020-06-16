import {
  CREATE_ITEM,
  GET_ITEM,
  UPDATE_ITEM,
  DELETE_ITEM,
  SELECT_ITEM,
  CLEAR_ITEM,
  DELETE_SELECTED_ITEMS,
} from "../constants/types";

//actions

export const addItem= (item) => ({
  type: CREATE_ITEM,
  payload: item,
});

//get a contact
export const getItem = (id) => ({
  type: GET_ITEM,
  payload: id,
});

//Update contact
export const updateItem = (item) => ({
  type: UPDATE_ITEM,
  payload: item,
});

//Delete a contact
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

//Select Contact
export const selectAllItem = (id) => ({
  type: SELECT_ITEM,
  payload: id,
});

//clear all contact
export const clearAllItem = () => ({
  type: CLEAR_ITEM,
});

//delete all contact
export const deleteAllItem = () => ({
  type: DELETE_SELECTED_ITEMS,
});
