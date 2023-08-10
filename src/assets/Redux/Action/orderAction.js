import {
    PRODUCT, PRODUCT_ID, DETAIL_PRODUCT,
} from "./type";
import { ORDER } from "./type";
import { logistical } from '../../logistical'
import { Alert } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RemoveToken } from "./userAction";




export const AllOrderList = (data, navigation) => dispatch => {

    return new Promise(async (resolve, reject) => {

        const response = await logistical.get('/get-product-order-list', data);

        if (response.status == '1') {

            dispatch({
                type: ORDER,
                getorderData: response.data.product_bookings,
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
            console.log('errrrrrrrrrrrrrrr>>>>>>>>>>>>>>>')
            reject(response);
        }
    });
};




