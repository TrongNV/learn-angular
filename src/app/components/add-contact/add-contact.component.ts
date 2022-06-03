import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(private contactService: ContactService, private router: Router) {}

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

  public createSubmit() {
    this.contactService.createContact(this.contact).subscribe(
      (data) => {
        this.router.navigate(['/']).then();
      },
      (error) => {
        this.router.navigate(['/contacts/add']).then();
      }
    );
  }

  public statusClass(error: any): string {
    if (error.invalid && (error.dirty || error.touched)) {
      return 'is-invalid';
    } else if (!error.invalid) {
      return 'is-valid';
    }
    return '';
  }
}
