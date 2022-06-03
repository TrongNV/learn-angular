import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FriendOneOfChildComponent } from './components/friend-one-of-child/friend-one-of-child.component';
import { FriendTwoOfChildComponent } from './components/friend-two-of-child/friend-two-of-child.component';
import { AppRoutingModule } from './app-routing.module';
import { ParentToChildComponent } from './components/parent-to-child/parent-to-child.component';
import { ChildOfParentComponent } from './components/child-of-parent/child-of-parent.component';
import { ChildOfParentViewchildComponent } from './components/child-of-parent-viewchild/child-of-parent-viewchild.component';
import { ChildToParentViewchildComponent } from './components/child-to-parent-viewchild/child-to-parent-viewchild.component';
import { ChildToParentOutputComponent } from './components/child-to-parent-output/child-to-parent-output.component';
import { ChildOfParentOutputComponent } from './components/child-of-parent-output/child-of-parent-output.component';
import { FriendToFriendBehaviorsubjectComponent } from './components/friend-to-friend-behaviorsubject/friend-to-friend-behaviorsubject.component';
import { FriendOfFriendBehaviorsubjectComponent } from './components/friend-of-friend-behaviorsubject/friend-of-friend-behaviorsubject.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactManagerComponent,
    AddContactComponent,
    EditContactComponent,
    ViewContactComponent,
    SpinnerComponent,
    PageNotFoundComponent,
    FriendOneOfChildComponent,
    FriendTwoOfChildComponent,
    ParentToChildComponent,
    ChildOfParentComponent,
    ChildOfParentViewchildComponent,
    ChildToParentViewchildComponent,
    ChildToParentOutputComponent,
    ChildOfParentOutputComponent,
    FriendToFriendBehaviorsubjectComponent,
    FriendOfFriendBehaviorsubjectComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
