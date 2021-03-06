import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiModule } from '../ui/ui.module';
import { IconsModule } from '../icons/icons.module';
import { TemplatesModule } from '../templates/templates.module';
import { LoginModule } from '../login/login.module';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ModalMsgComponent } from './components/modal-msg/modal-msg.component';



@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ModalMsgComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    UiModule,
    IconsModule,
    TemplatesModule,
    LoginModule,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    ModalMsgComponent
  ] 
})
export class CoreModule { }
