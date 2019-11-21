export interface Tag {
  name: string;
  color?: TagColor;
}

export enum TagColor {
  Blue = '#3884ff',
  Orange = '#ff9447',
  Red = '#ff4747',
  Green = '#42ed70',
  Black = '#000000',
  Gray = '#949599',
  Yellow = '#d9d566'
}

export const COLORS = ['Blue', 'Orange', 'Red', 'Green', 'Black', 'Gray', 'Yellow'];
