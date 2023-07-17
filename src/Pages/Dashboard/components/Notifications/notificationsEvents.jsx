import mitt from 'mitt';

const emitter = mitt();

export const notificationEvents = {
  SHOW_NOTIFICATION: 'show_notification',
};

export const notificationEmitter = emitter;
