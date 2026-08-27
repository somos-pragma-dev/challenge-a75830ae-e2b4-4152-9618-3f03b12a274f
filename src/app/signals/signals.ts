import { signal } from '@angular/core';

export function createSignal<T>(initialValue: T): Signal<T> {
  return signal(initialValue);
}