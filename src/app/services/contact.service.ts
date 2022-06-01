import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { IContact } from '../models/iContact';
import { IGroup } from '../models/iGroup';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private serverUrl: string = `http://localhost:9000`;
  constructor(private httpClient: HttpClient) {}

  // get all contacts
  public getAllContacts(): Observable<IContact[]> {
    const dataUrl: string = `${this.serverUrl}/contacts`;
    return this.httpClient
      .get<IContact[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // get single contacts
  public getContact(contactId: string): Observable<IContact> {
    const dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient
      .get<IContact>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // create a contact
  public createContact(contact: IContact): Observable<IContact> {
    const dataUrl: string = `${this.serverUrl}/contacts`;
    return this.httpClient
      .post<IContact>(dataUrl, contact)
      .pipe(catchError(this.handleError));
  }

  // update a contact
  public updateContact(
    contact: IContact,
    contactId: string
  ): Observable<IContact> {
    const dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient
      .put<IContact>(dataUrl, contact)
      .pipe(catchError(this.handleError));
  }

  // delete a contact
  public deleteContact(contactId: string): Observable<{}> {
    const dataUrl: string = `${this.serverUrl}/contacts/${contactId}`;
    return this.httpClient
      .delete<{}>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // get all groups
  public getAllGroups(): Observable<IGroup[]> {
    const dataUrl: string = `${this.serverUrl}/groups`;
    return this.httpClient
      .get<IGroup[]>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // get single group
  public getGroup(contact: IContact): Observable<IGroup> {
    const dataUrl: string = `${this.serverUrl}/contacts/${contact.groupId}`;
    return this.httpClient
      .get<IGroup>(dataUrl)
      .pipe(catchError(this.handleError));
  }

  // Error handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = '';
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = `Error : ${error.error.message}`;
    } else {
      // server error
      errorMessage = `Status : ${error.status} \n Message : ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
