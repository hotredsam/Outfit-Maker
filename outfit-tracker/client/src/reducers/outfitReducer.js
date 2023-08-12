import { FETCH_OUTFITS_SUCCESS, CREATE_OUTFIT_SUCCESS, UPLOAD_IMAGE_SUCCESS } from '../actions/outfitActions';

const initialState = {
  outfits: [],
};

const outfitReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_OUTFITS_SUCCESS:
        return {
          ...state,
          outfits: action.payload,
        };
      case CREATE_OUTFIT_SUCCESS:
        return {
          ...state,
          outfits: [...state.outfits, action.payload],
        };
      case UPLOAD_IMAGE_SUCCESS:
            return {
              ...state,
              images: [...state.images, action.payload],
            };
          default:
            return state;
        }
      };
 
export default outfitReducer;



