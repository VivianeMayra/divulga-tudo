import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<DialogComponent>) {
    this.form = this.fb.group({
      nomeAnuncio: ['', Validators.required],
      cliente: ['', Validators.required],
      dataInicio: ['', Validators.required],
      dataTermino: ['', Validators.required],
      investimentoPorDia: [0, Validators.required]
    });
  }

  ngOnInit(): void {
  }

  salvar(): void {
    this.dialogRef.close(this.form.value);
  }

}
