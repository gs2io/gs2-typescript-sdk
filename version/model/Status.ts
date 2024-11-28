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
import ScheduleVersion from './ScheduleVersion';
import VersionModel from './VersionModel';

export default class Status implements IModel {
    private versionModel: Gs2Version.VersionModel|null = null;
    private currentVersion: Gs2Version.Version|null = null;
    public getVersionModel(): Gs2Version.VersionModel|null {
        return this.versionModel;
    }
    public setVersionModel(versionModel: Gs2Version.VersionModel|null) {
        this.versionModel = versionModel;
        return this;
    }
    public withVersionModel(versionModel: Gs2Version.VersionModel|null): this {
        this.versionModel = versionModel;
        return this;
    }
    public getCurrentVersion(): Gs2Version.Version|null {
        return this.currentVersion;
    }
    public setCurrentVersion(currentVersion: Gs2Version.Version|null) {
        this.currentVersion = currentVersion;
        return this;
    }
    public withCurrentVersion(currentVersion: Gs2Version.Version|null): this {
        this.currentVersion = currentVersion;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Status|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Status()
            .withVersionModel(Gs2Version.VersionModel.fromDict(data["versionModel"]))
            .withCurrentVersion(Gs2Version.Version.fromDict(data["currentVersion"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "versionModel": this.getVersionModel()?.toDict(),
            "currentVersion": this.getCurrentVersion()?.toDict(),
        };
    }
}
