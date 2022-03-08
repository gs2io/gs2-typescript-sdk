import IGs2Credential from './interface/IGs2Credential';
import IModel from './interface/IModel';
export declare class BasicGs2Credential implements IGs2Credential {
    clientId: string;
    clientSecret: string;
    constructor(clientId: string, clientSecret: string);
}
export declare class Gs2RestSession {
    credential: IGs2Credential;
    region: string;
    projectToken: string | null;
    expiresAt: number | null;
    constructor(credential: IGs2Credential, region: string);
    connect(): Promise<LoginResult> | undefined;
    disconnect(): void;
}
export declare class Gs2WebSocketSession {
    credential: IGs2Credential;
    private client;
    region: string;
    projectToken: string | null;
    expiresAt: number | null;
    private inflightRequest;
    private onOpenHandlers;
    private onErrorHandlers;
    private onCloseHandlers;
    private onNotificationHandlers;
    constructor(credential: IGs2Credential, region: string);
    connect(): Promise<any>;
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
