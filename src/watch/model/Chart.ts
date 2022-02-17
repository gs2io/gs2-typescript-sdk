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

export default class Chart implements IModel {
    private chartId: string|null = null;
    private embedId: string|null = null;
    private html: string|null = null;

    public getChartId(): string|null {
        return this.chartId;
    }

    public setChartId(chartId: string|null) {
        this.chartId = chartId;
        return this;
    }

    public withChartId(chartId: string|null): this {
        this.chartId = chartId;
        return this;
    }

    public getEmbedId(): string|null {
        return this.embedId;
    }

    public setEmbedId(embedId: string|null) {
        this.embedId = embedId;
        return this;
    }

    public withEmbedId(embedId: string|null): this {
        this.embedId = embedId;
        return this;
    }

    public getHtml(): string|null {
        return this.html;
    }

    public setHtml(html: string|null) {
        this.html = html;
        return this;
    }

    public withHtml(html: string|null): this {
        this.html = html;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): Chart|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new Chart()
            .withChartId(data["chartId"])
            .withEmbedId(data["embedId"])
            .withHtml(data["html"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "chartId": this.getChartId(),
            "embedId": this.getEmbedId(),
            "html": this.getHtml(),
        };
    }
}
