import { Injectable } from '@angular/core';
import { ChipItem } from '../models/chip-item';

@Injectable({ providedIn: 'root' })
export class ReferenceDataService {

  constructor() { }

  getTravelStyles(): ChipItem[] {
    return [
      { label: 'Adventure', preIcon: 'bicycle', postIcon: '', color: 'primary' },
      { label: 'Food', preIcon: 'pizza', postIcon: '', color: 'primary' },
      { label: 'Staycation', preIcon: 'bed', postIcon: '', color: 'primary' },
      { label: 'Nature', preIcon: 'flower-outline', postIcon: '', color: 'primary' },
      { label: 'Spontaneous', preIcon: 'bag', postIcon: '', color: 'primary' },
      { label: 'Nightowl', preIcon: 'wine', postIcon: '', color: 'primary' },
      { label: 'Culture', preIcon: 'image', postIcon: '', color: 'primary' },
      { label: 'Hidden Gems', preIcon: 'help', postIcon: '', color: 'primary' },
    ];
  }
}
