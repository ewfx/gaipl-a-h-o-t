import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatGridListModule } from '@angular/material/grid-list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { MatCarouselModule } from 'ng-mat-carousel';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
// import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { ChatboxComponent } from './chatbox/chatbox.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card'; // ✅ Import MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field'; // ✅ Import MatFormFieldModule
@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    GridLayoutComponent,
    ChatboxComponent
  ],
  imports: [
    MatToolbarModule, MatButtonModule, MatIconModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCarouselModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule
  ],
  exports: [MatToolbarModule, MatButtonModule, MatIconModule,MatTableModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
