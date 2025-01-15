import { atom } from 'jotai';

import { TodoType } from '../types/todo';

export const todos = atom<TodoType[]>([]);