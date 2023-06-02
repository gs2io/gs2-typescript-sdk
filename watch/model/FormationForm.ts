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
import FormationFormStatistics from './FormationFormStatistics';
import FormationFormSlotDistributionStatistics from './FormationFormSlotDistributionStatistics';
import FormationFormSlotDistributionSegment from './FormationFormSlotDistributionSegment';
import FormationFormSlotDistribution from './FormationFormSlotDistribution';
import FormationFormUsageDistributionStatistics from './FormationFormUsageDistributionStatistics';
import FormationFormUsageDistributionSegment from './FormationFormUsageDistributionSegment';
import FormationFormUsageDistribution from './FormationFormUsageDistribution';
import FormationFormDistributions from './FormationFormDistributions';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:formation:namespace:{namespaceName}:mold:{moldName}:form:{index}";

export default class FormationForm implements IModel {
    private formId: string|null = null;
    private index: string|null = null;
    private statistics: FormationFormStatistics|null = null;
    private distributions: FormationFormDistributions|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getOwnerId(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '(.*)')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getYear(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '(.*)')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMonth(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '(.*)')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getDay(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '(.*)')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getNamespaceName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '(.*)')
            .replace('{moldName}', '.*')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getMoldName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '(.*)')
            .replace('{index}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getIndex(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*')
            .replace('{index}', '(.*)')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static isValid(grn: string): boolean {
        if (this.getRegion(grn) == null || this.getRegion(grn) === '') {
            return false;
        }
        if (this.getOwnerId(grn) == null || this.getOwnerId(grn) === '') {
            return false;
        }
        if (this.getYear(grn) == null || this.getYear(grn) === '') {
            return false;
        }
        if (this.getMonth(grn) == null || this.getMonth(grn) === '') {
            return false;
        }
        if (this.getDay(grn) == null || this.getDay(grn) === '') {
            return false;
        }
        if (this.getNamespaceName(grn) == null || this.getNamespaceName(grn) === '') {
            return false;
        }
        if (this.getMoldName(grn) == null || this.getMoldName(grn) === '') {
            return false;
        }
        if (this.getIndex(grn) == null || this.getIndex(grn) === '') {
            return false;
        }
        return true;
    }

    public static createGrn(
        region: string|null,
        ownerId: string|null,
        year: string|null,
        month: string|null,
        day: string|null,
        namespaceName: string|null,
        moldName: string|null,
        index: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{moldName}', moldName ?? '')
            .replace('{index}', index ?? '');
    }
    public getFormId(): string|null {
        return this.formId;
    }
    public setFormId(formId: string|null) {
        this.formId = formId;
        return this;
    }
    public withFormId(formId: string|null): this {
        this.formId = formId;
        return this;
    }
    public getIndex(): string|null {
        return this.index;
    }
    public setIndex(index: string|null) {
        this.index = index;
        return this;
    }
    public withIndex(index: string|null): this {
        this.index = index;
        return this;
    }
    public getStatistics(): FormationFormStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: FormationFormStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: FormationFormStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): FormationFormDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: FormationFormDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: FormationFormDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FormationForm|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationForm()
            .withFormId(data["formId"])
            .withIndex(data["index"])
            .withStatistics(FormationFormStatistics.fromDict(data["statistics"]))
            .withDistributions(FormationFormDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "formId": this.getFormId(),
            "index": this.getIndex(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
