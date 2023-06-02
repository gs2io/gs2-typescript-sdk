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
import FormationMoldStatistics from './FormationMoldStatistics';
import FormationMoldCapacityDistributionStatistics from './FormationMoldCapacityDistributionStatistics';
import FormationMoldCapacityDistributionSegment from './FormationMoldCapacityDistributionSegment';
import FormationMoldCapacityDistribution from './FormationMoldCapacityDistribution';
import FormationMoldUpdateByIndexDistributionStatistics from './FormationMoldUpdateByIndexDistributionStatistics';
import FormationMoldUpdateByIndexDistributionSegment from './FormationMoldUpdateByIndexDistributionSegment';
import FormationMoldUpdateByIndexDistribution from './FormationMoldUpdateByIndexDistribution';
import FormationMoldDistributions from './FormationMoldDistributions';
import FormationFormStatistics from './FormationFormStatistics';
import FormationFormSlotDistributionStatistics from './FormationFormSlotDistributionStatistics';
import FormationFormSlotDistributionSegment from './FormationFormSlotDistributionSegment';
import FormationFormSlotDistribution from './FormationFormSlotDistribution';
import FormationFormUsageDistributionStatistics from './FormationFormUsageDistributionStatistics';
import FormationFormUsageDistributionSegment from './FormationFormUsageDistributionSegment';
import FormationFormUsageDistribution from './FormationFormUsageDistribution';
import FormationFormDistributions from './FormationFormDistributions';
import FormationForm from './FormationForm';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:formation:namespace:{namespaceName}:mold:{moldName}";

export default class FormationMold implements IModel {
    private moldId: string|null = null;
    private moldName: string|null = null;
    private statistics: FormationMoldStatistics|null = null;
    private distributions: FormationMoldDistributions|null = null;
    private forms: FormationForm[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{moldName}', '.*')
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
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{moldName}', moldName ?? '');
    }
    public getMoldId(): string|null {
        return this.moldId;
    }
    public setMoldId(moldId: string|null) {
        this.moldId = moldId;
        return this;
    }
    public withMoldId(moldId: string|null): this {
        this.moldId = moldId;
        return this;
    }
    public getMoldName(): string|null {
        return this.moldName;
    }
    public setMoldName(moldName: string|null) {
        this.moldName = moldName;
        return this;
    }
    public withMoldName(moldName: string|null): this {
        this.moldName = moldName;
        return this;
    }
    public getStatistics(): FormationMoldStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: FormationMoldStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: FormationMoldStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): FormationMoldDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: FormationMoldDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: FormationMoldDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getForms(): FormationForm[]|null {
        return this.forms;
    }
    public setForms(forms: FormationForm[]|null) {
        this.forms = forms;
        return this;
    }
    public withForms(forms: FormationForm[]|null): this {
        this.forms = forms;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): FormationMold|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new FormationMold()
            .withMoldId(data["moldId"])
            .withMoldName(data["moldName"])
            .withStatistics(FormationMoldStatistics.fromDict(data["statistics"]))
            .withDistributions(FormationMoldDistributions.fromDict(data["distributions"]))
            .withForms(data.forms ?
                data.forms.map((item: {[key: string]: any}) => {
                    return FormationForm.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "moldId": this.getMoldId(),
            "moldName": this.getMoldName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
            "forms": this.getForms() ?
                this.getForms()!.map((item: FormationForm) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
