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
import StaminaStaminaModelStatistics from './StaminaStaminaModelStatistics';
import StaminaStaminaModelConsumeDistributionStatistics from './StaminaStaminaModelConsumeDistributionStatistics';
import StaminaStaminaModelConsumeDistributionSegment from './StaminaStaminaModelConsumeDistributionSegment';
import StaminaStaminaModelConsumeDistribution from './StaminaStaminaModelConsumeDistribution';
import StaminaStaminaModelRecoverDistributionStatistics from './StaminaStaminaModelRecoverDistributionStatistics';
import StaminaStaminaModelRecoverDistributionSegment from './StaminaStaminaModelRecoverDistributionSegment';
import StaminaStaminaModelRecoverDistribution from './StaminaStaminaModelRecoverDistribution';
import StaminaStaminaModelDistributions from './StaminaStaminaModelDistributions';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:stamina:namespace:{namespaceName}:staminaModel:{staminaName}";

export default class StaminaStaminaModel implements IModel {
    private staminaModelId: string|null = null;
    private staminaName: string|null = null;
    private statistics: StaminaStaminaModelStatistics|null = null;
    private distributions: StaminaStaminaModelDistributions|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '.*')
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
            .replace('{staminaName}', '.*')
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
            .replace('{staminaName}', '.*')
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
            .replace('{staminaName}', '.*')
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
            .replace('{staminaName}', '.*')
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
            .replace('{staminaName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getStaminaName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{staminaName}', '(.*)')
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
        if (this.getStaminaName(grn) == null || this.getStaminaName(grn) === '') {
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
        staminaName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{staminaName}', staminaName ?? '');
    }
    public getStaminaModelId(): string|null {
        return this.staminaModelId;
    }
    public setStaminaModelId(staminaModelId: string|null) {
        this.staminaModelId = staminaModelId;
        return this;
    }
    public withStaminaModelId(staminaModelId: string|null): this {
        this.staminaModelId = staminaModelId;
        return this;
    }
    public getStaminaName(): string|null {
        return this.staminaName;
    }
    public setStaminaName(staminaName: string|null) {
        this.staminaName = staminaName;
        return this;
    }
    public withStaminaName(staminaName: string|null): this {
        this.staminaName = staminaName;
        return this;
    }
    public getStatistics(): StaminaStaminaModelStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: StaminaStaminaModelStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: StaminaStaminaModelStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): StaminaStaminaModelDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: StaminaStaminaModelDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: StaminaStaminaModelDistributions|null): this {
        this.distributions = distributions;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): StaminaStaminaModel|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new StaminaStaminaModel()
            .withStaminaModelId(data["staminaModelId"])
            .withStaminaName(data["staminaName"])
            .withStatistics(StaminaStaminaModelStatistics.fromDict(data["statistics"]))
            .withDistributions(StaminaStaminaModelDistributions.fromDict(data["distributions"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "staminaModelId": this.getStaminaModelId(),
            "staminaName": this.getStaminaName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
        };
    }
}
