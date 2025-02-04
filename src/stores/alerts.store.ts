import { defineStore } from 'pinia';

import { type IAlert, type IUniqueAlert } from '@/types';

export const useAlertsStore = defineStore('alertsStore', {
  state() {
    return {
      alerts: [] as IUniqueAlert[],
    }
  },

  actions: {
    add(alertData: IAlert) {
      const alert = {
        ...alertData,
        id: Symbol(alertData.message),
      }

      this.alerts.push(alert);
    },

    close(index: number) {
      this.alerts.splice(index, 1);
    },
  },
});
