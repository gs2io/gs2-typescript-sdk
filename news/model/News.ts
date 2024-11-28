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

import * as Gs2News from '../../news/model'

export default class News implements IModel {
    private section: string|null = null;
    private content: string|null = null;
    private title: string|null = null;
    private scheduleEventId: string|null = null;
    private timestamp: number|null = null;
    private frontMatter: string|null = null;
    public getSection(): string|null {
        return this.section;
    }
    public setSection(section: string|null) {
        this.section = section;
        return this;
    }
    public withSection(section: string|null): this {
        this.section = section;
        return this;
    }
    public getContent(): string|null {
        return this.content;
    }
    public setContent(content: string|null) {
        this.content = content;
        return this;
    }
    public withContent(content: string|null): this {
        this.content = content;
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
    public getScheduleEventId(): string|null {
        return this.scheduleEventId;
    }
    public setScheduleEventId(scheduleEventId: string|null) {
        this.scheduleEventId = scheduleEventId;
        return this;
    }
    public withScheduleEventId(scheduleEventId: string|null): this {
        this.scheduleEventId = scheduleEventId;
        return this;
    }
    public getTimestamp(): number|null {
        return this.timestamp;
    }
    public setTimestamp(timestamp: number|null) {
        this.timestamp = timestamp;
        return this;
    }
    public withTimestamp(timestamp: number|null): this {
        this.timestamp = timestamp;
        return this;
    }
    public getFrontMatter(): string|null {
        return this.frontMatter;
    }
    public setFrontMatter(frontMatter: string|null) {
        this.frontMatter = frontMatter;
        return this;
    }
    public withFrontMatter(frontMatter: string|null): this {
        this.frontMatter = frontMatter;
        return this;
    }

    public static fromDict(data: {[key: string]: any}): News|null {
        if (data == undefined || data == null) {
            return null;
        }
        return new News()
            .withSection(data["section"])
            .withContent(data["content"])
            .withTitle(data["title"])
            .withScheduleEventId(data["scheduleEventId"])
            .withTimestamp(data["timestamp"])
            .withFrontMatter(data["frontMatter"]);
    }

    public toDict(): {[key: string]: any} {
        return {
            "section": this.getSection(),
            "content": this.getContent(),
            "title": this.getTitle(),
            "scheduleEventId": this.getScheduleEventId(),
            "timestamp": this.getTimestamp(),
            "frontMatter": this.getFrontMatter(),
        };
    }
}
