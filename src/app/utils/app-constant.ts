
import { Tag, TagColor } from '../models';

// tslint:disable-next-line:max-line-length
export const URL_PATTERN = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)(([a-z0-9]+).)([a-z0-9]|[a-z0-9][a-z0-9-]*[a-z0-9])(:[0-9]{1,5})?(\/.*)?$';
export const DEFAULT_TAG: Tag = { name: 'Fudo', color: TagColor.Black };
export const LIMITED_TAG = 10;


