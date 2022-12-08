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

import IRequest from '../../core/interface/IRequest';

import * as Gs2Watch from '../model'

export default class GetChartRequest implements IRequest {

    private requestId: string|null = null;
    private contextStack: string|null = null;
    private measure: string|null = null;
    private grn: string|null = null;
    private round: string|null = null;
    private filters: Gs2Watch.Filter[]|null = null;
    private groupBys: string[]|null = null;
    private countBy: string|null = null;
    private begin: number|null = null;
    private end: number|null = null;
    private pageToken: string|null = null;
    private limit: number|null = null;

    public getRequestId(): string|null {
        return this.requestId;
    }

    public setRequestId(requestId: string|null) {
        this.requestId = requestId;
        return this;
    }

    public withRequestId(requestId: string|null): this {
        this.requestId = requestId;
        return this;
    }

    public getContextStack(): string|null {
        return this.contextStack;
    }

    public setContextStack(contextStack: string|null) {
        this.contextStack = contextStack;
        return this;
    }

    public withContextStack(contextStack: string|null): this {
        this.contextStack = contextStack;
        return this;
    }
    public getMeasure(): string|null {
        return this.measure;
    }
    public setMeasure(measure: string|null) {
        this.measure = measure;
        return this;
    }
    public withMeasure(measure: string|null): this {
        this.measure = measure;
        return this;
    }
    public getGrn(): string|null {
        return this.grn;
    }
    public setGrn(grn: string|null) {
        this.grn = grn;
        return this;
    }
    public withGrn(grn: string|null): this {
        this.grn = grn;
        return this;
    }
    public getRound(): string|null {
        return this.round;
    }
    public setRound(round: string|null) {
        this.round = round;
        return this;
    }
    public withRound(round: string|null): this {
        this.round = round;
        return this;
    }
    public getFilters(): Gs2Watch.Filter[]|null {
        return this.filters;
    }
    public setFilters(filters: Gs2Watch.Filter[]|null) {
        this.filters = filters;
        return this;
    }
    public withFilters(filters: Gs2Watch.Filter[]|null): this {
        this.filters = filters;
        return this;
    }
    public getGroupBys(): string[]|null {
        return this.groupBys;
    }
    public setGroupBys(groupBys: string[]|null) {
        this.groupBys = groupBys;
        return this;
    }
    public withGroupBys(groupBys: string[]|null): this {
        this.groupBys = groupBys;
        return this;
    }
    public getCountBy(): string|null {
        return this.countBy;
    }
    public setCountBy(countBy: string|null) {
        this.countBy = countBy;
        return this;
    }
    public withCountBy(countBy: string|null): this {
        this.countBy = countBy;
        return this;
    }
    public getBegin(): number|null {
        return this.begin;
    }
    public setBegin(begin: number|null) {
        this.begin = begin;
        return this;
    }
    public withBegin(begin: number|null): this {
        this.begin = begin;
        return this;
    }
    public getEnd(): number|null {
        return this.end;
    }
    public setEnd(end: number|null) {
        this.end = end;
        return this;
    }
    public withEnd(end: number|null): this {
        this.end = end;
        return this;
    }
    public getPageToken(): string|null {
        return this.pageToken;
    }
    public setPageToken(pageToken: string|null) {
        this.pageToken = pageToken;
        return this;
    }
    public withPageToken(pageToken: string|null): this {
        this.pageToken = pageToken;
        return this;
    }
    public getLimit(): number|null {
        return this.limit;
    }
    public setLimit(limit: number|null) {
        this.limit = limit;
        return this;
    }
    public withLimit(limit: number|null): this {
        this.limit = limit;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetChartRequest {
        return new GetChartRequest()
            .withMeasure(data["measure"])
            .withGrn(data["grn"])
            .withRound(data["round"])
            .withFilters(data.filters ?
                data.filters.map((item: {[key: string]: any}) => {
                    return Gs2Watch.Filter.fromDict(item);
                }
            ) : [])
            .withGroupBys(data.groupBys ?
                data.groupBys.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withCountBy(data["countBy"])
            .withBegin(data["begin"])
            .withEnd(data["end"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "measure": this.getMeasure(),
            "grn": this.getGrn(),
            "round": this.getRound(),
            "filters": this.getFilters() ?
                this.getFilters()!.map((item: Gs2Watch.Filter) => {
                    return item.toDict();
                }
            ) : [],
            "groupBys": this.getGroupBys() ?
                this.getGroupBys()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "countBy": this.getCountBy(),
            "begin": this.getBegin(),
            "end": this.getEnd(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    }
}