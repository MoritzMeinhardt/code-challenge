import { ErrorHandler, Injectable, inject, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  private snackBar = inject(MatSnackBar);
  private zone = inject(NgZone);

  handleError(error: any): void {
    console.error('Global Error:', error);

    // We use ngZone.run to ensure the snackbar is opened inside the Angular zone
    // as errors might be caught outside of it.
    this.zone.run(() => {
      this.snackBar.open(
        error?.message || 'An unexpected error occurred',
        'Close',
        {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: 'bottom',
          panelClass: ['error-snackbar']
        }
      );
    });
  }
}
