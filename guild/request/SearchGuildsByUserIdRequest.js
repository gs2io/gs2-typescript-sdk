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
var SearchGuildsByUserIdRequest = /** @class */ (function () {
    function SearchGuildsByUserIdRequest() {
        this.requestId = null;
        this.contextStack = null;
        this.namespaceName = null;
        this.guildModelName = null;
        this.userId = null;
        this.displayName = null;
        this.attributes1 = null;
        this.attributes2 = null;
        this.attributes3 = null;
        this.attributes4 = null;
        this.attributes5 = null;
        this.joinPolicies = null;
        this.includeFullMembersGuild = null;
        this.orderBy = null;
        this.pageToken = null;
        this.limit = null;
        this.timeOffsetToken = null;
        this.duplicationAvoider = null;
    }
    SearchGuildsByUserIdRequest.prototype.getRequestId = function () {
        return this.requestId;
    };
    SearchGuildsByUserIdRequest.prototype.setRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withRequestId = function (requestId) {
        this.requestId = requestId;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getContextStack = function () {
        return this.contextStack;
    };
    SearchGuildsByUserIdRequest.prototype.setContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withContextStack = function (contextStack) {
        this.contextStack = contextStack;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getNamespaceName = function () {
        return this.namespaceName;
    };
    SearchGuildsByUserIdRequest.prototype.setNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withNamespaceName = function (namespaceName) {
        this.namespaceName = namespaceName;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getGuildModelName = function () {
        return this.guildModelName;
    };
    SearchGuildsByUserIdRequest.prototype.setGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withGuildModelName = function (guildModelName) {
        this.guildModelName = guildModelName;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getUserId = function () {
        return this.userId;
    };
    SearchGuildsByUserIdRequest.prototype.setUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withUserId = function (userId) {
        this.userId = userId;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getDisplayName = function () {
        return this.displayName;
    };
    SearchGuildsByUserIdRequest.prototype.setDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withDisplayName = function (displayName) {
        this.displayName = displayName;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getAttributes1 = function () {
        return this.attributes1;
    };
    SearchGuildsByUserIdRequest.prototype.setAttributes1 = function (attributes1) {
        this.attributes1 = attributes1;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withAttributes1 = function (attributes1) {
        this.attributes1 = attributes1;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getAttributes2 = function () {
        return this.attributes2;
    };
    SearchGuildsByUserIdRequest.prototype.setAttributes2 = function (attributes2) {
        this.attributes2 = attributes2;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withAttributes2 = function (attributes2) {
        this.attributes2 = attributes2;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getAttributes3 = function () {
        return this.attributes3;
    };
    SearchGuildsByUserIdRequest.prototype.setAttributes3 = function (attributes3) {
        this.attributes3 = attributes3;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withAttributes3 = function (attributes3) {
        this.attributes3 = attributes3;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getAttributes4 = function () {
        return this.attributes4;
    };
    SearchGuildsByUserIdRequest.prototype.setAttributes4 = function (attributes4) {
        this.attributes4 = attributes4;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withAttributes4 = function (attributes4) {
        this.attributes4 = attributes4;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getAttributes5 = function () {
        return this.attributes5;
    };
    SearchGuildsByUserIdRequest.prototype.setAttributes5 = function (attributes5) {
        this.attributes5 = attributes5;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withAttributes5 = function (attributes5) {
        this.attributes5 = attributes5;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getJoinPolicies = function () {
        return this.joinPolicies;
    };
    SearchGuildsByUserIdRequest.prototype.setJoinPolicies = function (joinPolicies) {
        this.joinPolicies = joinPolicies;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withJoinPolicies = function (joinPolicies) {
        this.joinPolicies = joinPolicies;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getIncludeFullMembersGuild = function () {
        return this.includeFullMembersGuild;
    };
    SearchGuildsByUserIdRequest.prototype.setIncludeFullMembersGuild = function (includeFullMembersGuild) {
        this.includeFullMembersGuild = includeFullMembersGuild;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withIncludeFullMembersGuild = function (includeFullMembersGuild) {
        this.includeFullMembersGuild = includeFullMembersGuild;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getOrderBy = function () {
        return this.orderBy;
    };
    SearchGuildsByUserIdRequest.prototype.setOrderBy = function (orderBy) {
        this.orderBy = orderBy;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withOrderBy = function (orderBy) {
        this.orderBy = orderBy;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getPageToken = function () {
        return this.pageToken;
    };
    SearchGuildsByUserIdRequest.prototype.setPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withPageToken = function (pageToken) {
        this.pageToken = pageToken;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getLimit = function () {
        return this.limit;
    };
    SearchGuildsByUserIdRequest.prototype.setLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withLimit = function (limit) {
        this.limit = limit;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getTimeOffsetToken = function () {
        return this.timeOffsetToken;
    };
    SearchGuildsByUserIdRequest.prototype.setTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withTimeOffsetToken = function (timeOffsetToken) {
        this.timeOffsetToken = timeOffsetToken;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.getDuplicationAvoider = function () {
        return this.duplicationAvoider;
    };
    SearchGuildsByUserIdRequest.prototype.setDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SearchGuildsByUserIdRequest.prototype.withDuplicationAvoider = function (duplicationAvoider) {
        this.duplicationAvoider = duplicationAvoider;
        return this;
    };
    SearchGuildsByUserIdRequest.fromDict = function (data) {
        return new SearchGuildsByUserIdRequest()
            .withNamespaceName(data["namespaceName"])
            .withGuildModelName(data["guildModelName"])
            .withUserId(data["userId"])
            .withDisplayName(data["displayName"])
            .withAttributes1(data.attributes1 ?
            data.attributes1.map(function (item) {
                return item;
            }) : null)
            .withAttributes2(data.attributes2 ?
            data.attributes2.map(function (item) {
                return item;
            }) : null)
            .withAttributes3(data.attributes3 ?
            data.attributes3.map(function (item) {
                return item;
            }) : null)
            .withAttributes4(data.attributes4 ?
            data.attributes4.map(function (item) {
                return item;
            }) : null)
            .withAttributes5(data.attributes5 ?
            data.attributes5.map(function (item) {
                return item;
            }) : null)
            .withJoinPolicies(data.joinPolicies ?
            data.joinPolicies.map(function (item) {
                return item;
            }) : null)
            .withIncludeFullMembersGuild(data["includeFullMembersGuild"])
            .withOrderBy(data["orderBy"])
            .withPageToken(data["pageToken"])
            .withLimit(data["limit"])
            .withTimeOffsetToken(data["timeOffsetToken"]);
    };
    SearchGuildsByUserIdRequest.prototype.toDict = function () {
        return {
            "namespaceName": this.getNamespaceName(),
            "guildModelName": this.getGuildModelName(),
            "userId": this.getUserId(),
            "displayName": this.getDisplayName(),
            "attributes1": this.getAttributes1() ?
                this.getAttributes1().map(function (item) {
                    return item;
                }) : null,
            "attributes2": this.getAttributes2() ?
                this.getAttributes2().map(function (item) {
                    return item;
                }) : null,
            "attributes3": this.getAttributes3() ?
                this.getAttributes3().map(function (item) {
                    return item;
                }) : null,
            "attributes4": this.getAttributes4() ?
                this.getAttributes4().map(function (item) {
                    return item;
                }) : null,
            "attributes5": this.getAttributes5() ?
                this.getAttributes5().map(function (item) {
                    return item;
                }) : null,
            "joinPolicies": this.getJoinPolicies() ?
                this.getJoinPolicies().map(function (item) {
                    return item;
                }) : null,
            "includeFullMembersGuild": this.getIncludeFullMembersGuild(),
            "orderBy": this.getOrderBy(),
            "pageToken": this.getPageToken(),
            "limit": this.getLimit(),
            "timeOffsetToken": this.getTimeOffsetToken(),
        };
    };
    return SearchGuildsByUserIdRequest;
}());
exports.default = SearchGuildsByUserIdRequest;
//# sourceMappingURL=SearchGuildsByUserIdRequest.js.map