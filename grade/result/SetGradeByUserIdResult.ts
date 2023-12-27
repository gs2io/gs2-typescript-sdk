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

import IResult from '../../core/interface/IResult';

import * as Gs2Grade from '../model'

export default class SetGradeByUserIdResult implements IResult {
    private item: Gs2Grade.Status|null = null;
    private old: Gs2Grade.Status|null = null;
    private experienceNamespaceName: string|null = null;
    private experienceStatus: Gs2Grade.Status|null = null;

    public getItem(): Gs2Grade.Status|null {
        return this.item;
    }

    public setItem(item: Gs2Grade.Status|null) {
        this.item = item;
        return this;
    }

    public withItem(item: Gs2Grade.Status|null): this {
        this.item = item;
        return this;
    }

    public getOld(): Gs2Grade.Status|null {
        return this.old;
    }

    public setOld(old: Gs2Grade.Status|null) {
        this.old = old;
        return this;
    }

    public withOld(old: Gs2Grade.Status|null): this {
        this.old = old;
        return this;
    }

    public getExperienceNamespaceName(): string|null {
        return this.experienceNamespaceName;
    }

    public setExperienceNamespaceName(experienceNamespaceName: string|null) {
        this.experienceNamespaceName = experienceNamespaceName;
        return this;
    }

    public withExperienceNamespaceName(experienceNamespaceName: string|null): this {
        this.experienceNamespaceName = experienceNamespaceName;
        return this;
    }

    public getExperienceStatus(): Gs2Grade.Status|null {
        return this.experienceStatus;
    }

    public setExperienceStatus(experienceStatus: Gs2Grade.Status|null) {
        this.experienceStatus = experienceStatus;
        return this;
    }

    public withExperienceStatus(experienceStatus: Gs2Grade.Status|null): this {
        this.experienceStatus = experienceStatus;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): SetGradeByUserIdResult {
        return new SetGradeByUserIdResult()
            .withItem(Gs2Grade.Status.fromDict(data["item"]))
            .withOld(Gs2Grade.Status.fromDict(data["old"]))
            .withExperienceNamespaceName(data["experienceNamespaceName"])
            .withExperienceStatus(Gs2Grade.Status.fromDict(data["experienceStatus"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "item": this.getItem()?.toDict(),
            "old": this.getOld()?.toDict(),
            "experienceNamespaceName": this.getExperienceNamespaceName(),
            "experienceStatus": this.getExperienceStatus()?.toDict(),
        };
    }
}
