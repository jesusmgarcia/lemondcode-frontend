import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  localStorage: Storage;

  constructor() {
    this.localStorage = window.localStorage;
  }

  get(key: string): string | null {
    let value: string | null;
    value = this.localStorage.getItem(key);

    return value;
  }
  set(key: string, value: string): void {
    this.localStorage.setItem(key, value);
  }
  remove(key: string): void {
    this.localStorage.removeItem(key);
  }
}
