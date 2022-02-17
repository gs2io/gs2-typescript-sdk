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
var News = /** @class */ (function () {
    function News() {
        this.section = null;
        this.content = null;
        this.title = null;
        this.scheduleEventId = null;
        this.timestamp = null;
        this.frontMatter = null;
    }
    News.prototype.getSection = function () {
        return this.section;
    };
    News.prototype.setSection = function (section) {
        this.section = section;
        return this;
    };
    News.prototype.withSection = function (section) {
        this.section = section;
        return this;
    };
    News.prototype.getContent = function () {
        return this.content;
    };
    News.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    News.prototype.withContent = function (content) {
        this.content = content;
        return this;
    };
    News.prototype.getTitle = function () {
        return this.title;
    };
    News.prototype.setTitle = function (title) {
        this.title = title;
        return this;
    };
    News.prototype.withTitle = function (title) {
        this.title = title;
        return this;
    };
    News.prototype.getScheduleEventId = function () {
        return this.scheduleEventId;
    };
    News.prototype.setScheduleEventId = function (scheduleEventId) {
        this.scheduleEventId = scheduleEventId;
        return this;
    };
    News.prototype.withScheduleEventId = function (scheduleEventId) {
        this.scheduleEventId = scheduleEventId;
        return this;
    };
    News.prototype.getTimestamp = function () {
        return this.timestamp;
    };
    News.prototype.setTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    News.prototype.withTimestamp = function (timestamp) {
        this.timestamp = timestamp;
        return this;
    };
    News.prototype.getFrontMatter = function () {
        return this.frontMatter;
    };
    News.prototype.setFrontMatter = function (frontMatter) {
        this.frontMatter = frontMatter;
        return this;
    };
    News.prototype.withFrontMatter = function (frontMatter) {
        this.frontMatter = frontMatter;
        return this;
    };
    News.fromDict = function (data) {
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
    };
    News.prototype.toDict = function () {
        return {
            "section": this.getSection(),
            "content": this.getContent(),
            "title": this.getTitle(),
            "scheduleEventId": this.getScheduleEventId(),
            "timestamp": this.getTimestamp(),
            "frontMatter": this.getFrontMatter(),
        };
    };
    return News;
}());
export default News;
//# sourceMappingURL=News.js.map