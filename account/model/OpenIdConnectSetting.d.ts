import IModel from '../../core/interface/IModel';
import * as Gs2Account from '../../account/model';
export default class OpenIdConnectSetting implements IModel {
    private configurationPath;
    private clientId;
    private clientSecret;
    private appleTeamId;
    private appleKeyId;
    private applePrivateKeyPem;
    private doneEndpointUrl;
    private additionalScopeValues;
    private additionalReturnValues;
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
    getAdditionalScopeValues(): Gs2Account.ScopeValue[] | null;
    setAdditionalScopeValues(additionalScopeValues: Gs2Account.ScopeValue[] | null): this;
    withAdditionalScopeValues(additionalScopeValues: Gs2Account.ScopeValue[] | null): this;
    getAdditionalReturnValues(): string[] | null;
    setAdditionalReturnValues(additionalReturnValues: string[] | null): this;
    withAdditionalReturnValues(additionalReturnValues: string[] | null): this;
    static fromDict(data: {
        [key: string]: any;
    }): OpenIdConnectSetting | null;
    toDict(): {
        [key: string]: any;
    };
}
