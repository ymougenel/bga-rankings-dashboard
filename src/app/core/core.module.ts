import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientConfig} from "./services/http-client-config";
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: HttpClientConfig,
      useValue: environment.api
    }

  ]
})
export class CoreModule { }
