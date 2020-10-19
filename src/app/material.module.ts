import { NgModule } from '@angular/core';
import { MatOptgroup } from '@angular/material/core';
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
    imports: [MatDialogModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatListModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule],
    exports: [MatDialogModule, MatDatepickerModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatCardModule, MatListModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatButtonModule],

})

export class MaterialModule { }