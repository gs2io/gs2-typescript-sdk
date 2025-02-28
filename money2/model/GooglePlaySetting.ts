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

export default class GooglePlaySetting implements IModel {
    private packageName: string|null = null;
    private publicKey: string|null = null;
    private credentialsJSON: string|null = null;
    public getPackageName(): string|null {
        return this.packageName;
    }
    public setPackageName(packageName: string|null) {
        this.packageName = packageName;
        return this;
    }
    public withPackageName(packageName: string|null): this {
        this.packageName = packageName;
        return this;
    }
    public getPublicKey(): string|null {
        return this.publicKey;
    }
    public setPublicKey(publicKey: string|null) {
        this.publicKey = publicKey;
        return this;
    }
    public withPublicKey(publicKey: string|null): this {
        this.publicKey = publicKey;
        return this;
    }
    public getCredentialsJSON(): string|null {
        return this.credentialsJSON;
    }
    public setCredentialsJSON(credentialsJSON: string|null) {
        this.credentialsJSON = credentialsJSON;
        return this;
    }
    public withCredentialsJSON(credentialsJSON: string|null): this {
        this.credentialsJSON = credentialsJSON;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GooglePlaySetting|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GooglePlaySetting()
            .withPackageName(data["packageName"])
            .withPublicKey(data["publicKey"])
            .withCredentialsJSON(data["credentialsJSON"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "packageName": this.getPackageName(),
            "publicKey": this.getPublicKey(),
            "credentialsJSON": this.getCredentialsJSON(),
        };
    }
}
