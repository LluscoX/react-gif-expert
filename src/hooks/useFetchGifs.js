

import { useEffect, useState } from 'react';
import React from 'react';
import { getGifs } from '../helpers/getGifs';
import { isElementOfType } from 'react-dom/test-utils';

//CUSTOM  HOKK

export const useFetchGifs = (category) => {
    
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {
        getImages();
    }, [])

    return{
        images: images,
        isLoading: isLoading
    }
}
