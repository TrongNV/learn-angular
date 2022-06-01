import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IContact } from 'src/app/models/iContact';
import { IGroup } from 'src/app/models/iGroup';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent implements OnInit {
  public loading: boolean = false;
  public contact: IContact = {} as IContact;
  public errorMessage: string | null = null;
  public groups: IGroup[] = [] as IGroup[];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    //get api group
    this.contactService.getAllGroups().subscribe(
      (data) => {
        this.groups = data;
      },
      (error) => {
        this.errorMessage = error;
      }
    );
  }

  public statusClass(inputName: string, error: any): string {
    if (error.invalid && (error.dirty || error.touched)) {
      return 'is-invalid';
    }else if(!error.invalid){
      return 'is-valid';
    }
    return '';
  }
}
