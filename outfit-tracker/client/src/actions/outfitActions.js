// import axios from 'axios';

// export const FETCH_OUTFITS_SUCCESS = 'FETCH_OUTFITS_SUCCESS';

// export const fetchOutfitsSuccess = outfits => ({
//   type: FETCH_OUTFITS_SUCCESS,
//   payload: outfits,
// });

// export const fetchOutfits = () => dispatch => {
//   axios.get('/api/outfits')
//     .then(response => {
//       dispatch(fetchOutfitsSuccess(response.data));
//     })
//     .catch(error => {
//       console.error('Error fetching outfits:', error);
//     });
// };


// export const CREATE_OUTFIT_SUCCESS = 'CREATE_OUTFIT_SUCCESS';

// export const createOutfitSuccess = outfit => ({
//   type: CREATE_OUTFIT_SUCCESS,
//   payload: outfit,
// });

// export const createOutfit = outfitName => dispatch => {
//   const newOutfit = { id: Date.now(), name: outfitName };

//   // You can send a POST request to your server here to save the new outfit

//   dispatch(createOutfitSuccess(newOutfit));
// };

// export const UPLOAD_IMAGE_SUCCESS = 'UPLOAD_IMAGE_SUCCESS';

// export const uploadImageSuccess = image => ({
//   type: UPLOAD_IMAGE_SUCCESS,
//   payload: image,
// });

// export const uploadImage = formData => dispatch => {
//   // You can send a POST request to your server here to upload the image

//   // After successful upload, dispatch the action
//   const uploadedImage = { id: Date.now(), imageUrl: 'path_to_uploaded_image', name: formData.get('name') };
//   dispatch(uploadImageSuccess(uploadedImage));
// };


// export const SAVE_OUTFIT = 'SAVE_OUTFIT';

// export const saveOutfit = outfitId => ({
//   type: SAVE_OUTFIT,
//   payload: outfitId,
// });
