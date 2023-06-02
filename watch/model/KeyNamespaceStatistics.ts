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

export default class KeyNamespaceStatistics implements IModel {
    private encrypt: number|null = null;
    private decrypt: number|null = null;
    public getEncrypt(): number|null {
        return this.encrypt;
    }
    public setEncrypt(encrypt: number|null) {
        this.encrypt = encrypt;
        return this;
    }
    public withEncrypt(encrypt: number|null): this {
        this.encrypt = encrypt;
        return this;
    }
    public getDecrypt(): number|null {
        return this.decrypt;
    }
    public setDecrypt(decrypt: number|null) {
        this.decrypt = decrypt;
        return this;
    }
    public withDecrypt(decrypt: number|null): this {
        this.decrypt = decrypt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): KeyNamespaceStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new KeyNamespaceStatistics()
            .withEncrypt(data["encrypt"])
            .withDecrypt(data["decrypt"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "encrypt": this.getEncrypt(),
            "decrypt": this.getDecrypt(),
        };
    }
}
