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
import InboxStatisticSummary from './InboxStatisticSummary';
import InboxStatisticOpenMinutes from './InboxStatisticOpenMinutes';

export default class InboxStatistics implements IModel {
    private summary: InboxStatisticSummary|null = null;
    private openMinutes: InboxStatisticOpenMinutes|null = null;
    public getSummary(): InboxStatisticSummary|null {
        return this.summary;
    }
    public setSummary(summary: InboxStatisticSummary|null) {
        this.summary = summary;
        return this;
    }
    public withSummary(summary: InboxStatisticSummary|null): this {
        this.summary = summary;
        return this;
    }
    public getOpenMinutes(): InboxStatisticOpenMinutes|null {
        return this.openMinutes;
    }
    public setOpenMinutes(openMinutes: InboxStatisticOpenMinutes|null) {
        this.openMinutes = openMinutes;
        return this;
    }
    public withOpenMinutes(openMinutes: InboxStatisticOpenMinutes|null): this {
        this.openMinutes = openMinutes;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): InboxStatistics|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new InboxStatistics()
            .withSummary(InboxStatisticSummary.fromDict(data["summary"]))
            .withOpenMinutes(InboxStatisticOpenMinutes.fromDict(data["openMinutes"]));
    }

    public toDict(): {[key: string]: any} {
        return {
            "summary": this.getSummary()?.toDict(),
            "openMinutes": this.getOpenMinutes()?.toDict(),
        };
    }
}
