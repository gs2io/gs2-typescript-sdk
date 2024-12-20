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

import * as Gs2Watch from '../../watch/model'
import KeyNamespaceEncryptDistributionStatistics from './KeyNamespaceEncryptDistributionStatistics';
import KeyNamespaceEncryptDistributionSegment from './KeyNamespaceEncryptDistributionSegment';
import KeyNamespaceEncryptDistribution from './KeyNamespaceEncryptDistribution';
import KeyNamespaceDecryptDistributionStatistics from './KeyNamespaceDecryptDistributionStatistics';
import KeyNamespaceDecryptDistributionSegment from './KeyNamespaceDecryptDistributionSegment';
import KeyNamespaceDecryptDistribution from './KeyNamespaceDecryptDistribution';

export default class KeyNamespaceDistributions implements IModel {
    private encrypt: Gs2Watch.KeyNamespaceEncryptDistribution|null = null;
    private decrypt: Gs2Watch.KeyNamespaceDecryptDistribution|null = null;
    public getEncrypt(): Gs2Watch.KeyNamespaceEncryptDistribution|null {
        return this.encrypt;
    }
    public setEncrypt(encrypt: Gs2Watch.KeyNamespaceEncryptDistribution|null) {
        this.encrypt = encrypt;
        return this;
    }
    public withEncrypt(encrypt: Gs2Watch.KeyNamespaceEncryptDistribution|null): this {
        this.encrypt = encrypt;
        return this;
    }
    public getDecrypt(): Gs2Watch.KeyNamespaceDecryptDistribution|null {
        return this.decrypt;
    }
    public setDecrypt(decrypt: Gs2Watch.KeyNamespaceDecryptDistribution|null) {
        this.decrypt = decrypt;
        return this;
    }
    public withDecrypt(decrypt: Gs2Watch.KeyNamespaceDecryptDistribution|null): this {
        this.decrypt = decrypt;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): KeyNamespaceDistributions|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new KeyNamespaceDistributions()
            .withEncrypt(Gs2Watch.KeyNamespaceEncryptDistribution.fromDict(data["encrypt"]))
            .withDecrypt(Gs2Watch.KeyNamespaceDecryptDistribution.fromDict(data["decrypt"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "encrypt": this.getEncrypt()?.toDict(),
            "decrypt": this.getDecrypt()?.toDict(),
        };
    }
}
