import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { ChildToParentOutputComponent } from './components/child-to-parent-output/child-to-parent-output.component';
import { ChildToParentViewchildComponent } from './components/child-to-parent-viewchild/child-to-parent-viewchild.component';
import { ContactManagerComponent } from './components/contact-manager/contact-manager.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { FriendToFriendBehaviorsubjectComponent } from './components/friend-to-friend-behaviorsubject/friend-to-friend-behaviorsubject.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParentToChildComponent } from './components/parent-to-child/parent-to-child.component';
import { ViewContactComponent } from './components/view-contact/view-contact.component';

const routes: Routes = [
    {path: '', redirectTo: '/contacts/admin', pathMatch: 'full'},
    {path: 'parent-to-child-input', component: ParentToChildComponent},
    {path: 'child-to-parent-viewchild', component: ChildToParentViewchildComponent},
    {path: 'child-to-parent-output', component: ChildToParentOutputComponent},
    {path: 'friend-of-friend-behaviorsubject', component: FriendToFriendBehaviorsubjectComponent},
    {path: 'contacts/admin', component: ContactManagerComponent},
    {path: 'contacts/add', component: AddContactComponent},
    {path: 'contacts/edit/:contactId', component: EditContactComponent},
    {path: 'contacts/view/:contactId', component: ViewContactComponent},
    {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
