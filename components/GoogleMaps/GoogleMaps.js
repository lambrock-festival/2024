"use client"

import { useEffect, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
//import { markerIcon } from '@public/images/logo.png'

export default function GoogleMaps(){
    const mapRef = useRef(null);

    useEffect(() => {
        const initMap = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_MAPS_API_KEY,
                version: 'weekly'
            });
            await loader.load();
            const position = {
                lat: 45.72118,
                lng: 9.204214
            };
            
            const mapOpt = {
                center: position,
                zoom: 20,
                mapTypeId: 'satellite',
                mapId: process.env.NEXT_PUBLIC_MAPS_MAPID,
                icon: {
                    url: '',
                    scaledSize: new google.maps.Size(50, 50)
                }
            };

            const infowindow = new google.maps.InfoWindow({
                content: `
                    <div style="background: pink; border: 2px solid red; border-radius: 5px; padding: 10px">
                        <h2 style="color: white">Titolo quì</h2>
                        <p style="color: black">Il tuo contenuto qui</p>
                    </div>
                `
            });

            const map = new google.maps.Map(mapRef.current, mapOpt);
            
            const marker = new google.maps.Marker({
                position: position,
                map: map,
            });
            
            marker.addListener('click', function() {
                infowindow.open(map, marker);
            });
        };
        initMap();
    }, []);

    return <div style={{width: '512px', height: '360px', margin: '50px auto'}} ref={mapRef}></div>;
}
