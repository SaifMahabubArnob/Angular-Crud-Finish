import { Component, OnInit } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  users: any[] = [];
  newUser = { name: '', email: '' };
  editMode = false; // To track whether we are in edit mode
  userToEditId: number | null = null; // Track the ID of the user being edited

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  // Fetch all users
  getUsers() {
    this.crudService.getUsers().subscribe(
      (data: any) => {
        this.users = data;
      },
      (error) => {
        console.error('Error fetching users', error);
      }
    );
  }

  // Add a new user
  addUser() {
    if (!this.newUser.name || !this.newUser.email) {
      alert('Please fill all the fields.');
      return;
    }

    this.crudService.addUser(this.newUser).subscribe(
      () => {
        this.getUsers();
        this.newUser = { name: '', email: '' }; // Reset form
      },
      (error) => {
        console.error('Error adding user', error);
      }
    );
  }

  // Edit an existing user
  editUser(user: any) {
    this.editMode = true; // Enable edit mode
    this.userToEditId = user.id; // Store the user's ID
    this.newUser = { ...user }; // Populate the form with the user's current data
  }

  // Update user data
  updateUser() {
    if (this.userToEditId === null) return;

    this.crudService.updateUser(this.userToEditId, this.newUser).subscribe(
      () => {
        this.getUsers();
        this.resetForm();
      },
      (error) => {
        console.error('Error updating user', error);
      }
    );
  }

  // Delete a user
  deleteUser(id: number) {
    this.crudService.deleteUser(id).subscribe(
      () => {
        this.getUsers();
      },
      (error) => {
        console.error('Error deleting user', error);
      }
    );
  }

  // Reset the form and exit edit mode
  resetForm() {
    this.editMode = false;
    this.userToEditId = null;
    this.newUser = { name: '', email: '' };
  }
}
