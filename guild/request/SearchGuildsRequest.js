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
var SearchGuildsRequest = /** @class */ (function () {
    function SearchGuildsRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.accessToken = null;
        this.displayName = null;
        this.attributes1 = null;
        this.attributes2 = null;
        this.attributes3 = null;
        this.attributes4 = null;
        this.attributes5 = null;
        this.joinPolicies = null;
        this.includeFullMembersGuild = null;
        this.pageToken = null;
        this.limit = null;
        this.duplicationAvoider = null;
    }
    SearchGuildsRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SearchGuildsRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SearchGuildsRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SearchGuildsRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SearchGuildsRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SearchGuildsRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SearchGuildsRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SearchGuildsRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SearchGuildsRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SearchGuildsRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    SearchGuildsRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SearchGuildsRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SearchGuildsRequest.prototype.getAccessToken = function () {
        return this.accessToken;
    };
    SearchGuildsRequest.prototype.setAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SearchGuildsRequest.prototype.withAccessToken = function (accessToken) {
        this.accessToken = accessToken;
        return this;
    };
    SearchGuildsRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    SearchGuildsRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    SearchGuildsRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    SearchGuildsRequest.prototype.getAttributes1 = function () {
        return this.attributes1;
    };
    SearchGuildsRequest.prototype.setAttributes1 = function (attributes1) {
        this.attributes1 = attributes1;
        return this;
    };
    SearchGuildsRequest.prototype.withAttributes1 = function (attributes1) {
        this.attributes1 = attributes1;
        return this;
    };
    SearchGuildsRequest.prototype.getAttributes2 = function () {
        return this.attributes2;
    };
    SearchGuildsRequest.prototype.setAttributes2 = function (attributes2) {
        this.attributes2 = attributes2;
        return this;
    };
    SearchGuildsRequest.prototype.withAttributes2 = function (attributes2) {
        this.attributes2 = attributes2;
        return this;
    };
    SearchGuildsRequest.prototype.getAttributes3 = function () {
        return this.attributes3;
    };
    SearchGuildsRequest.prototype.setAttributes3 = function (attributes3) {
        this.attributes3 = attributes3;
        return this;
    };
    SearchGuildsRequest.prototype.withAttributes3 = function (attributes3) {
        this.attributes3 = attributes3;
        return this;
    };
    SearchGuildsRequest.prototype.getAttributes4 = function () {
        return this.attributes4;
    };
    SearchGuildsRequest.prototype.setAttributes4 = function (attributes4) {
        this.attributes4 = attributes4;
        return this;
    };
    SearchGuildsRequest.prototype.withAttributes4 = function (attributes4) {
        this.attributes4 = attributes4;
        return this;
    };
    SearchGuildsRequest.prototype.getAttributes5 = function () {
        return this.attributes5;
    };
    SearchGuildsRequest.prototype.setAttributes5 = function (attributes5) {
        this.attributes5 = attributes5;
        return this;
    };
    SearchGuildsRequest.prototype.withAttributes5 = function (attributes5) {
        this.attributes5 = attributes5;
        return this;
    };
    SearchGuildsRequest.prototype.getJoinPolicies = function () {
        return this.joinPolicies;
    };
    SearchGuildsRequest.prototype.setJoinPolicies = function (joinPolicies) {
        this.joinPolicies = joinPolicies;
        return this;
    };
    SearchGuildsRequest.prototype.withJoinPolicies = function (joinPolicies) {
        this.joinPolicies = joinPolicies;
        return this;
    };
    SearchGuildsRequest.prototype.getIncludeFullMembersGuild = function () {
        return this.includeFullMembersGuild;
    };
    SearchGuildsRequest.prototype.setIncludeFullMembersGuild = function (includeFullMembersGuild) {
        this.includeFullMembersGuild = includeFullMembersGuild;
        return this;
    };
    SearchGuildsRequest.prototype.withIncludeFullMembersGuild = function (includeFullMembersGuild) {
        this.includeFullMembersGuild = includeFullMembersGuild;
        return this;
    };
    SearchGuildsRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    SearchGuildsRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    SearchGuildsRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    SearchGuildsRequest.prototype.getLimit = function () {
        return this.limit;
    };
    SearchGuildsRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    SearchGuildsRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    SearchGuildsRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SearchGuildsRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SearchGuildsRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SearchGuildsRequest.fromDict = function (data) {
        return new SearchGuildsRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withAccessToken(data["accessToken"])
            .withDisplayName(data["displayName"])
            .withAttributes1(data.attributes1 ?
            data.attributes1.map(function (item) {
                return item;
            }) : [])
            .withAttributes2(data.attributes2 ?
            data.attributes2.map(function (item) {
                return item;
            }) : [])
            .withAttributes3(data.attributes3 ?
            data.attributes3.map(function (item) {
                return item;
            }) : [])
            .withAttributes4(data.attributes4 ?
            data.attributes4.map(function (item) {
                return item;
            }) : [])
            .withAttributes5(data.attributes5 ?
            data.attributes5.map(function (item) {
                return item;
            }) : [])
            .withJoinPolicies(data.joinPolicies ?
            data.joinPolicies.map(function (item) {
                return item;
            }) : [])
            .withIncludeFullMembersGuild(data["includeFullMembersGuild"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"]);
    };
    SearchGuildsRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "accessToken": this.getAccessToken(),
            "displayName": this.getDisplayName(),
            "attributes1": this.getAttributes1() ?
                this.getAttributes1().map(function (item) {
                    return item;
                }) : [],
            "attributes2": this.getAttributes2() ?
                this.getAttributes2().map(function (item) {
                    return item;
                }) : [],
            "attributes3": this.getAttributes3() ?
                this.getAttributes3().map(function (item) {
                    return item;
                }) : [],
            "attributes4": this.getAttributes4() ?
                this.getAttributes4().map(function (item) {
                    return item;
                }) : [],
            "attributes5": this.getAttributes5() ?
                this.getAttributes5().map(function (item) {
                    return item;
                }) : [],
            "joinPolicies": this.getJoinPolicies() ?
                this.getJoinPolicies().map(function (item) {
                    return item;
                }) : [],
            "includeFullMembersGuild": this.getIncludeFullMembersGuild(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
        };
    };
    return SearchGuildsRequest;
}());
exports.default = SearchGuildsRequest;
//# sourceMappingURL=SearchGuildsRequest.js.map