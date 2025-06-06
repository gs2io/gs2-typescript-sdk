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

import * as Gs2Inventory from '../model'

export default class UpdateCurrentItemModelMasterRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private namespaceName: string|null = null;
    private mode: string|null = null;
    private settings: string|null = null;
    private uploadToken: string|null = null;

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
    public getMode(): string|null {
        return this.mode;
    }
    public setMode(mode: string|null) {
        this.mode = mode;
        return this;
    }
    public withMode(mode: string|null): this {
        this.mode = mode;
        return this;
    }
    public getSettings(): string|null {
        return this.settings;
    }
    public setSettings(settings: string|null) {
        this.settings = settings;
        return this;
    }
    public withSettings(settings: string|null): this {
        this.settings = settings;
        return this;
    }
    public getUploadToken(): string|null {
        return this.uploadToken;
    }
    public setUploadToken(uploadToken: string|null) {
        this.uploadToken = uploadToken;
        return this;
    }
    public withUploadToken(uploadToken: string|null): this {
        this.uploadToken = uploadToken;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): UpdateCurrentItemModelMasterRequest {
        return new UpdateCurrentItemModelMasterRequest()
            .withNamespaceName(data["namespaceName"])
            .withMode(data["mode"])
            .withSettings(data["settings"])
            .withUploadToken(data["uploadToken"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "mode": this.getMode(),
            "settings": this.getSettings(),
            "uploadToken": this.getUploadToken(),
        };
    }
}