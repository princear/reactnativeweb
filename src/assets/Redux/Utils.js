


export const addItemRatingFunctiion = ( reducerState, comingItem ) => {
    console.log( 'addItemRating', reducerState, );
    console.log( 'comingItem', comingItem )

    if ( comingItem.length > 0 ) {
        console.log( 'check after length' );
        let updatedItem = comingItem.find( ( item ) => item.id === comingItem.id );

        console.log( 'updateditem', updatedItem )
        if ( updatedItem ) {
            return comingItem.map( ( item ) => {
                if ( item.id == reducerState.id ) {
                    return {
                        ...item,
                        rating: reducerState.rating
                    }
                } else {
                    return reducerState
                }
            } )
        }
        // return [...reducerState, {}]
    }


    // if ( reducerState.length > 0 ) {
    //     let updatedItem = reducerState.find( ( item ) => item.id === comingItem.id );
    //     if ( updatedItem ) {
    //         return reducerState.map( ( item ) => {
    //             if ( item.id == comingItem.id ) {
    //                 return {
    //                     ...item,
    //                     rating: comingItem.rating
    //                 }
    //             } else {
    //                 return comingItem
    //             }
    //         } )
    //     }
    //     // return [...reducerState, {}]
    // }

};