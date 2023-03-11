import React from 'react';
import { StatusData } from '../../types/types';
import '../../additionalStyles/FailMessage.scss';
import '../../additionalStyles/ContainerStyles.scss';
import './StatusInfo.scss';

type Props = {
  ttnStatus: StatusData,
};

export const StatusInfo: React.FC<Props> = ({ ttnStatus }) => {
  const {
    Number: ttnNumber,
    WarehouseRecipient,
    CityRecipient,
    ActualDeliveryDate,
    ScheduledDeliveryDate,
    WarehouseSender,
    CitySender,
    DateCreated,
    Status,
    StatusCode,
  } = ttnStatus;
  const isStatusShown = StatusCode !== '3' && StatusCode !== '2' && ttnNumber;
  const isNumberNotFound = StatusCode === '3' || !ttnNumber;

  return (
    <>
      {isNumberNotFound && (
        <p className="failMessage">ТТН з таким номером не знайдено</p>
      )}

      {StatusCode === '2' && (
        <p className="failMessage">ТТН з таким номером видалено</p>
      )}

      {isStatusShown && (
        <div className="statusInfo list">
          <div className="container statusInfo__status">
            <p className="statusInfo__title">Статус відправлення:</p>
            <p className="statusInfo__description">{Status}</p>
          </div>

          <div className="statusInfo__details listItem">
            <p className="statusInfo__person">Відправник</p>

            <div className="container">
              <p className="statusInfo__title">Дата відправлення:</p>
              <p className="statusInfo__description">{DateCreated}</p>
            </div>

            <div className="container">
              <p className="statusInfo__title">Місто відправника:</p>
              <p className="statusInfo__description">{CitySender}</p>
            </div>

            <div className="container">
              <p className="statusInfo__title">Відділення відправника:</p>
              <p className="statusInfo__description">{WarehouseSender}</p>
            </div>
          </div>

          <div className="statusInfo__details listItem">
            <p className="statusInfo__person">Отримувач</p>

            {ActualDeliveryDate
              ? (
                <div className="container">
                  <p className="statusInfo__title">Дата доставки:</p>
                  <p className="statusInfo__description">
                    {ActualDeliveryDate}
                  </p>
                </div>
              )
              : (
                <div className="container">
                  <p className="statusInfo__title">Очікувана дата доставки:</p>
                  <p className="statusInfo__description">
                    {ScheduledDeliveryDate}
                  </p>
                </div>
              )}

            <div className="container">
              <p className="statusInfo__title">Місто отримувача:</p>
              <p className="statusInfo__description">{CityRecipient}</p>
            </div>

            <div className="container">
              <p className="statusInfo__title">Відділення отримувача:</p>
              <p className="statusInfo__description">{WarehouseRecipient}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
