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

import * as Gs2Key from '../model'

export default class CreateGitHubApiKeyRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private name: string|null = null;
    private description: string|null = null;
    private apiKey: string|null = null;
    private encryptionKeyName: string|null = null;

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
    public getName(): string|null {
        return this.name;
    }
    public setName(name: string|null) {
        this.name = name;
        return this;
    }
    public withName(name: string|null): this {
        this.name = name;
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
    public getApiKey(): string|null {
        return this.apiKey;
    }
    public setApiKey(apiKey: string|null) {
        this.apiKey = apiKey;
        return this;
    }
    public withApiKey(apiKey: string|null): this {
        this.apiKey = apiKey;
        return this;
    }
    public getEncryptionKeyName(): string|null {
        return this.encryptionKeyName;
    }
    public setEncryptionKeyName(encryptionKeyName: string|null) {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    }
    public withEncryptionKeyName(encryptionKeyName: string|null): this {
        this.encryptionKeyName = encryptionKeyName;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): CreateGitHubApiKeyRequest {
        return new CreateGitHubApiKeyRequest()
            .withNamespaceName(data["namespaceName"])
            .withName(data["name"])
            .withDescription(data["description"])
            .withApiKey(data["apiKey"])
            .withEncryptionKeyName(data["encryptionKeyName"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "name": this.getName(),
            "description": this.getDescription(),
            "apiKey": this.getApiKey(),
            "encryptionKeyName": this.getEncryptionKeyName(),
        };
    }
}