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

import * as Gs2Money2 from '../../money2/model'

export default class AppleAppStoreSetting implements IModel {
    private bundleId: string|null = null;
    private issuerId: string|null = null;
    private keyId: string|null = null;
    private privateKeyPem: string|null = null;
    public getBundleId(): string|null {
        return this.bundleId;
    }
    public setBundleId(bundleId: string|null) {
        this.bundleId = bundleId;
        return this;
    }
    public withBundleId(bundleId: string|null): this {
        this.bundleId = bundleId;
        return this;
    }
    public getIssuerId(): string|null {
        return this.issuerId;
    }
    public setIssuerId(issuerId: string|null) {
        this.issuerId = issuerId;
        return this;
    }
    public withIssuerId(issuerId: string|null): this {
        this.issuerId = issuerId;
        return this;
    }
    public getKeyId(): string|null {
        return this.keyId;
    }
    public setKeyId(keyId: string|null) {
        this.keyId = keyId;
        return this;
    }
    public withKeyId(keyId: string|null): this {
        this.keyId = keyId;
        return this;
    }
    public getPrivateKeyPem(): string|null {
        return this.privateKeyPem;
    }
    public setPrivateKeyPem(privateKeyPem: string|null) {
        this.privateKeyPem = privateKeyPem;
        return this;
    }
    public withPrivateKeyPem(privateKeyPem: string|null): this {
        this.privateKeyPem = privateKeyPem;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): AppleAppStoreSetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new AppleAppStoreSetting()
            .withBundleId(data["bundleId"])
            .withIssuerId(data["issuerId"])
            .withKeyId(data["keyId"])
            .withPrivateKeyPem(data["privateKeyPem"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "bundleId": this.getBundleId(),
            "issuerId": this.getIssuerId(),
            "keyId": this.getKeyId(),
            "privateKeyPem": this.getPrivateKeyPem(),
        };
    }
}
