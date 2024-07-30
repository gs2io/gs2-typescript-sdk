import IModel from '../../core/interface/IModel';
export default class OpenIdConnectSetting implements IModel {
    private configurationPath;
    private clientId;
    getConfigurationPath(): string | null;
    setConfigurationPath(configurationPath: string | null): this;
    withConfigurationPath(configurationPath: string | null): this;
    getClientId(): string | null;
    setClientId(clientId: string | null): this;
    withClientId(clientId: string | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): OpenIdConnectSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
