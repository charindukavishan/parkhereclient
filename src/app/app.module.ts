import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
import { FormsModule }        from '@angular/forms';


/* App Root */
import { AppComponent }       from './app.component';
import { NavbarComponent }    from './navbar/navbar.component';

/* Feature Components */
import { PersonalComponent }  from './personal/personal.component';
import { WorkComponent }      from './work/work.component';
import { AddressComponent }   from './address/address.component';
import { ResultComponent }    from './result/result.component';

/* Routing Module */
import { AppRoutingModule }   from './app-routing.module';
//import {appRoutes }   from './routing';
//import { RouterModule } from '@angular/router';

/* Shared Service */
import { FormDataService }    from './data/formData.service';
import { WorkflowService }    from './workflow/workflow.service';
import { RegserviceService } from './servers/regservice.service';
import { HttpModule } from '@angular/http';
import { RegistraionComponent } from './registraion/registraion.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

import { AuthGuard } from './auth/auth.guard';
import { AuthInterceptor } from './auth/auth.interceptor';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { NewpwComponent } from './resetpw/newpw/newpw.component';
import { HomeComponent } from './home/home.component';
import { UserHomeComponent } from './user-profile/user-home/user-home.component';
import { GalleryComponent } from './user-profile/gallery/gallery.component';
import { SettingsComponent } from './user-profile/settings/settings.component';
@NgModule({
    imports:      [ BrowserModule, 
                    FormsModule,
                    AppRoutingModule,
                    HttpModule,
                    HttpClientModule
                    //RouterModule.forRoot(appRoutes),
                  ],
    providers:    [{
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
      },AuthGuard,{ provide: FormDataService, useClass: FormDataService },
                   { provide: WorkflowService, useClass: WorkflowService },RegserviceService],
    declarations: [ AppComponent, NavbarComponent, PersonalComponent, WorkComponent, AddressComponent, ResultComponent, RegistraionComponent, SignInComponent, UserProfileComponent, ResetpwComponent, NewpwComponent, HomeComponent, UserHomeComponent, GalleryComponent, SettingsComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule {}