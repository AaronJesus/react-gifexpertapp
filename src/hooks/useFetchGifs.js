import { useState, useEffect } from "react";
import {getGfis} from '../helpers/getGifs';
;

export const useFetchGifs = ( category ) => {
    const [state, setState] = useState({
        data:[],
        loading:true,
    });

    useEffect (()=> {
        getGfis( category ).then( imgs => {
             setState({
                data: imgs,
            loading: false,
            });
        });
    },[category]);

    return state;
}