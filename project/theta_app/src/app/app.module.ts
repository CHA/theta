import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppShellComponent } from './app-shell/app-shell.component';
import { FeatureModule } from './feature/feature.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AppShellComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FeatureModule,
    BrowserAnimationsModule,
    RouterModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [],
  schemas: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
