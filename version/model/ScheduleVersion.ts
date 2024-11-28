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

export default class ScheduleVersion implements IModel {
    private currentVersion: Gs2Version.Version|null = null;
    private warningVersion: Gs2Version.Version|null = null;
    private errorVersion: Gs2Version.Version|null = null;
    private scheduleEventId: string|null = null;
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
    public getWarningVersion(): Gs2Version.Version|null {
        return this.warningVersion;
    }
    public setWarningVersion(warningVersion: Gs2Version.Version|null) {
        this.warningVersion = warningVersion;
        return this;
    }
    public withWarningVersion(warningVersion: Gs2Version.Version|null): this {
        this.warningVersion = warningVersion;
        return this;
    }
    public getErrorVersion(): Gs2Version.Version|null {
        return this.errorVersion;
    }
    public setErrorVersion(errorVersion: Gs2Version.Version|null) {
        this.errorVersion = errorVersion;
        return this;
    }
    public withErrorVersion(errorVersion: Gs2Version.Version|null): this {
        this.errorVersion = errorVersion;
        return this;
    }
    public getScheduleEventId(): string|null {
        return this.scheduleEventId;
    }
    public setScheduleEventId(scheduleEventId: string|null) {
        this.scheduleEventId = scheduleEventId;
        return this;
    }
    public withScheduleEventId(scheduleEventId: string|null): this {
        this.scheduleEventId = scheduleEventId;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ScheduleVersion|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ScheduleVersion()
            .withCurrentVersion(Gs2Version.Version.fromDict(data["currentVersion"]))
            .withWarningVersion(Gs2Version.Version.fromDict(data["warningVersion"]))
            .withErrorVersion(Gs2Version.Version.fromDict(data["errorVersion"]))
            .withScheduleEventId(data["scheduleEventId"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "currentVersion": this.getCurrentVersion()?.toDict(),
            "warningVersion": this.getWarningVersion()?.toDict(),
            "errorVersion": this.getErrorVersion()?.toDict(),
            "scheduleEventId": this.getScheduleEventId(),
        };
    }
}
