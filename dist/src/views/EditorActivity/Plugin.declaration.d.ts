declare const d = "\n/**\n * Initialize the plugin\n * @param callback `plugin` to get the plugin name\n * @param options \n */\ndeclare function initFile(callback: (plugin: HWPlugin) => void, options?: PluginOptions): void;\n\n/**\n * Initialize the plugin\n * @param callback `plugin` to get the plugin name\n */\ndeclare function initFile(callback: (plugin: HWPlugin) => void, options: PluginOptions): void;\n\n/**\n * Requires an file and will directly executed\n * @param path \n */\ndeclare function require(path: any): void;\n\ndeclare const __dirname: string;\n\ninterface PluginOptions {\n    /**\n     * Requires an selected version above {version}\n     */\n    requireVersion: number | undefined;\n}\n\ninterface ListOptions {\n    key?: string;\n    disabled?: boolean | any;\n    id?: string;\n    style?: React.CSSProperties;\n    expandableContent?: JSX.Element | HTMLElement | string | undefined;\n    expandable?: boolean;\n    tappable?: boolean;\n    modifier?: string;\n    helper?: Helper;\n    type: \"switch\" | \"select\" | \"\";\n    text: string;\n    /**\n     * Performs an onClick event to the current list item\n     */\n    onClick?: Function;\n    selectValue?: SelectValue[];\n    icon?: string;\n    selectDefaultValue?: string;\n    switchDefaultValue?: boolean;\n    /**\n     *\n     * @param {Event} e Event\n     * @param {String} key Returns the key\n     * @param {Void} keepDefaultFuntion This will keep the default function\n     */\n    callback?(e?: any, key?: string | undefined, keepDefaultFuntion?: void): void;\n  }\n  \n  interface Helper {\n    text: string;\n    cancelable?: boolean;\n  }\n  \n  interface SelectValue {\n    text: string;\n    value: string;\n    disabled?: boolean;\n  }\n  \n  interface ListInterface {\n    title: string;\n    id?: string;\n    style?: React.CSSProperties;\n    className?: string;\n    content: ListOptions[];\n  }\n\ndeclare class HWPlugin {\n    private pluginErrorString;\n    private pluginName;\n    constructor(pluginName: string);\n    addSettings(items: ListInterface[]): void;\n    removeSettings(): void;\n    setPluginPref(key: string, content: string): void;\n    getPluginPref(key: string): string;\n    removePluginPref(key: string): void;\n    getSelectedHardDevice(): string;\n    require(path: any): void;\n    library(url: string): void;\n    strings(globals: any): any;\n    private checkLanguage;\n    func(func: {\n        name: string;\n        args: string;\n        callback: string;\n        run: string;\n    }): void;\n    loadCSS(x: any): void;\n    loadCSSfromFile(path: string): void;\n    readFile(path: string, options?: {\n        parse: {\n            use: boolean;\n            mode: \"json\" | \"yaml\";\n        };\n    }): string | any;\n    mkDir(path: string): void;\n    writeFile(path: string, content: string): void;\n    isFileExist(path: string): boolean;\n    get getAuthor(): string;\n    get getVersion(): string;\n    get getLanguage(): string;\n    get getDescription(): string;\n}\n\ndeclare class tools {\n    /**\n     * Easy use undefined\n     */\n    static readonly undefined: undefined;\n    /**\n     * Converts an string into boolean\n     * @param string\n     * @returns {Boolean}\n     */\n    static stringToBoolean(string: string): boolean;\n    /**\n     * Returns a reference to the first object with the specified value of the ID attribute.\n     * @param id String that specifies the ID value.\n     * @deprecated\n     *\n     * Use\n     * ```ts\n     * tools.ref(\"element\", (element: HTMLElement) => { element.style.display = \"none\" })\n     * ```\n     */\n    static getElementById(id: string, callback: Function): void;\n    /**\n     * Simplfied\n     * @param id\n     * @param callback HTMLElement\n     */\n    static ref(id: any, callback: Function): void;\n    static gesture(e: any, eventName: \"drag\" | \"dragleft\" | \"dragright\" | \"dragup\" | \"dragdown\" | \"hold\" | \"release\" | \"swipe\" | \"swipeleft\" | \"swiperight\" | \"swipeup\" | \"swipedown\" | \"tap\" | \"doubletap\" | \"touch\" | \"transform\" | \"pinch\" | \"pinchin\" | \"pinchout\" | \"rotate\", callback: Function): void;\n    /**\n     * Inline IF statement\n     * @deprecated Use the normal inline if statement\n     */\n    static typeIF(_: any, __: any, ___: any): any;\n    static getMisc(url: string, callback: Function, options?: {\n        json: boolean;\n    }): void;\n    static inViewport(element: any): boolean;\n    static PluginInitial(folder: string): void;\n    static if(item: {\n        wenn: any;\n        dann: any;\n        fehler: any;\n    }): any;\n    static arrayRemove(arr: any, position: any): any;\n    static typeCheck(_: any, __: any): any;\n    static getUrlParam(param: string): string;\n}\n\n/**\n * Native calls for Windows and Android\n */\ndeclare class native {\n    private static readonly userAgentAndroid;\n    private static readonly userAgentWindows;\n    static readonly userAgent: string;\n    static readonly isWindows: boolean;\n    static readonly isAndroid: boolean;\n    static readonly isInstagram: boolean;\n    static readonly isFacebook: boolean;\n    static readonly isIframe: boolean;\n    static readonly isSmartTV: boolean;\n    static readonly isConsole: boolean;\n    static readonly isWearable: boolean;\n    static readonly isEmbedded: boolean;\n    static readonly isMobileSafari: boolean;\n    static readonly isChromium: boolean;\n    static readonly isMobile: boolean;\n    static readonly isMobileOnly: boolean;\n    static readonly isTablet: boolean;\n    static readonly isBrowser: boolean;\n    static readonly isDesktop: boolean;\n    static readonly isWinPhone: boolean;\n    static readonly isIOS: boolean;\n    static readonly isChrome: boolean;\n    static readonly isFirefox: boolean;\n    static readonly isSafari: boolean;\n    static readonly isOpera: boolean;\n    static readonly isIE: boolean;\n    static readonly browserVersion: string;\n    static readonly browserName: string;\n    static readonly mobileVendor: string;\n    static readonly mobileModel: string;\n    static readonly engineName: string;\n    static readonly engineVersion: string;\n    static readonly isEdge: boolean;\n    static readonly isYandex: boolean;\n    static readonly deviceType: string;\n    static readonly isIOS13: boolean;\n    static readonly isIPad13: boolean;\n    static readonly isIPhone13: boolean;\n    static readonly isIPod13: boolean;\n    static readonly isElectron: boolean;\n    static readonly isEdgeChromium: boolean;\n    static readonly isMacOs: boolean;\n    static readonly isMIUI: boolean;\n    static readonly isSamsungBrowser: boolean;\n    static readonly checkPlatformForBorderStyle: string;\n    static navigator: Navigator;\n    static location: Location;\n    /**\n     * Get the Android userAgent\n     * @deprecated Use `native.isAndroid`\n     */\n    static userAgentEqualAndroid(state: boolean): boolean;\n    /**\n     * Get the Windows userAgent\n     * @deprecated Use `native.isWindows`\n     */\n    static userAgentEqualWindows(state: boolean): boolean;\n    static get getBuildMANUFACTURER(): string;\n    static get getMODEL(): string;\n    /**\n     * Reloads native the app\n     * @returns\n     */\n    static reload(): void;\n    static dialog(props: {\n        title: string;\n        message: string;\n    }): void;\n    /**\n     * Copy an string to clipboard on Android\n     * @param content\n     */\n    static copyClipborad(content: string): void;\n    static alert(message?: any): void;\n    static confirm(message?: string | undefined): boolean;\n    static prompt(message?: string | undefined, _default?: string | undefined): string | null;\n    /**\n     * Download an anime picture\n     * @param filename\n     * @param downloadUrlOfImage\n     * @param id\n     */\n    static downloadPicture(downloadUrlOfImage: string, filename?: string, id?: any): void;\n    /**\n     * Set an saved key from localstorage or shared prefs\n     * @param key\n     * @param content\n     */\n    static setPref(key: string, content: string): void;\n    /**\n     * Get an saved key from localstorage or shared prefs\n     * @param key\n     * @returns\n     */\n    static getPref(key: string): string;\n    /**\n     * Shortcut functions to the cipher's object interface.\n     *\n     * @example\n     *\n     *     native.AES.encrypt(text, password);\n     *     native.AES.decrypt(text, password);\n     */\n    static AES: {\n        encrypt(text: string, password: string): string;\n        decrypt(text: string, password: string): string;\n    };\n    /**\n     * Remove an saved key from localstorage or shared prefs\n     * @param key\n     */\n    static removePref(key: string): void;\n    static readonly version: {\n        readonly get: string;\n        require(version: number): boolean;\n    };\n    /**\n     * Open an link specified by the platform\n     * @param link\n     * @param target\n     */\n    static open(link: string, target?: string): void;\n    /**\n     * Closes the app\n     */\n    static close(): void;\n    /**\n     * Evaluates JavaScript code and executes it.\n     * @param javascriptString A String value that contains valid JavaScript code.\n     */\n    static eval(javascriptString: string, extras: any): void;\n    /**\n     * Methods that are here can only used on Windows\n     */\n    static readonly electron: {\n        userAgentAndroid: string;\n        userAgentWindows: string;\n        agent: string;\n        newWindow: (url: string, options: BrowserWindowConstructorOptions) => void;\n        /**\n         *\n         * @param state\n         */\n        discordRPC(state: string): void;\n        addEventListener(event: string, callback: Function): void;\n        /**\n         * Opens the devtools.\n         *\n         * When `contents` is a `<webview>` tag, the `mode` would be `detach` by default,\n         * explicitly passing an empty `mode` can force using last used dock state.\n         */\n        openDevTools(): void;\n        /**\n         * Closes the devtools.\n         */\n        closeDevTools(): void;\n        notification(title: string, body: string): void;\n    };\n    /**\n     * Methods that are here can only used on Android\n     */\n    static readonly android: {\n        userAgentAndroid: string;\n        userAgentWindows: string;\n        agent: string;\n        setStatusbarColor(color: string): void;\n        setStatusbarBackgroundWhite(): void;\n        keepScreenOn(): void;\n        hasBiometricEnrolled(): boolean;\n        isHardwareAvailable(): boolean;\n        /**\n         * Check if has write permission\n         * @returns {boolean}\n         */\n        hasStoragePermission(): boolean;\n        /**\n         * request permission\n         */\n        requestPermission(): void;\n        requireSDK(sdk: number): boolean;\n    };\n    /**\n     * The fs class enables interacting with the file system on both platforms, Windows and Android\n     */\n    static readonly fs: {\n        userAgentAndroid: string;\n        userAgentWindows: string;\n        agent: string;\n        readFile(path: string, options?: {\n            parse: {\n                use: boolean;\n                mode: \"json\" | \"yaml\";\n            };\n        } | undefined): string | any;\n        mkDir(path: string): void;\n        writeFile(path: string, content: string): void;\n        isFileExist(path: string): boolean;\n    };\n}\n\ninterface BrowserWindowConstructorOptions {\n    /**\n     * Loads an file from the app\n     */\n    loadLocal?: boolean;\n    /**\n     * Window's width in pixels. Default is `800`.\n     */\n    width?: number;\n    /**\n     * Window's height in pixels. Default is `600`.\n     */\n    height?: number;\n    /**\n     * (**required** if y is used) Window's left offset from screen. Default is to\n     * center the window.\n     */\n    x?: number;\n    /**\n     * (**required** if x is used) Window's top offset from screen. Default is to\n     * center the window.\n     */\n    y?: number;\n    /**\n     * The `width` and `height` would be used as web page's size, which means the\n     * actual window's size will include window frame's size and be slightly larger.\n     * Default is `false`.\n     */\n    useContentSize?: boolean;\n    /**\n     * Show window in the center of the screen.\n     */\n    center?: boolean;\n    /**\n     * Window's minimum width. Default is `0`.\n     */\n    minWidth?: number;\n    /**\n     * Window's minimum height. Default is `0`.\n     */\n    minHeight?: number;\n    /**\n     * Window's maximum width. Default is no limit.\n     */\n    maxWidth?: number;\n    /**\n     * Window's maximum height. Default is no limit.\n     */\n    maxHeight?: number;\n    /**\n     * Whether window is resizable. Default is `true`.\n     */\n    resizable?: boolean;\n    /**\n     * Whether window is movable. This is not implemented on Linux. Default is `true`.\n     */\n    movable?: boolean;\n    /**\n     * Whether window is minimizable. This is not implemented on Linux. Default is\n     * `true`.\n     */\n    minimizable?: boolean;\n    /**\n     * Whether window is maximizable. This is not implemented on Linux. Default is\n     * `true`.\n     */\n    maximizable?: boolean;\n    /**\n     * Whether window is closable. This is not implemented on Linux. Default is `true`.\n     */\n    closable?: boolean;\n    /**\n     * Whether the window can be focused. Default is `true`. On Windows setting\n     * `focusable: false` also implies setting `skipTaskbar: true`. On Linux setting\n     * `focusable: false` makes the window stop interacting with wm, so the window will\n     * always stay on top in all workspaces.\n     */\n    focusable?: boolean;\n    /**\n     * Whether the window should always stay on top of other windows. Default is\n     * `false`.\n     */\n    alwaysOnTop?: boolean;\n    /**\n     * Whether the window should show in fullscreen. When explicitly set to `false` the\n     * fullscreen button will be hidden or disabled on macOS. Default is `false`.\n     */\n    fullscreen?: boolean;\n    /**\n     * Whether the window can be put into fullscreen mode. On macOS, also whether the\n     * maximize/zoom button should toggle full screen mode or maximize window. Default\n     * is `true`.\n     */\n    fullscreenable?: boolean;\n    /**\n     * Use pre-Lion fullscreen on macOS. Default is `false`.\n     */\n    simpleFullscreen?: boolean;\n    /**\n     * Whether to show the window in taskbar. Default is `false`.\n     */\n    skipTaskbar?: boolean;\n    /**\n     * Whether the window is in kiosk mode. Default is `false`.\n     */\n    kiosk?: boolean;\n    /**\n     * Default window title. Default is `\"Electron\"`. If the HTML tag `<title>` is\n     * defined in the HTML file loaded by `loadURL()`, this property will be ignored.\n     */\n    title?: string;\n    /**\n     * The window icon. On Windows it is recommended to use `ICO` icons to get best\n     * visual effects, you can also leave it undefined so the executable's icon will be\n     * used.\n     */\n    icon?: any | string;\n    /**\n     * Whether window should be shown when created. Default is `true`.\n     */\n    show?: boolean;\n    /**\n     * Whether the renderer should be active when `show` is `false` and it has just\n     * been created.  In order for `document.visibilityState` to work correctly on\n     * first load with `show: false` you should set this to `false`.  Setting this to\n     * `false` will cause the `ready-to-show` event to not fire.  Default is `true`.\n     */\n    paintWhenInitiallyHidden?: boolean;\n    /**\n     * Specify `false` to create a frameless window. Default is `true`.\n     */\n    frame?: boolean;\n    /**\n     * Specify parent window. Default is `null`.\n     */\n    parent?: any;\n    /**\n     * Whether this is a modal window. This only works when the window is a child\n     * window. Default is `false`.\n     */\n    modal?: boolean;\n    /**\n     * Whether clicking an inactive window will also click through to the web contents.\n     * Default is `false` on macOS. This option is not configurable on other platforms.\n     */\n    acceptFirstMouse?: boolean;\n    /**\n     * Whether to hide cursor when typing. Default is `false`.\n     */\n    disableAutoHideCursor?: boolean;\n    /**\n     * Auto hide the menu bar unless the `Alt` key is pressed. Default is `false`.\n     */\n    autoHideMenuBar?: boolean;\n    /**\n     * Enable the window to be resized larger than screen. Only relevant for macOS, as\n     * other OSes allow larger-than-screen windows by default. Default is `false`.\n     */\n    enableLargerThanScreen?: boolean;\n    /**\n     * Window's background color as a hexadecimal value, like `#66CD00` or `#FFF` or\n     * `#80FFFFFF` (alpha in #AARRGGBB format is supported if `transparent` is set to\n     * `true`). Default is `#FFF` (white).\n     */\n    backgroundColor?: string;\n    /**\n     * Whether window should have a shadow. Default is `true`.\n     */\n    hasShadow?: boolean;\n    /**\n     * Set the initial opacity of the window, between 0.0 (fully transparent) and 1.0\n     * (fully opaque). This is only implemented on Windows and macOS.\n     */\n    opacity?: number;\n    /**\n     * Forces using dark theme for the window, only works on some GTK+3 desktop\n     * environments. Default is `false`.\n     */\n    darkTheme?: boolean;\n    /**\n     * Makes the window transparent. Default is `false`. On Windows, does not work\n     * unless the window is frameless.\n     */\n    transparent?: boolean;\n    /**\n     * The type of window, default is normal window. See more about this below.\n     */\n    type?: string;\n    /**\n     * Specify how the material appearance should reflect window activity state on\n     * macOS. Must be used with the `vibrancy` property. Possible values are:\n     */\n    visualEffectState?: \"followWindow\" | \"active\" | \"inactive\";\n    /**\n     * The style of window title bar. Default is `default`. Possible values are:\n     *\n     * @platform darwin,win32\n     */\n    titleBarStyle?: \"default\" | \"hidden\" | \"hiddenInset\" | \"customButtonsOnHover\";\n    /**\n     * Set a custom position for the traffic light buttons in frameless windows.\n     */\n    trafficLightPosition?: any;\n    /**\n     * Whether frameless window should have rounded corners on macOS. Default is\n     * `true`.\n     */\n    roundedCorners?: boolean;\n    /**\n     * Shows the title in the title bar in full screen mode on macOS for `hiddenInset`\n     * titleBarStyle. Default is `false`.\n     *\n     * @deprecated\n     */\n    fullscreenWindowTitle?: boolean;\n    /**\n     * Use `WS_THICKFRAME` style for frameless windows on Windows, which adds standard\n     * window frame. Setting it to `false` will remove window shadow and window\n     * animations. Default is `true`.\n     */\n    thickFrame?: boolean;\n    /**\n     * Add a type of vibrancy effect to the window, only on macOS. Can be\n     * `appearance-based`, `light`, `dark`, `titlebar`, `selection`, `menu`, `popover`,\n     * `sidebar`, `medium-light`, `ultra-dark`, `header`, `sheet`, `window`, `hud`,\n     * `fullscreen-ui`, `tooltip`, `content`, `under-window`, or `under-page`. Please\n     * note that `appearance-based`, `light`, `dark`, `medium-light`, and `ultra-dark`\n     * are deprecated and have been removed in macOS Catalina (10.15).\n     */\n    vibrancy?:\n      | \"appearance-based\"\n      | \"light\"\n      | \"dark\"\n      | \"titlebar\"\n      | \"selection\"\n      | \"menu\"\n      | \"popover\"\n      | \"sidebar\"\n      | \"medium-light\"\n      | \"ultra-dark\"\n      | \"header\"\n      | \"sheet\"\n      | \"window\"\n      | \"hud\"\n      | \"fullscreen-ui\"\n      | \"tooltip\"\n      | \"content\"\n      | \"under-window\"\n      | \"under-page\";\n    /**\n     * Controls the behavior on macOS when option-clicking the green stoplight button\n     * on the toolbar or by clicking the Window > Zoom menu item. If `true`, the window\n     * will grow to the preferred width of the web page when zoomed, `false` will cause\n     * it to zoom to the width of the screen. This will also affect the behavior when\n     * calling `maximize()` directly. Default is `false`.\n     */\n    zoomToPageWidth?: boolean;\n    /**\n     * Tab group name, allows opening the window as a native tab on macOS 10.12+.\n     * Windows with the same tabbing identifier will be grouped together. This also\n     * adds a native new tab button to your window's tab bar and allows your `app` and\n     * window to receive the `new-window-for-tab` event.\n     */\n    tabbingIdentifier?: string;\n    /**\n     * Settings of web page's features.\n     */\n    webPreferences?: WebPreferences;\n    /**\n     *  When using a frameless window in conjuction with\n     * `win.setWindowButtonVisibility(true)` on macOS or using a `titleBarStyle` so\n     * that the standard window controls (\"traffic lights\" on macOS) are visible, this\n     * property enables the Window Controls Overlay JavaScript APIs and CSS Environment\n     * Variables. Specifying `true` will result in an overlay with default system\n     * colors. Default is `false`.\n     */\n    titleBarOverlay?: any | boolean;\n  }\n  \n  interface WebPreferences {\n    /**\n     * Whether to enable DevTools. If it is set to `false`, can not use\n     * `BrowserWindow.webContents.openDevTools()` to open DevTools. Default is `true`.\n     */\n    devTools?: boolean;\n    /**\n     * Whether node integration is enabled. Default is `false`.\n     */\n    nodeIntegration?: boolean;\n    /**\n     * Whether node integration is enabled in web workers. Default is `false`. More\n     * about this can be found in Multithreading.\n     */\n    nodeIntegrationInWorker?: boolean;\n    /**\n     * Experimental option for enabling Node.js support in sub-frames such as iframes\n     * and child windows. All your preloads will load for every iframe, you can use\n     * `process.isMainFrame` to determine if you are in the main frame or not.\n     */\n    nodeIntegrationInSubFrames?: boolean;\n    /**\n     * Specifies a script that will be loaded before other scripts run in the page.\n     * This script will always have access to node APIs no matter whether node\n     * integration is turned on or off. The value should be the absolute file path to\n     * the script. When node integration is turned off, the preload script can\n     * reintroduce Node global symbols back to the global scope. See example here.\n     */\n    preload?: string;\n    /**\n     * If set, this will sandbox the renderer associated with the window, making it\n     * compatible with the Chromium OS-level sandbox and disabling the Node.js engine.\n     * This is not the same as the `nodeIntegration` option and the APIs available to\n     * the preload script are more limited. Read more about the option here.\n     */\n    sandbox?: boolean;\n    /**\n     * Sets the session used by the page. Instead of passing the Session object\n     * directly, you can also choose to use the `partition` option instead, which\n     * accepts a partition string. When both `session` and `partition` are provided,\n     * `session` will be preferred. Default is the default session.\n     */\n    session?: any;\n    /**\n     * Sets the session used by the page according to the session's partition string.\n     * If `partition` starts with `persist:`, the page will use a persistent session\n     * available to all pages in the app with the same `partition`. If there is no\n     * `persist:` prefix, the page will use an in-memory session. By assigning the same\n     * `partition`, multiple pages can share the same session. Default is the default\n     * session.\n     */\n    partition?: string;\n    /**\n     * The default zoom factor of the page, `3.0` represents `300%`. Default is `1.0`.\n     */\n    zoomFactor?: number;\n    /**\n     * Enables JavaScript support. Default is `true`.\n     */\n    javascript?: boolean;\n    /**\n     * When `false`, it will disable the same-origin policy (usually using testing\n     * websites by people), and set `allowRunningInsecureContent` to `true` if this\n     * options has not been set by user. Default is `true`.\n     */\n    webSecurity?: boolean;\n    /**\n     * Allow an https page to run JavaScript, CSS or plugins from http URLs. Default is\n     * `false`.\n     */\n    allowRunningInsecureContent?: boolean;\n    /**\n     * Enables image support. Default is `true`.\n     */\n    images?: boolean;\n    /**\n     * Specifies how to run image animations (E.g. GIFs).  Can be `animate`,\n     * `animateOnce` or `noAnimation`.  Default is `animate`.\n     */\n    imageAnimationPolicy?: \"animate\" | \"animateOnce\" | \"noAnimation\";\n    /**\n     * Make TextArea elements resizable. Default is `true`.\n     */\n    textAreasAreResizable?: boolean;\n    /**\n     * Enables WebGL support. Default is `true`.\n     */\n    webgl?: boolean;\n    /**\n     * Whether plugins should be enabled. Default is `false`.\n     */\n    plugins?: boolean;\n    /**\n     * Enables Chromium's experimental features. Default is `false`.\n     */\n    experimentalFeatures?: boolean;\n    /**\n     * Enables scroll bounce (rubber banding) effect on macOS. Default is `false`.\n     */\n    scrollBounce?: boolean;\n    /**\n     * A list of feature strings separated by `,`, like `CSSVariables,KeyboardEventKey`\n     * to enable. The full list of supported feature strings can be found in the\n     * RuntimeEnabledFeatures.json5 file.\n     */\n    enableBlinkFeatures?: string;\n    /**\n     * A list of feature strings separated by `,`, like `CSSVariables,KeyboardEventKey`\n     * to disable. The full list of supported feature strings can be found in the\n     * RuntimeEnabledFeatures.json5 file.\n     */\n    disableBlinkFeatures?: string;\n    /**\n     * Sets the default font for the font-family.\n     */\n    defaultFontFamily?: any;\n    /**\n     * Defaults to `16`.\n     */\n    defaultFontSize?: number;\n    /**\n     * Defaults to `13`.\n     */\n    defaultMonospaceFontSize?: number;\n    /**\n     * Defaults to `0`.\n     */\n    minimumFontSize?: number;\n    /**\n     * Defaults to `ISO-8859-1`.\n     */\n    defaultEncoding?: string;\n    /**\n     * Whether to throttle animations and timers when the page becomes background. This\n     * also affects the Page Visibility API. Defaults to `true`.\n     */\n    backgroundThrottling?: boolean;\n    /**\n     * Whether to enable offscreen rendering for the browser window. Defaults to\n     * `false`. See the offscreen rendering tutorial for more details.\n     */\n    offscreen?: boolean;\n    /**\n     * Whether to run Electron APIs and the specified `preload` script in a separate\n     * JavaScript context. Defaults to `true`. The context that the `preload` script\n     * runs in will only have access to its own dedicated `document` and `window`\n     * globals, as well as its own set of JavaScript builtins (`Array`, `Object`,\n     * `JSON`, etc.), which are all invisible to the loaded content. The Electron API\n     * will only be available in the `preload` script and not the loaded page. This\n     * option should be used when loading potentially untrusted remote content to\n     * ensure the loaded content cannot tamper with the `preload` script and any\n     * Electron APIs being used.  This option uses the same technique used by Chrome\n     * Content Scripts.  You can access this context in the dev tools by selecting the\n     * 'Electron Isolated Context' entry in the combo box at the top of the Console\n     * tab.\n     */\n    contextIsolation?: boolean;\n    /**\n     * Whether to use native `window.open()`. Defaults to `true`. Child windows will\n     * always have node integration disabled unless `nodeIntegrationInSubFrames` is\n     * true.\n     */\n    nativeWindowOpen?: boolean;\n    /**\n     * Whether to enable the `<webview>` tag. Defaults to `false`. **Note:** The\n     * `preload` script configured for the `<webview>` will have node integration\n     * enabled when it is executed so you should ensure remote/untrusted content is not\n     * able to create a `<webview>` tag with a possibly malicious `preload` script. You\n     * can use the `will-attach-webview` event on webContents to strip away the\n     * `preload` script and to validate or alter the `<webview>`'s initial settings.\n     */\n    webviewTag?: boolean;\n    /**\n     * A list of strings that will be appended to `process.argv` in the renderer\n     * process of this app.  Useful for passing small bits of data down to renderer\n     * process preload scripts.\n     */\n    additionalArguments?: string[];\n    /**\n     * Whether to enable browser style consecutive dialog protection. Default is\n     * `false`.\n     */\n    safeDialogs?: boolean;\n    /**\n     * The message to display when consecutive dialog protection is triggered. If not\n     * defined the default message would be used, note that currently the default\n     * message is in English and not localized.\n     */\n    safeDialogsMessage?: string;\n    /**\n     * Whether to disable dialogs completely. Overrides `safeDialogs`. Default is\n     * `false`.\n     */\n    disableDialogs?: boolean;\n    /**\n     * Whether dragging and dropping a file or link onto the page causes a navigation.\n     * Default is `false`.\n     */\n    navigateOnDragDrop?: boolean;\n    /**\n     * Autoplay policy to apply to content in the window, can be\n     * `no-user-gesture-required`, `user-gesture-required`,\n     * `document-user-activation-required`. Defaults to `no-user-gesture-required`.\n     */\n    autoplayPolicy?: \"no-user-gesture-required\" | \"user-gesture-required\" | \"document-user-activation-required\";\n    /**\n     * Whether to prevent the window from resizing when entering HTML Fullscreen.\n     * Default is `false`.\n     */\n    disableHtmlFullscreenWindowResize?: boolean;\n    /**\n     * An alternative title string provided only to accessibility tools such as screen\n     * readers. This string is not directly visible to users.\n     */\n    accessibleTitle?: string;\n    /**\n     * Whether to enable the builtin spellchecker. Default is `true`.\n     */\n    spellcheck?: boolean;\n    /**\n     * Whether to enable the WebSQL api. Default is `true`.\n     */\n    enableWebSQL?: boolean;\n    /**\n     * Enforces the v8 code caching policy used by blink. Accepted values are\n     */\n    v8CacheOptions?: \"none\" | \"code\" | \"bypassHeatCheck\" | \"bypassHeatCheckAndEagerCompile\";\n    /**\n     * Whether to enable preferred size mode. The preferred size is the minimum size\n     * needed to contain the layout of the document\u2014without requiring scrolling.\n     * Enabling this will cause the `preferred-size-changed` event to be emitted on the\n     * `WebContents` when the preferred size changes. Default is `false`.\n     */\n    enablePreferredSizeMode?: boolean;\n  }\n";
export default d;
