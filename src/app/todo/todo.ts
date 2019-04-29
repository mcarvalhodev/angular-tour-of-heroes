export class Todo {
  id: number;
  title: string;
  done: boolean = false;

  constructor(objeto?) {
    Object.assign(this, objeto);
  }
}
