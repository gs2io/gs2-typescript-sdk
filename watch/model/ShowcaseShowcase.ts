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
import ShowcaseShowcaseStatistics from './ShowcaseShowcaseStatistics';
import ShowcaseShowcaseBuyDistributionStatistics from './ShowcaseShowcaseBuyDistributionStatistics';
import ShowcaseShowcaseBuyDistributionSegment from './ShowcaseShowcaseBuyDistributionSegment';
import ShowcaseShowcaseBuyDistribution from './ShowcaseShowcaseBuyDistribution';
import ShowcaseShowcaseDistributions from './ShowcaseShowcaseDistributions';
import ShowcaseDisplayItemStatistics from './ShowcaseDisplayItemStatistics';
import ShowcaseDisplayItemQuantityDistributionStatistics from './ShowcaseDisplayItemQuantityDistributionStatistics';
import ShowcaseDisplayItemQuantityDistributionSegment from './ShowcaseDisplayItemQuantityDistributionSegment';
import ShowcaseDisplayItemQuantityDistribution from './ShowcaseDisplayItemQuantityDistribution';
import ShowcaseDisplayItemDistributions from './ShowcaseDisplayItemDistributions';
import ShowcaseDisplayItem from './ShowcaseDisplayItem';
const grnFormat: string = "grn:gs2:{region}:{ownerId}:watch:metrics:{year}:{month}:{day}:showcase:namespace:{namespaceName}:showcase:{showcaseName}";

export default class ShowcaseShowcase implements IModel {
    private showcaseId: string|null = null;
    private showcaseName: string|null = null;
    private statistics: ShowcaseShowcaseStatistics|null = null;
    private distributions: ShowcaseShowcaseDistributions|null = null;
    private displayItems: ShowcaseDisplayItem[]|null = null;

    public static getRegion(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '(.*)')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '.*')
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
            .replace('{showcaseName}', '.*')
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
            .replace('{showcaseName}', '.*')
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
            .replace('{showcaseName}', '.*')
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
            .replace('{showcaseName}', '.*')
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
            .replace('{showcaseName}', '.*')
        );
        if (match) {
            return match[1];
        }
        return null;
    }

    public static getShowcaseName(grn: string): string|null {
        const match = grn.match(grnFormat
            .replace('{region}', '.*')
            .replace('{ownerId}', '.*')
            .replace('{year}', '.*')
            .replace('{month}', '.*')
            .replace('{day}', '.*')
            .replace('{namespaceName}', '.*')
            .replace('{showcaseName}', '(.*)')
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
        if (this.getShowcaseName(grn) == null || this.getShowcaseName(grn) === '') {
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
        showcaseName: string|null,
    ): string|null {
        return grnFormat
            .replace('{region}', region ?? '')
            .replace('{ownerId}', ownerId ?? '')
            .replace('{year}', year ?? '')
            .replace('{month}', month ?? '')
            .replace('{day}', day ?? '')
            .replace('{namespaceName}', namespaceName ?? '')
            .replace('{showcaseName}', showcaseName ?? '');
    }
    public getShowcaseId(): string|null {
        return this.showcaseId;
    }
    public setShowcaseId(showcaseId: string|null) {
        this.showcaseId = showcaseId;
        return this;
    }
    public withShowcaseId(showcaseId: string|null): this {
        this.showcaseId = showcaseId;
        return this;
    }
    public getShowcaseName(): string|null {
        return this.showcaseName;
    }
    public setShowcaseName(showcaseName: string|null) {
        this.showcaseName = showcaseName;
        return this;
    }
    public withShowcaseName(showcaseName: string|null): this {
        this.showcaseName = showcaseName;
        return this;
    }
    public getStatistics(): ShowcaseShowcaseStatistics|null {
        return this.statistics;
    }
    public setStatistics(statistics: ShowcaseShowcaseStatistics|null) {
        this.statistics = statistics;
        return this;
    }
    public withStatistics(statistics: ShowcaseShowcaseStatistics|null): this {
        this.statistics = statistics;
        return this;
    }
    public getDistributions(): ShowcaseShowcaseDistributions|null {
        return this.distributions;
    }
    public setDistributions(distributions: ShowcaseShowcaseDistributions|null) {
        this.distributions = distributions;
        return this;
    }
    public withDistributions(distributions: ShowcaseShowcaseDistributions|null): this {
        this.distributions = distributions;
        return this;
    }
    public getDisplayItems(): ShowcaseDisplayItem[]|null {
        return this.displayItems;
    }
    public setDisplayItems(displayItems: ShowcaseDisplayItem[]|null) {
        this.displayItems = displayItems;
        return this;
    }
    public withDisplayItems(displayItems: ShowcaseDisplayItem[]|null): this {
        this.displayItems = displayItems;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): ShowcaseShowcase|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new ShowcaseShowcase()
            .withShowcaseId(data["showcaseId"])
            .withShowcaseName(data["showcaseName"])
            .withStatistics(ShowcaseShowcaseStatistics.fromDict(data["statistics"]))
            .withDistributions(ShowcaseShowcaseDistributions.fromDict(data["distributions"]))
            .withDisplayItems(data.displayItems ?
                data.displayItems.map((item: {[key: string]: any}) => {
                    return ShowcaseDisplayItem.fromDict(item);
                }
            ) : []);
    }

    public toDict(): {[key: string]: any} {
        return {
            "showcaseId": this.getShowcaseId(),
            "showcaseName": this.getShowcaseName(),
            "statistics": this.getStatistics()?.toDict(),
            "distributions": this.getDistributions()?.toDict(),
            "displayItems": this.getDisplayItems() ?
                this.getDisplayItems()!.map((item: ShowcaseDisplayItem) => {
                    return item.toDict();
                }
            ) : [],
        };
    }
}
