class Logger {
  public static log(message?: any, ...optionalParams: any[]) {
    console.log(`%c[WARN]:%c ${message}`, "color: #57c0f0", "", ...optionalParams);
  }

  public static warn(message?: any, ...optionalParams: any[]) {
    console.log(`%c[WARN]:%c ${message}`, "color: #ef721f", "", ...optionalParams);
  }

  public static error(message?: any, ...optionalParams: any[]) {
    console.log(`%c[ERROR]:%c ${message}`, "color: #a41117", "", ...optionalParams);
  }
}

export default Logger;
