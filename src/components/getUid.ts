import { v4 as uuidv4 } from 'uuid';

/**
 * Generate a string uuid value.
 * Example: 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d
 * @returns A universaly unique identifier.
 */
export function getUid(): string {
  return uuidv4();
}
