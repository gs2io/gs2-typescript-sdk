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
import ExperienceRankDistribution from './ExperienceRankDistribution';
import ExperienceExperience from './ExperienceExperience';

export default class ExperienceNamespace implements IModel {
    private namespaceName: string|null = null;
    private experience: ExperienceExperience[]|null = null;
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
    public getExperience(): ExperienceExperience[]|null {
        return this.experience;
    }
    public setExperience(experience: ExperienceExperience[]|null) {
        this.experience = experience;
        return this;
    }
    public withExperience(experience: ExperienceExperience[]|null): this {
        this.experience = experience;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ExperienceNamespace|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ExperienceNamespace()
            .withNamespaceName(data["namespaceName"])
            .withExperience(data.experience ?
                data.experience.map((item: {[key: string]: any}) => {
                    return ExperienceExperience.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "namespaceName": this.getNamespaceName(),
            "experience": this.getExperience() ?
                this.getExperience()!.map((item: ExperienceExperience) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
