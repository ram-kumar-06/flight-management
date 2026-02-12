import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly STORAGE_KEY = 'currentUser';

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(private storage: StorageService) {
    this.restoreSession();
  }

  private restoreSession(): void {
    const user = this.storage.get<User | null>(this.STORAGE_KEY, null);
    if (user && user.isActive) {
      this.currentUserSubject.next(user);
    }
  }

  login(username: string, password: string, users: User[]): Observable<User | null> {
    const found = users.find(
      u => u.username === username && u.password === password
    );

    if (found && found.isActive) {
      this.storage.set(this.STORAGE_KEY, found);
      this.currentUserSubject.next(found);
      return of(found);
    }

    return of(null);
  }

  logout(): void {
    this.storage.remove(this.STORAGE_KEY);
    this.currentUserSubject.next(null);
  }

  hasRole(minLevel: number): boolean {
    const user = this.currentUserSubject.value;
    return !!user && user.roleLevel >= minLevel;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}
