import React, { FC, useState, useEffect } from 'react';
import './Geolocation.css';
import { Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import ENV from '../../env';

const Geolocation: FC = () => {
  const [visible, setVisible] = useState(false);
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [city, setCity] = useState();

  useEffect(() => {
    setTimeout(() => {
      setVisible(true);
    }, 500)
  }, [])

  const handleOk = () => {
    navigator.geolocation.getCurrentPosition((position: any) => setLatitude(position.coords.latitude));
    navigator.geolocation.getCurrentPosition((position: any) => setLongitude(position.coords.longitude));

    getGeolocation();

    setVisible(false);
  }

  const getGeolocation = () => {
    fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${ENV.GOOGLE_API_KEY}`)
      .then(response => response.json())
      .then(data => {setCity(data.results[8].address_components[0].long_name); console.log(city)})
  }

  const handleCancel = () => {
    setVisible(false);
  }

  return (
    <>
      <Modal
        className="geolocation__modal"
        title="Confirm"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ExclamationCircleOutlined className="geolocation__icon" />
        <span className="geolocation__modal-text">Do you allow using your geolocation?</span>
      </Modal>
    </>
  );
};

export default Geolocation;