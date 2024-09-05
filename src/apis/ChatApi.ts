/* tslint:disable */
/* eslint-disable */
/**
 * Suada API
 * OpenAPI specification for the Suada API.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Completion,
  CompletionResult,
} from '../models/index';
import {
    CompletionFromJSON,
    CompletionToJSON,
    CompletionResultFromJSON,
    CompletionResultToJSON,
} from '../models/index';

export interface ChatCompletionsRequest {
    completion: Completion;
}

/**
 * ChatApi - interface
 * 
 * @export
 * @interface ChatApiInterface
 */
export interface ChatApiInterface {
    /**
     * 
     * @summary Create chat completion
     * @param {Completion} completion 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApiInterface
     */
    chatCompletionsRaw(requestParameters: ChatCompletionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompletionResult>>;

    /**
     * Create chat completion
     */
    chatCompletions(completion: Completion, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompletionResult>;

}

/**
 * 
 */
export class ChatApi extends runtime.BaseAPI implements ChatApiInterface {

    /**
     * Create chat completion
     */
    async chatCompletionsRaw(requestParameters: ChatCompletionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CompletionResult>> {
        if (requestParameters['completion'] == null) {
            throw new runtime.RequiredError(
                'completion',
                'Required parameter "completion" was null or undefined when calling chatCompletions().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("BearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/chat/completions`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CompletionToJSON(requestParameters['completion']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CompletionResultFromJSON(jsonValue));
    }

    /**
     * Create chat completion
     */
    async chatCompletions(completion: Completion, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CompletionResult> {
        const response = await this.chatCompletionsRaw({ completion: completion }, initOverrides);
        return await response.value();
    }

}
