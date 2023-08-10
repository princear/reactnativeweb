import {
  BOOKING, DASHBOARD_BOOKING,
  BOOKING_LIST, BOOKING_DETAIL_LIST,
  PRODUCTBOOKING, SERVICEBOOKING,
  PRODUCT_BOOKING_DETAIL_LIST,
  SERVICE_CANCEl, DELETE_ADDRESS,
  ADDRESS_LIST, RATING, RATINGPRODUCT, ADD_RATING, CRAETE_ADDRESS, UPDATE_ADDRESS
} from "./type";
import { USER_LOGIN, GET_TOKEN, REMOVE_TOKEN } from "./type";
import { logistical } from '../../logistical'
import { Alert, ToastAndroid } from "react-native";
import { ProductListing, ServicesListing } from "./ServiceAction";
import { addItemToCart, clearCart } from "./CartActions";
import { RemoveToken } from "./userAction";
import AsyncStorage from '@react-native-async-storage/async-storage';



export const AllBooking = (data, navigation) => dispatch => {
  dispatch({

    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {
    console.log('>>>>>>', data)
    const response = await logistical.post('/get-service-booking', data);
    if (response.status == '1' && response.message == 'Successfull Booking') {
      // console.log("========================================>", response.data);

      dispatch({
        type: BOOKING,
        getBookingData: response.data,
      });


      Alert.alert(
        'Booking',
        'Press ok to confirm your booking', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }, {
          text: 'OK',
          onPress: () => navigation.navigate('MainHome')
        },], {
        cancelable: false
      }
      )
      resolve(response);

    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      // Alert.alert(response.message)
      //   Alert.alert(response.response[0])

      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const DashboardBooking = (navigation) => dispatch => {
  dispatch({
    type: 'LOADING',
    payload: true
  });
  return new Promise(async (resolve, reject) => {

    const response = await logistical.get('/get-count-bookings');

    if (response.status == '1') {

      dispatch({
        type: DASHBOARD_BOOKING,
        getDashboardData: response.data.data,
      });
      dispatch({
        type: 'LOADING',
        payload: false
      });
      // navigation.navigate('ServicesScreen');
      resolve(response);

    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }

    else {
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const GetBookingList = (navigation) => dispatch => {
  dispatch({
    type: 'LOADING',
    payload: true
  });
  return new Promise(async (resolve, reject) => {

    const response = await logistical.get('/get-booking-details');
    if (response.status == '1') {

      dispatch({
        type: BOOKING_LIST,
        getBookingListData: response.data.bookings,
      });
      dispatch({
        type: 'LOADING',
        payload: false
      });


      resolve(response);

    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      // Alert.alert(response.message)
      // Alert.alert(response.response[0])

      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};


export const GetBookingDetail = (data, navigation) => dispatch => {

  dispatch({
    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {

    const response = await logistical.post('/get-service-booking-details', data);

    if (response.status == '1') {
      // AsyncStorage.setItem("login",JSON.stringify(response.data.token));

      dispatch({
        type: BOOKING_DETAIL_LIST,
        getBookingDetailData: response.data,
      });
      resolve(response);

      dispatch({

        type: 'LOADING',
        payload: false

      });
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      // Alert.alert(response.message)
      //  Alert.alert(response.response[0])

      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const GetProductBookingDetail = (data, navigation) => dispatch => {

  // dispatch( {
  //   type: 'LOADING',
  //   payload: true

  // } );

  return new Promise(async (resolve, reject) => {

    const response = await logistical.post('/get-product-order-detail', data);

    if (response.status == '1' && response.message == 'Product Order Detail') {
      // AsyncStorage.setItem("login",JSON.stringify(response.data.token));
      console.log("========================================>", response.data);

      dispatch({
        type: PRODUCT_BOOKING_DETAIL_LIST,
        getProductBookingDetailData: response.data,
      });


      // dispatch( {

      //   type: 'LOADING',
      //   payload: false

      // } );
      resolve(response);
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      // Alert.alert(response.message)
      //  Alert.alert(response.response[0])

      // dispatch( {

      //   type: 'LOADING',
      //   payload: false

      // } );
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const CreatingProductCard = (data, navigation) => dispatch => {
  dispatch({

    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {
    console.log('>>>>>>', data)
    const response = await logistical.post('/create-product-order', data);
    if (response.status == '1' && response.message == 'Your Order is Successfull') {
      // AsyncStorage.setItem("login",JSON.stringify(response.data.token));
      // console.log("========================================>", response.data);

      dispatch({
        type: PRODUCTBOOKING,
        productBooking: response.data,
      });
      dispatch(ProductListing())

      Alert.alert(response.response[0])
      resolve(response);

      dispatch(clearCart([]))
      // dispatch(addItemToCart([]))
      // ToastAndroid.showWithGravity(
      //   'confirm your booking!',
      //   ToastAndroid.LONG,
      //   ToastAndroid.BOTTOM,
      // );
      navigation.navigate('bar')
      // Alert.alert(
      //   'Place Order',
      //   'Press ok to confirm your booking', [{
      //     text: 'Cancel',
      //     onPress: () => console.log( 'Cancel Pressed' ),
      //     style: 'cancel'
      //   }, {
      //     text: 'OK',
      //     onPress: () => navigation.navigate( 'bar' )
      //   },], {
      //   cancelable: false
      // }
      // )

      dispatch({

        type: 'LOADING',
        payload: false

      });
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      // Alert.alert(response.message)
      Alert.alert(response.response[0])

      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};
//  not in used
export const CreatingServices = (data, navigation) => dispatch => {
  dispatch({

    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/create-service-booking', data);
    console.log('resposne===============>', response.status)
    if (response.status == 1 && response.message == 'Successfull Booking') {

      console.log('response.fata', response.data)
      dispatch({
        type: SERVICEBOOKING,
        serviceBooking: response.data,
      });


      // navigation.navigate('MainHome')
      dispatch({

        type: 'LOADING',
        payload: true

      });
      resolve(response);
      Alert.alert(
        'Booking',
        'Press ok to confirm your booking', [{
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        }, {
          text: 'OK',
          onPress: () => navigation.navigate('BookingList')
        },], {
        cancelable: false
      }
      )
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      console.log('datattatatat')
      reject(response);
    }
  });
};


export const CancelServices = (data, navigation) => dispatch => {
  // dispatch( {

  //   type: 'LOADING',
  //   payload: true

  // } );
  return new Promise(async (resolve, reject) => {

    const response = await logistical.get('/get-product-cancel?booking_id=' + data);
    if (response.status == 1) {
      // dispatch( {

      //   type: 'LOADING',
      //   payload: true

      // } );
      dispatch({
        type: SERVICE_CANCEl,
        serviceCancelBooking: response.data,
      });
      dispatch(ProductListing())
      dispatch(ServicesListing())

      resolve(response);


      ToastAndroid.showWithGravity(
        'Succesfully cancel!',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );

      // navigation.navigate( 'MainHome' )
      // navigation.goBack();
      // Alert.alert(
      //   'Booking',
      //   'Are you sure you want to cancel', [{
      //     text: 'Cancel',
      //     onPress: () => console.log( 'Cancel Pressed' ),
      //     style: 'cancel'
      //   }, {
      //     text: 'OK',
      //     onPress: () => navigation.navigate( 'MainHome' )
      //   },], {
      //   cancelable: false
      // }
      // )
      // dispatch( {

      //   type: 'LOADING',
      //   payload: false

      // } );
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      // dispatch( {

      //   type: 'LOADING',
      //   payload: false

      // } );
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      Alert.alert(response.message)
      reject(response);
    }
  });
};


export function onSubmitForm(value, navigation) {


  return async (dispatch) => {

    dispatch(loaderData(true));


    fetch(`http://3.25.135.48/api/create-service-booking`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(value),

    }).then((response) => response.json())
      .then((responseJson) => {
        dispatch(loaderData(false));
        console.log('responseJson', JSON.stringify(responseJson))
        if (responseJson.is_valid == true) {
          dispatch(formSubmitData(responseJson));
        }
        else {
          // console.log( 'responseJson', responseJson.validation_messages )
          Alert.alert('', responseJson.message ? responseJson.data.message : responseJson.validation_messages);
        }

      })
      .catch((error) => {
        dispatch(loaderData(false));
        console.log(error);
      });
  };

}

export const RatingServices = (data, navigation) => dispatch => {
  dispatch({

    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/create-rating', data);
    if (response.status == 1) {

      console.log('response.fata', response.data)
      dispatch({
        type: RATING,
        ratingBooking: response.data,
      });
      dispatch({

        type: 'LOADING',
        payload: true

      });
      resolve(response);
      Alert.alert(response.message)
      navigation.navigate('BookingList')
      dispatch({

        type: 'LOADING',
        payload: false

      });
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      console.log('datattatatat')
      reject(response);
    }
  });
};

export const RatingProduct = (data, navigation) => dispatch => {
  dispatch({

    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {
    const response = await logistical.post('/create-product-rating', data);
    console.log('response', response)
    if (response.status == 1) {

      console.log('response.fata', response.data)
      dispatch({
        type: RATINGPRODUCT,
        ratingProductBooking: response.data,
      });
      // // dispatch(GetProductBookingDetail())
      dispatch({

        type: 'LOADING',
        payload: true

      });
      resolve(response);
      navigation.navigate('bar');
      dispatch({

        type: 'LOADING',
        payload: false

      });
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const addRating = (rating) => dispatch => {
  console.log(rating)
  dispatch({
    type: ADD_RATING,
    reducerState: rating,
  })
}

export const CreatingAddress = (data, navigation) => dispatch => {

  return new Promise(async (resolve, reject) => {

    const response = await logistical.post('/create-address', data);

    if (response.status == 1 && response.message == 'Address is successfully saved') {

      // Alert.alert( 'responhhhhhhhhhhhhhhhhse.fata', response.data )
      dispatch({
        type: CRAETE_ADDRESS,
        createaddress: response.data,
      });

      ToastAndroid.showWithGravity(
        'Successfully created address',
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );

      dispatch(GetAllAddress())
      navigation.goBack();
      resolve(response);

    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {

      console.log('errror>>>>')
      reject(response);
    }
  });
};

export const GetAllAddress = (navigation) => dispatch => {

  // dispatch( {
  //   type: 'LOADING',
  //   payload: true
  // } );

  return new Promise(async (resolve, reject) => {

    const response = await logistical.get('/get-address');

    if (response.status == '1' && response.message == 'Customer Address List') {

      // Alert.alert('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      // dispatch( {
      //   type: 'LOADING',
      //   payload: true
      // } );

      dispatch(CreatingAddress())

      dispatch({
        type: ADDRESS_LIST,
        addresslistData: response.data,
      });

      // dispatch( {
      //   type: 'LOADING',
      //   payload: true
      // } );
      resolve(response);

      // dispatch( {

      //   type: 'LOADING',
      //   payload: false

      // } );
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {
      Alert.alert(response.response[0])

      dispatch({
        type: 'LOADING',
        payload: false

      });
      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const DeleteAddress = (id, navigation) => dispatch => {

  return new Promise(async (resolve, reject) => {

    const response = await logistical.post('/delete-address/' + id);
    if (response.status == '1' && response.message == 'Address is successfully deleted') {

      dispatch({
        type: DELETE_ADDRESS,
        delteaddreslistData: response.data,
      });

      dispatch(GetAllAddress())

      resolve(response);

    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }
    else {

      console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
      reject(response);
    }
  });
};

export const UpdateAddressData = (id, data, navigation) => dispatch => {
  dispatch({

    type: 'LOADING',
    payload: true

  });
  return new Promise(async (resolve, reject) => {

    const response = await logistical.post('/update-address/' + data, id);
    if (response.status == 1 && response.message == 'Address is successfully saved') {

      console.log('response.fata', response.data)
      dispatch({
        type: UPDATE_ADDRESS,
        updateaddress: response.data,
      });
      dispatch({
        type: ADDRESS_LIST,
        addresslistData: response.data,
      });
      // dispatch( {

      //   type: 'LOADING',
      //   payload: true

      // } );

      resolve(response);

      // navigation.navigate( 'AddAddressCart' )

      dispatch({

        type: 'LOADING',
        payload: false

      });
    }
    else if (response.message == 'Unauthenticated.') {
      Alert.alert('Session expired please login again ..')
      dispatch(RemoveToken('null'))

      AsyncStorage.removeItem('login');
      navigation.navigate('Auth');
    }

    else {
      dispatch({

        type: 'LOADING',
        payload: false

      });
      console.log('errror>>>>')
      reject(response);
    }
  });
};