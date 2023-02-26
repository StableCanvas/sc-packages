interface IDisposable {
  dispose(): Promise<any>;
}
declare class Disposable implements IDisposable {
  constructor();
  dispose(): Promise<any>;
  connect_disposable(disposable: IDisposable): void;
  protected when_dispose(cb: (...args: any[]) => any): Promise<void>;
  protected when_dispose_top(cb: (...args: any[]) => any): Promise<void>;
}
declare enum ExtensionStatus {
  pending = "pending",
  installed = "installed",
  initialized = "initialized",
  uninstalled = "uninstalled",
  error = "error",
}
declare class SDCExtension extends Disposable {
  desc: string;
  name: string;
  current_state: ExtensionStatus;
  lazy_initialize: boolean;
  initialize(): Promise<any>;
  install_action(): Promise<any>;
  uninstall_action(): Promise<any>;
}
declare type Constructor<K, ARGS extends any[]> = {
  new (...args: ARGS): K;
};
declare type SDCExtConstructor<ARGS extends any[]> = Constructor<
  SDCExtension,
  ARGS
>;
declare type AnySDCExtConstructor = SDCExtConstructor<any>;
declare class SDCSystem {
  static SDCExtension: new (...args: any[]) => SDCExtension;
  static register<ARGS extends any[]>(
    constructor: SDCExtConstructor<ARGS>,
    ...args: ARGS
  ): Promise<void>;
  static uninstall_inst(constructor: AnySDCExtConstructor): Promise<void>;
  /**
   * require by constructor
   */
  static require_inst<Ext extends SDCExtension>(
    constructor: Constructor<Ext, any[]>
  ): Promise<Ext>;
  /**
   * ensure_ext_initialized
   */
  static uninstall(name: string): Promise<void>;
  static require<PLUG extends SDCExtension>(name: string): Promise<PLUG>;
}

declare global {
  interface Window {
    __sc_ns__: {
      SDCSystem: typeof SDCSystem;
      SDCExtension: typeof SDCExtension;
      Disposable: typeof Disposable;
    };
  }
}

export { SDCSystem, SDCExtension, Disposable, IDisposable, ExtensionStatus };
