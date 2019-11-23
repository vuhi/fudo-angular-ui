export enum ModalMode {
  Edit = 'edit',
  Create = 'create'
}

export interface ModalData<T> {
  name: string;
  index: number;
  mode: ModalMode;
  value?: T;
}
