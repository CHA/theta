import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {

  constructor() { }

  set(key: string, val: any) {
    localStorage.setItem(key, JSON.stringify(val));
  }

  get<T>(key: string): T {
    return JSON.parse(localStorage.getItem(key)) as T;
  }

  remove(key: string) {
    localStorage.removeItem(key);
  }

}
