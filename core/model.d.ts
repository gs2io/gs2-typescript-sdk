import IGs2Credential from './interface/IGs2Credential';
import IModel from './interface/IModel';
export declare class BasicGs2Credential implements IGs2Credential {
    clientId: string;
    clientSecret: string;
    constructor(clientId: string, clientSecret: string);
}
export declare const STEADY_CONNECT_TIMEOUT_MS = 5000;
export declare const STEADY_CONNECT_TIMEOUT_CODE = "GS2_STEADY_CONNECT_TIMEOUT";
export declare function normalizeSteadyEndpoint(value?: string | null): string;
export declare function steadyRestTemplate(steadyEndpoint?: string | null): string;
export declare function steadyWebSocketUrl(steadyEndpoint?: string | null): string;
export declare function isSteadyUrl(steadyEndpoint: string | null | undefined, url: string): boolean;
export declare function steadyRestUrl(steadyEndpoint: string | null | undefined, region: string, url: string): string;
export declare function isConnectFailure(error: any): boolean;
export interface SteadyAgents {
    http: any;
    https: any;
}
export declare function steadyAgents(timeoutMs: number): SteadyAgents | null;
export interface Gs2RestSessionOptions {
    /** リクエストボディをgzip圧縮して送信するかどうか（デフォルト: true） */
    compressRequest?: boolean;
    /** レスポンスのgzip展開を受け入れるかどうか（デフォルト: true） */
    acceptGzipResponse?: boolean;
    steadyEndpoint?: string;
    steadyConnectTimeoutMs?: number;
}
export declare class Gs2RestSession {
    credential: IGs2Credential;
    region: string;
    projectToken: string | null;
    expiresAt: number | null;
    compressRequest: boolean;
    acceptGzipResponse: boolean;
    steadyEndpoint: string;
    steadyConnectTimeoutMs: number;
    constructor(credential: IGs2Credential, region: string, options?: Gs2RestSessionOptions);
    endpointHost(service: string): string;
    connect(): Promise<LoginResult> | undefined;
    disconnect(): void;
}
export declare class ConnectionBrokenError extends Error {
    constructor(detail?: string);
}
export interface Gs2WebSocketSessionOptions {
    steadyEndpoint?: string;
    steadyConnectTimeoutMs?: number;
}
export declare class Gs2WebSocketSession {
    credential: IGs2Credential;
    private client;
    region: string;
    projectToken: string | null;
    expiresAt: number | null;
    steadyEndpoint: string;
    steadyConnectTimeoutMs: number;
    private pendingRequests;
    private onOpenHandlers;
    private onErrorHandlers;
    private onCloseHandlers;
    private onNotificationHandlers;
    constructor(credential: IGs2Credential, region: string, options?: Gs2WebSocketSessionOptions);
    webSocketUrl(): string;
    webSocketOptions(): {
        handshakeTimeout: number;
    } | undefined;
    endpointHost(service: string): string;
    connect(): Promise<any>;
    private takePending;
    private failPending;
    private dropConnection;
    send(service: string, component: string, func: string, payload: any): Promise<any>;
    onOpen(func: (ev: Event) => any): void;
    onError(func: (ev: Event) => any): void;
    onClose(func: (ev: CloseEvent) => any): void;
    onNotification(func: (message: {
        subject: string;
        issuer: string;
        payload: any;
    }) => any): void;
    disconnect(): Promise<any>;
}
declare class LoginResult {
    accessToken: string;
    tokenType: string;
    expiresIn: number;
    constructor(data?: {
        [key: string]: any;
    });
}
export declare class ProjectToken implements IModel {
    token: string | null;
    expiresAt: number | null;
    constructor(data: {
        [key: string]: any;
    });
}
export declare class ProjectTokenGs2Credential implements IGs2Credential {
    clientId: string;
    projectToken: string;
    constructor(clientId: string, projectToken: string);
}
export declare const Gs2Constant: {
    ENDPOINT_HOST: string;
    WS_ENDPOINT_HOST: string;
};
export declare const Region: {
    AP_NORTHEAST_1: string;
    US_EAST_1: string;
    EU_WEST_1: string;
    AP_SOUTHEAST_1: string;
};
export {};
