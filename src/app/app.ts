import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AuditLogComponent, AuditLogEntry } from './audit-log/audit-log.component';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule,
    RouterOutlet,
    ProductEditComponent,
    AuditLogComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly auditLogEntries = signal<AuditLogEntry[]>([]);

  addToAuditLog(action: 'submit' | 'save'): void {
    // Add audit log entry logic can go here or be triggered from child
    this.auditLogEntries.update(entries => [
      ...entries,
      {
        id: crypto.randomUUID(),
        userName: 'Current User',
        action,
        timestamp: new Date().toISOString()
      }
    ]);
  }
}
