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

export default class OpenIdConnectSetting implements IModel {
    private configurationPath: string|null = null;
    private clientId: string|null = null;
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

    public static fromDict(data: {[key: string]: any}): OpenIdConnectSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new OpenIdConnectSetting()
            .withConfigurationPath(data["configurationPath"])
            .withClientId(data["clientId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "configurationPath": this.getConfigurationPath(),
            "clientId": this.getClientId(),
        };
    }
}
