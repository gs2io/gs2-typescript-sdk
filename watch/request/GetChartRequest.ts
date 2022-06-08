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
    private metrics: string|null = null;
    private grn: string|null = null;
    private queries: string[]|null = null;
    private by: string|null = null;
    private timeframe: string|null = null;
    private size: string|null = null;
    private format: string|null = null;
    private aggregator: string|null = null;
    private style: string|null = null;
    private title: string|null = null;

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
    public getMetrics(): string|null {
        return this.metrics;
    }
    public setMetrics(metrics: string|null) {
        this.metrics = metrics;
        return this;
    }
    public withMetrics(metrics: string|null): this {
        this.metrics = metrics;
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
    public getQueries(): string[]|null {
        return this.queries;
    }
    public setQueries(queries: string[]|null) {
        this.queries = queries;
        return this;
    }
    public withQueries(queries: string[]|null): this {
        this.queries = queries;
        return this;
    }
    public getBy(): string|null {
        return this.by;
    }
    public setBy(by: string|null) {
        this.by = by;
        return this;
    }
    public withBy(by: string|null): this {
        this.by = by;
        return this;
    }
    public getTimeframe(): string|null {
        return this.timeframe;
    }
    public setTimeframe(timeframe: string|null) {
        this.timeframe = timeframe;
        return this;
    }
    public withTimeframe(timeframe: string|null): this {
        this.timeframe = timeframe;
        return this;
    }
    public getSize(): string|null {
        return this.size;
    }
    public setSize(size: string|null) {
        this.size = size;
        return this;
    }
    public withSize(size: string|null): this {
        this.size = size;
        return this;
    }
    public getFormat(): string|null {
        return this.format;
    }
    public setFormat(format: string|null) {
        this.format = format;
        return this;
    }
    public withFormat(format: string|null): this {
        this.format = format;
        return this;
    }
    public getAggregator(): string|null {
        return this.aggregator;
    }
    public setAggregator(aggregator: string|null) {
        this.aggregator = aggregator;
        return this;
    }
    public withAggregator(aggregator: string|null): this {
        this.aggregator = aggregator;
        return this;
    }
    public getStyle(): string|null {
        return this.style;
    }
    public setStyle(style: string|null) {
        this.style = style;
        return this;
    }
    public withStyle(style: string|null): this {
        this.style = style;
        return this;
    }
    public getTitle(): string|null {
        return this.title;
    }
    public setTitle(title: string|null) {
        this.title = title;
        return this;
    }
    public withTitle(title: string|null): this {
        this.title = title;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): GetChartRequest {
        return new GetChartRequest()
            .withMetrics(data["metrics"])
            .withGrn(data["grn"])
            .withQueries(data.queries ?
                data.queries.map((item: {[key: string]: any}) => {
                    return item;
                }
            ) : [])
            .withBy(data["by"])
            .withTimeframe(data["timeframe"])
            .withSize(data["size"])
            .withFormat(data["format"])
            .withAggregator(data["aggregator"])
            .withStyle(data["style"])
            .withTitle(data["title"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "metrics": this.getMetrics(),
            "grn": this.getGrn(),
            "queries": this.getQueries() ?
                this.getQueries()!.map((item: string) => {
                    return item;
                }
            ) : [],
            "by": this.getBy(),
            "timeframe": this.getTimeframe(),
            "size": this.getSize(),
            "format": this.getFormat(),
            "aggregator": this.getAggregator(),
            "style": this.getStyle(),
            "title": this.getTitle(),
        };
    }
}