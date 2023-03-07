"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var Content = /** @class */ (function () {
    function Content() {
        this.section = null;
        this.content = null;
        this.frontMatter = null;
    }
    Content.prototype.getSection = function () {
        return this.section;
    };
    Content.prototype.setSection = function (section) {
        this.section = section;
        return this;
    };
    Content.prototype.withSection = function (section) {
        this.section = section;
        return this;
    };
    Content.prototype.getContent = function () {
        return this.content;
    };
    Content.prototype.setContent = function (content) {
        this.content = content;
        return this;
    };
    Content.prototype.withContent = function (content) {
        this.content = content;
        return this;
    };
    Content.prototype.getFrontMatter = function () {
        return this.frontMatter;
    };
    Content.prototype.setFrontMatter = function (frontMatter) {
        this.frontMatter = frontMatter;
        return this;
    };
    Content.prototype.withFrontMatter = function (frontMatter) {
        this.frontMatter = frontMatter;
        return this;
    };
    Content.fromDict = function (data) {
        if (data == undefined || data == null) {
            return null;
        }
        return new Content()
            .withSection(data["section"])
            .withContent(data["content"])
            .withFrontMatter(data["frontMatter"]);
    };
    Content.prototype.toDict = function () {
        return {
            "section": this.getSection(),
            "content": this.getContent(),
            "frontMatter": this.getFrontMatter(),
        };
    };
    return Content;
}());
exports.default = Content;
//# sourceMappingURL=Content.js.map