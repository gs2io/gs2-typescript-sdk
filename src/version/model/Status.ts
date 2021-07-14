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

import IModel from '@/gs2/core/interface/IModel';
import { Version } from './Version';
import { VersionModel } from './VersionModel';

export class Status implements IModel {
    private versionModel: VersionModel|null = null;
    private currentVersion: Version|null = null;

    public getVersionModel(): VersionModel|null {
        return this.versionModel;
    }

    public setVersionModel(versionModel: VersionModel|null) {
        this.versionModel = versionModel;
        return this;
    }

    public withVersionModel(versionModel: VersionModel|null): this {
        this.versionModel = versionModel;
        return this;
    }

    public getCurrentVersion(): Version|null {
        return this.currentVersion;
    }

    public setCurrentVersion(currentVersion: Version|null) {
        this.currentVersion = currentVersion;
        return this;
    }

    public withCurrentVersion(currentVersion: Version|null): this {
        this.currentVersion = currentVersion;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Status|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withVersionModel(VersionModel.fromDict(data["versionModel"]))
            .withCurrentVersion(Version.fromDict(data["currentVersion"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "versionModel": this.getVersionModel()?.toDict(),
            "currentVersion": this.getCurrentVersion()?.toDict(),
        };
    }
}
