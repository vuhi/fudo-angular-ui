export enum Mode {
  Edit = 'edit',
  Create = 'create',
  Delete = 'delete'
}

export interface ModalData<T> {
  name: string;
  index: number;
  mode: Mode;
  value?: T;
}
