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

import * as Gs2Grade from '../../grade/model'

export default class GradeEntryModel implements IModel {
    private metadata: string|null = null;
    private rankCapValue: number|null = null;
    private propertyIdRegex: string|null = null;
    private gradeUpPropertyIdRegex: string|null = null;
    public getMetadata(): string|null {
        return this.metadata;
    }
    public setMetadata(metadata: string|null) {
        this.metadata = metadata;
        return this;
    }
    public withMetadata(metadata: string|null): this {
        this.metadata = metadata;
        return this;
    }
    public getRankCapValue(): number|null {
        return this.rankCapValue;
    }
    public setRankCapValue(rankCapValue: number|null) {
        this.rankCapValue = rankCapValue;
        return this;
    }
    public withRankCapValue(rankCapValue: number|null): this {
        this.rankCapValue = rankCapValue;
        return this;
    }
    public getPropertyIdRegex(): string|null {
        return this.propertyIdRegex;
    }
    public setPropertyIdRegex(propertyIdRegex: string|null) {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    }
    public withPropertyIdRegex(propertyIdRegex: string|null): this {
        this.propertyIdRegex = propertyIdRegex;
        return this;
    }
    public getGradeUpPropertyIdRegex(): string|null {
        return this.gradeUpPropertyIdRegex;
    }
    public setGradeUpPropertyIdRegex(gradeUpPropertyIdRegex: string|null) {
        this.gradeUpPropertyIdRegex = gradeUpPropertyIdRegex;
        return this;
    }
    public withGradeUpPropertyIdRegex(gradeUpPropertyIdRegex: string|null): this {
        this.gradeUpPropertyIdRegex = gradeUpPropertyIdRegex;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GradeEntryModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new GradeEntryModel()
            .withMetadata(data["metadata"])
            .withRankCapValue(data["rankCapValue"])
            .withPropertyIdRegex(data["propertyIdRegex"])
            .withGradeUpPropertyIdRegex(data["gradeUpPropertyIdRegex"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "metadata": this.getMetadata(),
            "rankCapValue": this.getRankCapValue(),
            "propertyIdRegex": this.getPropertyIdRegex(),
            "gradeUpPropertyIdRegex": this.getGradeUpPropertyIdRegex(),
        };
    }
}
