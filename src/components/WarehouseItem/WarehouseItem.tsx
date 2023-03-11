import React from 'react';
import { AdressData } from '../../types/types';
import '../../additionalStyles/ContainerStyles.scss';
import './WarehouseItem.scss';

type Props = {
  item: AdressData,
}

export const WarehouseItem: React.FC<Props> = ({ item }) => {
  const { Description, Phone, ShortAddress } = item;

  return (
    <div className="warehouseItem listItem">
      <div className="container">
        <p className="warehouseItem__title">Відділення:</p>
        <p className="warehouseItem__description">{Description}</p>
      </div>
      <div className="container">
        <p className="warehouseItem__title">Адреса:</p>
        <p className="warehouseItem__description">{ShortAddress}</p>
      </div>
      <div className="container">
        <p className="warehouseItem__title">Телефон:</p>
        <p className="warehouseItem__description">{Phone}</p>
      </div>
    </div>
  );
};
