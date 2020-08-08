import {Injectable} from '@angular/core';
import {environment} from "../../../../environments/environment";

declare let gtag: Function;

@Injectable({
  providedIn: 'root'
})
export class GoogleAnalyticsEventsService {

  constructor() {
  }

  public eventEmitter(
    eventName: string,
    eventCategory: string,
    eventAction: string,
    eventLabel: string = null,
    eventValue: number = null) {
    if (environment.production) {
      gtag('event', eventName, {
        eventCategory: eventCategory,
        eventLabel: eventLabel,
        eventAction: eventAction,
        eventValue: eventValue
      })
    }
  }
}
