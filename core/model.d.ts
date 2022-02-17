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
};
export declare const Region: {
    AP_NORTHEAST_1: string;
    US_EAST_1: string;
    EU_WEST_1: string;
    AP_SOUTHEAST_1: string;
};
export {};
