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

export default class DefaultGradeModel implements IModel {
    private propertyIdRegex: string|null = null;
    private defaultGradeValue: number|null = null;
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
    public getDefaultGradeValue(): number|null {
        return this.defaultGradeValue;
    }
    public setDefaultGradeValue(defaultGradeValue: number|null) {
        this.defaultGradeValue = defaultGradeValue;
        return this;
    }
    public withDefaultGradeValue(defaultGradeValue: number|null): this {
        this.defaultGradeValue = defaultGradeValue;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): DefaultGradeModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new DefaultGradeModel()
            .withPropertyIdRegex(data["propertyIdRegex"])
            .withDefaultGradeValue(data["defaultGradeValue"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "propertyIdRegex": this.getPropertyIdRegex(),
            "defaultGradeValue": this.getDefaultGradeValue(),
        };
    }
}
