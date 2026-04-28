import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

export interface AuditLogEntry {
  id: string;
  userName: string;
  action: 'save' | 'submit';
  timestamp: string;
}

@Component({
  selector: 'app-audit-log',
  imports: [CommonModule, MatIconModule],
  styleUrl: './audit-log.component.css',
  templateUrl: './audit-log.component.html',
})
export class AuditLogComponent {
  entries = input.required<AuditLogEntry[]>();
}
