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

import * as Gs2Version from '../../version/model'
import Version from './Version';

export default class TargetVersion implements IModel {
    private versionName: string|null = null;
    private body: string|null = null;
    private signature: string|null = null;
    private version: Gs2Version.Version|null = null;
    public getVersionName(): string|null {
        return this.versionName;
    }
    public setVersionName(versionName: string|null) {
        this.versionName = versionName;
        return this;
    }
    public withVersionName(versionName: string|null): this {
        this.versionName = versionName;
        return this;
    }
    public getBody(): string|null {
        return this.body;
    }
    public setBody(body: string|null) {
        this.body = body;
        return this;
    }
    public withBody(body: string|null): this {
        this.body = body;
        return this;
    }
    public getSignature(): string|null {
        return this.signature;
    }
    public setSignature(signature: string|null) {
        this.signature = signature;
        return this;
    }
    public withSignature(signature: string|null): this {
        this.signature = signature;
        return this;
    }
    public getVersion(): Gs2Version.Version|null {
        return this.version;
    }
    public setVersion(version: Gs2Version.Version|null) {
        this.version = version;
        return this;
    }
    public withVersion(version: Gs2Version.Version|null): this {
        this.version = version;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): TargetVersion|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new TargetVersion()
            .withVersionName(data["versionName"])
            .withBody(data["body"])
            .withSignature(data["signature"])
            .withVersion(Gs2Version.Version.fromDict(data["version"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "versionName": this.getVersionName(),
            "body": this.getBody(),
            "signature": this.getSignature(),
            "version": this.getVersion()?.toDict(),
        };
    }
}
