/**
 * @Native
 */
interface Windows {
  /**
   * Open an new window in the desktop app
   * @param width
   * @param height
   * @param uri
   */
  newWindow(width: number, height: number, uri: string): void;

  /**
   * Closes the desktop app
   */
  close(): void;

  /**
   * Minimizes thedesktop app
   */
  minimize(): void;

  /**
   * Maximize the window
   */
  maximize(): void;

  /**
   * Opens an link in browser
   * @param link
   */
  open(link: string): void;

  /**
   * Sets an saved string in Windows app
   * @param key
   * @param value
   */
  setPref(key: string, value: any): void;

  /**
   * Gets an saved string in Windows app
   * @param key
   */
  getPref(key: string): string;

  /**
   * Removes an saved string in Windows app
   * @param key
   */
  removePref(key: string): void;

  /**
   * Reload the windows
   */
  reload(): void;

  /**
   *
   * @param shortcut
   * @param callbacl
   */
  registerShortcut(shortcut: string, callback?: Function): void;

  /**
   *
   * @param shortcut
   */
  isRegisteredShortcut(shortcut: string): boolean;

  /**
   *
   * @param shortcut
   */
  unregisterShortcut(shortcut: string): void;

  /**
   *
   * @param width
   * @param height
   */
  setWindowSize(width: number, height: number): void;
}

export default Windows;