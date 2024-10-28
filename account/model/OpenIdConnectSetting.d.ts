import IModel from '../../core/interface/IModel';
export default class OpenIdConnectSetting implements IModel {
    private configurationPath;
    private clientId;
    private clientSecret;
    private appleTeamId;
    private appleKeyId;
    private applePrivateKeyPem;
    private doneEndpointUrl;
    getConfigurationPath(): string | null;
    setConfigurationPath(configurationPath: string | null): this;
    withConfigurationPath(configurationPath: string | null): this;
    getClientId(): string | null;
    setClientId(clientId: string | null): this;
    withClientId(clientId: string | null): this;
    getClientSecret(): string | null;
    setClientSecret(clientSecret: string | null): this;
    withClientSecret(clientSecret: string | null): this;
    getAppleTeamId(): string | null;
    setAppleTeamId(appleTeamId: string | null): this;
    withAppleTeamId(appleTeamId: string | null): this;
    getAppleKeyId(): string | null;
    setAppleKeyId(appleKeyId: string | null): this;
    withAppleKeyId(appleKeyId: string | null): this;
    getApplePrivateKeyPem(): string | null;
    setApplePrivateKeyPem(applePrivateKeyPem: string | null): this;
    withApplePrivateKeyPem(applePrivateKeyPem: string | null): this;
    getDoneEndpointUrl(): string | null;
    setDoneEndpointUrl(doneEndpointUrl: string | null): this;
    withDoneEndpointUrl(doneEndpointUrl: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): OpenIdConnectSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
