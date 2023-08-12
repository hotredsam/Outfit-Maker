import { FETCH_OUTFITS_SUCCESS, CREATE_OUTFIT_SUCCESS, UPLOAD_IMAGE_SUCCESS, SAVE_OUTFIT } from '../actions/outfitActions';

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
            case SAVE_OUTFIT:
                const updatedOutfits = state.outfits.map(outfit => {
                  if (outfit.id === action.payload) {
                    return {
                      ...outfit,
                      saved: true,
                    };
                  }
                  return outfit;
                });
                return {
                  ...state,
                  outfits: updatedOutfits,
                };
              default:
                return state;
            }
          };
          
export default outfitReducer;



