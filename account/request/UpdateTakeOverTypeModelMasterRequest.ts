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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Account from '../model'

export default class UpdateTakeOverTypeModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private type: number|null = null;
    private description: string|null = null;
    private metadata: string|null = null;
    private openIdConnectSetting: Gs2Account.OpenIdConnectSetting|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getNamespaceName(): string|null {
        return this.namespaceName;
    }
    public setNamespaceName(namespaceName: string|null) {
        this.namespaceName = namespaceName;
        return this;
    }
    public withNamespaceName(namespaceName: string|null): this {
        this.namespaceName = namespaceName;
        return this;
    }
    public getType(): number|null {
        return this.type;
    }
    public setType(type: number|null) {
        this.type = type;
        return this;
    }
    public withType(type: number|null): this {
        this.type = type;
        return this;
    }
    public getDescription(): string|null {
        return this.description;
    }
    public setDescription(description: string|null) {
        this.description = description;
        return this;
    }
    public withDescription(description: string|null): this {
        this.description = description;
        return this;
    }
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getOpenIdConnectSetting(): Gs2Account.OpenIdConnectSetting|null {
        return this.openIdConnectSetting;
    }
    public setOpenIdConnectSetting(openIdConnectSetting: Gs2Account.OpenIdConnectSetting|null) {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    }
    public withOpenIdConnectSetting(openIdConnectSetting: Gs2Account.OpenIdConnectSetting|null): this {
        this.openIdConnectSetting = openIdConnectSetting;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateTakeOverTypeModelMasterRequest {
        return new UpdateTakeOverTypeModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withType(data["type"])
            .withDescription(data["description"])
            .withMetadata(data["metadata"])
            .withOpenIdConnectSetting(Gs2Account.OpenIdConnectSetting.fromDict(data["openIdConnectSetting"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "type": this.getType(),
            "description": this.getDescription(),
            "metadata": this.getMetadata(),
            "openIdConnectSetting": this.getOpenIdConnectSetting()?.toDict(),
        };
    }
}