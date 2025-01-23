/*
Copyright 2016 Game Server Services, Inc. or its affiliates. All Rights
Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
A copy of the License is located at

 http://www.apache.org/licenses/LICENSE-2.0

or in the "license" file accompanying this file. This file is distributed
on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
express or implied. See the License for the specific language governing
permissions and limitations under the License.
 */

import IModel from '../../core/interface/IModel';

import * as Gs2Account from '../../account/model'
import ScopeValue from './ScopeValue';

export default class OpenIdConnectSetting implements IModel {
    private configurationPath: string|null = null;
    private clientId: string|null = null;
    private clientSecret: string|null = null;
    private appleTeamId: string|null = null;
    private appleKeyId: string|null = null;
    private applePrivateKeyPem: string|null = null;
    private doneEndpointUrl: string|null = null;
    private additionalScopeValues: Gs2Account.ScopeValue[]|null = null;
    private additionalReturnValues: string[]|null = null;
    public getConfigurationPath(): string|null {
        return this.configurationPath;
    }
    public setConfigurationPath(configurationPath: string|null) {
        this.configurationPath = configurationPath;
        return this;
    }
    public withConfigurationPath(configurationPath: string|null): this {
        this.configurationPath = configurationPath;
        return this;
    }
    public getClientId(): string|null {
        return this.clientId;
    }
    public setClientId(clientId: string|null) {
        this.clientId = clientId;
        return this;
    }
    public withClientId(clientId: string|null): this {
        this.clientId = clientId;
        return this;
    }
    public getClientSecret(): string|null {
        return this.clientSecret;
    }
    public setClientSecret(clientSecret: string|null) {
        this.clientSecret = clientSecret;
        return this;
    }
    public withClientSecret(clientSecret: string|null): this {
        this.clientSecret = clientSecret;
        return this;
    }
    public getAppleTeamId(): string|null {
        return this.appleTeamId;
    }
    public setAppleTeamId(appleTeamId: string|null) {
        this.appleTeamId = appleTeamId;
        return this;
    }
    public withAppleTeamId(appleTeamId: string|null): this {
        this.appleTeamId = appleTeamId;
        return this;
    }
    public getAppleKeyId(): string|null {
        return this.appleKeyId;
    }
    public setAppleKeyId(appleKeyId: string|null) {
        this.appleKeyId = appleKeyId;
        return this;
    }
    public withAppleKeyId(appleKeyId: string|null): this {
        this.appleKeyId = appleKeyId;
        return this;
    }
    public getApplePrivateKeyPem(): string|null {
        return this.applePrivateKeyPem;
    }
    public setApplePrivateKeyPem(applePrivateKeyPem: string|null) {
        this.applePrivateKeyPem = applePrivateKeyPem;
        return this;
    }
    public withApplePrivateKeyPem(applePrivateKeyPem: string|null): this {
        this.applePrivateKeyPem = applePrivateKeyPem;
        return this;
    }
    public getDoneEndpointUrl(): string|null {
        return this.doneEndpointUrl;
    }
    public setDoneEndpointUrl(doneEndpointUrl: string|null) {
        this.doneEndpointUrl = doneEndpointUrl;
        return this;
    }
    public withDoneEndpointUrl(doneEndpointUrl: string|null): this {
        this.doneEndpointUrl = doneEndpointUrl;
        return this;
    }
    public getAdditionalScopeValues(): Gs2Account.ScopeValue[]|null {
        return this.additionalScopeValues;
    }
    public setAdditionalScopeValues(additionalScopeValues: Gs2Account.ScopeValue[]|null) {
        this.additionalScopeValues = additionalScopeValues;
        return this;
    }
    public withAdditionalScopeValues(additionalScopeValues: Gs2Account.ScopeValue[]|null): this {
        this.additionalScopeValues = additionalScopeValues;
        return this;
    }
    public getAdditionalReturnValues(): string[]|null {
        return this.additionalReturnValues;
    }
    public setAdditionalReturnValues(additionalReturnValues: string[]|null) {
        this.additionalReturnValues = additionalReturnValues;
        return this;
    }
    public withAdditionalReturnValues(additionalReturnValues: string[]|null): this {
        this.additionalReturnValues = additionalReturnValues;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): OpenIdConnectSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new OpenIdConnectSetting()
            .withConfigurationPath(data["configurationPath"])
            .withClientId(data["clientId"])
            .withClientSecret(data["clientSecret"])
            .withAppleTeamId(data["appleTeamId"])
            .withAppleKeyId(data["appleKeyId"])
            .withApplePrivateKeyPem(data["applePrivateKeyPem"])
            .withDoneEndpointUrl(data["doneEndpointUrl"])
            .withAdditionalScopeValues(data.additionalScopeValues ?
                data.additionalScopeValues.map((item: {[key: string]: any}) => {
                    return Gs2Account.ScopeValue.fromDict(item);
                }
            ) : null)
            .withAdditionalReturnValues(data.additionalReturnValues ?
                data.additionalReturnValues.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : null);
    }

    public toDict(): {[key: string]: any} {
        return {
            "configurationPath": this.getConfigurationPath(),
            "clientId": this.getClientId(),
            "clientSecret": this.getClientSecret(),
            "appleTeamId": this.getAppleTeamId(),
            "appleKeyId": this.getAppleKeyId(),
            "applePrivateKeyPem": this.getApplePrivateKeyPem(),
            "doneEndpointUrl": this.getDoneEndpointUrl(),
            "additionalScopeValues": this.getAdditionalScopeValues() ?
                this.getAdditionalScopeValues()!.map((item: Gs2Account.ScopeValue) => {
                    return item.toDict();
                }
            ) : null,
            "additionalReturnValues": this.getAdditionalReturnValues() ?
                this.getAdditionalReturnValues()!.map((item: string) => {
                    return item;
                }
            ) : null,
        };
    }
}
