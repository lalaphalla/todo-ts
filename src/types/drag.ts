import { DragEvent } from 'react';

export interface DragStart {
  dragStartHandler: (event: DragEvent, id: string) => void;
}
export interface Drop {
  dropOverHandler: (event: DragEvent) => void;
  dropHandler: (event: DragEvent, completed: boolean) => void;
}
