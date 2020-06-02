import {requestMethodProcessor} from '../processors/request-method-processor';
import {RestClient} from '../rest-client';

export enum RequestMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  TRACE = 'TRACE',
  PATCH = 'PATCH',
  HEAD = 'HEAD',
  OPTIONS = 'OPTIONS'
}

/**
 * Get method
 * @param () => url - resource url of the method
 */
export const Request: (args: GenericRequestMethodArgs) =>
  (target: RestClient, propertyKey: string, descriptor: any) => any = requestMethodProcessor();

/**
 * Get method
 * @param () => url - resource url of the method
 */
export const Get: (args: RequestMethodArgs | string) => (target: RestClient, propertyKey: string, descriptor: any) => any =
  requestMethodProcessor(RequestMethod.GET);

/**
 * Post method
 * @param () => url - resource url of the method
 */
export const Post: (args: RequestMethodArgs | string) => (target: RestClient, propertyKey: string, descriptor: any) => any =
  requestMethodProcessor(RequestMethod.POST);

/**
 * Put method
 * @param () => url - resource url of the method
 */
export const Put: (args: RequestMethodArgs | string) => (target: RestClient, propertyKey: string, descriptor: any) => any =
  requestMethodProcessor(RequestMethod.PUT);

/**
 * Patch method
 * @param () => url - resource url of the method
 */
export const Patch: (args: RequestMethodArgs | string) => (target: RestClient, propertyKey: string, descriptor: any) => any =
  requestMethodProcessor(RequestMethod.PATCH);

/**
 * Trace method
 * @param () => url - resource url of the method
 */
export const Trace: (args: RequestMethodArgs | string) => (target: RestClient, propertyKey: string, descriptor: any) => any =
  requestMethodProcessor(RequestMethod.TRACE);

/**
 * Head method
 * @param () => url - resource url of the method
 */
export const Head: (args: RequestMethodArgs | string) => (target: RestClient, propertyKey: string, descriptor: any) => any =
  requestMethodProcessor(RequestMethod.HEAD);

/**
 * Options method
 * @param () => url - resource url of the method
 */
export const Options: (args: RequestMethodArgs | string) => (target: RestClient, propertyKey: string, descriptor: any) => any =
  requestMethodProcessor(RequestMethod.OPTIONS);

export interface RequestMethodArgs {
  path: string;
  produces?: string[];
  consumes?: string[];
  timeout?: number;
  fullResponse?: boolean;
  requestAuthHeaders?: string[];
  responseAuthHeaders?: string[];
}

export interface GenericRequestMethodArgs extends RequestMethodArgs{
  method: RequestMethod;
}
