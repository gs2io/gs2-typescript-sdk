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
import KeyNamespaceEncryptDistributionStatistics from './KeyNamespaceEncryptDistributionStatistics';
import KeyNamespaceEncryptDistributionSegment from './KeyNamespaceEncryptDistributionSegment';
import KeyNamespaceEncryptDistribution from './KeyNamespaceEncryptDistribution';
import KeyNamespaceDecryptDistributionStatistics from './KeyNamespaceDecryptDistributionStatistics';
import KeyNamespaceDecryptDistributionSegment from './KeyNamespaceDecryptDistributionSegment';
import KeyNamespaceDecryptDistribution from './KeyNamespaceDecryptDistribution';

export default class KeyNamespaceDistributions implements IModel {
    private encrypt: KeyNamespaceEncryptDistribution|null = null;
    private decrypt: KeyNamespaceDecryptDistribution|null = null;
    public getEncrypt(): KeyNamespaceEncryptDistribution|null {
        return this.encrypt;
    }
    public setEncrypt(encrypt: KeyNamespaceEncryptDistribution|null) {
        this.encrypt = encrypt;
        return this;
    }
    public withEncrypt(encrypt: KeyNamespaceEncryptDistribution|null): this {
        this.encrypt = encrypt;
        return this;
    }
    public getDecrypt(): KeyNamespaceDecryptDistribution|null {
        return this.decrypt;
    }
    public setDecrypt(decrypt: KeyNamespaceDecryptDistribution|null) {
        this.decrypt = decrypt;
        return this;
    }
    public withDecrypt(decrypt: KeyNamespaceDecryptDistribution|null): this {
        this.decrypt = decrypt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): KeyNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new KeyNamespaceDistributions()
            .withEncrypt(KeyNamespaceEncryptDistribution.fromDict(data["encrypt"]))
            .withDecrypt(KeyNamespaceDecryptDistribution.fromDict(data["decrypt"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "encrypt": this.getEncrypt()?.toDict(),
            "decrypt": this.getDecrypt()?.toDict(),
        };
    }
}
