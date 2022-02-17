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
import { Version } from './Version';

export class SignTargetVersion implements IModel {
    private region: string|null = null;
    private namespaceName: string|null = null;
    private versionName: string|null = null;
    private version: Version|null = null;

    public getRegion(): string|null {
        return this.region;
    }

    public setRegion(region: string|null) {
        this.region = region;
        return this;
    }

    public withRegion(region: string|null): this {
        this.region = region;
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

    public getVersion(): Version|null {
        return this.version;
    }

    public setVersion(version: Version|null) {
        this.version = version;
        return this;
    }

    public withVersion(version: Version|null): this {
        this.version = version;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SignTargetVersion|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new SignTargetVersion()
            .withRegion(data["region"])
            .withNamespaceName(data["namespaceName"])
            .withVersionName(data["versionName"])
            .withVersion(Version.fromDict(data["version"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "region": this.getRegion(),
            "namespaceName": this.getNamespaceName(),
            "versionName": this.getVersionName(),
            "version": this.getVersion()?.toDict(),
        };
    }
}
