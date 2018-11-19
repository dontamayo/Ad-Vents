import React from 'react'
import { Segment, Icon } from 'semantic-ui-react';
import  GoogleMapReact  from 'google-map-react';

const Marker = () => <Icon name='marker'size='big' color='red' />

const EventDetailedMap = ({lat, lng}) => {
    const center = [lat, lng];
    const zoom = 12;
  return (
    <Segment attached= 'bottom' style={{padding: 0}} >
    <div style={{ height: '300px', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDzOWEyg_Y-HY2GbUOEaGW0f_9UZTCZ0Dw' }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
          <Marker
            lat={lat}
            lng={lng}
          />
        </GoogleMapReact>
      </div>


    </Segment>
  )
}

export default EventDetailedMap
