import { Tracing } from "trace_events";

export interface Mappable {
    location: {
        lat: number;
        lng: number;
    };
    markerContent(): string;
}

export class CustomMap {
    private googleMap: qoogle.maps.Map;

    constructor(divId: string) {
        try {
            this.googleMap = new google.maps.Map(document.getElementById(divId), {
                zoom: 1,
                center: {
                    lat: 0,
                    lng: 0
                }
            });
        } catch (err) {
            console.error(err);
        }

    }

    addMarker(mappable: Mappable): void {
        const marker = new google.maps.Marker({
            map: this.googleMap,
            position: {
                lat: mappable.location.lat,
                lng: mappable.location.lng
            }
        });

        marker.addListener('click', () => {
            const infoWindow = new google.maps.InfoWindow({
                content: mappable.markerContent()
            });

            infoWindow.open(this.googleMap, marker);
        });
    }
};