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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// URLSearchParams not necessarily used
// @ts-ignore
import { URL, URLSearchParams } from 'url';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, Suada, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { Completion } from '../suada-models';
// @ts-ignore
import type { CompletionResult } from '../suada-models';
/**
 * chat - axios parameter creator
 * @export
 */
export const ChatApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create chat completion
         * @param {Completion} completion 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completions: async (completion: Completion, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'completion' is not null or undefined
            assertParamExists('completions', 'completion', completion)
            const localVarPath = `/v1/chat/completions`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication BearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(completion, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * chat - functional programming interface
 * @export
 */
export const ChatApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = ChatApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Create chat completion
         * @param {Completion} completion 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async completions(completion: Completion, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CompletionResult>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.completions(completion, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['ChatApi.completions']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * chat - factory interface
 * @export
 */
export const ChatApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = ChatApiFp(configuration)
    return {
        /**
         * 
         * @summary Create chat completion
         * @param {ChatApiCompletionsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        completions(requestParameters: ChatApiCompletionsRequest, options?: RawAxiosRequestConfig): AxiosPromise<CompletionResult> {
            return localVarFp.completions(requestParameters.completion, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * chat - interface
 * @export
 * @interface ChatApi
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
    completions(completion: Completion, options?: RawAxiosRequestConfig): AxiosPromise<CompletionResult>;

}

/**
 * Request parameters for completions operation in ChatApi.
 * @export
 * @interface ChatApiCompletionsRequest
 */
export interface ChatApiCompletionsRequest {
    /**
     * 
     * @type {Completion}
     * @memberof ChatApiCompletions
     */
    readonly completion: Completion
}

/**
 * chat - object-oriented interface
 * @export
 * @class ChatApi
 * @extends {Suada}
 */
export class chat extends Suada implements ChatApiInterface {
    /**
     * 
     * @summary Create chat completion
     * @param {ChatApiCompletionsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ChatApi
     */
    // @ts-ignore
    public completions(requestParameters: ChatApiCompletionsRequest, options?: RawAxiosRequestConfig) {
        return ChatApiFp(this.configuration).completions(requestParameters.completion, options).then((request) => request(this.axios, this.basePath));
    }
}

