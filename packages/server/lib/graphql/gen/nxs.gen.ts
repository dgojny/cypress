/* eslint-disable */
/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { App } from "./../entities/App"
import type { Wizard } from "./../entities/Wizard"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "JSON";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).
     */
    json<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "JSON";
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    dateTime<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  AddProjectInput: { // input type
    isCurrent: boolean; // Boolean!
    projectRoot: string; // String!
    testingType: string; // String!
  }
}

export interface NexusGenEnums {
  BrowserChannel: "beta" | "canary" | "dev" | "nightly" | "stable"
  BrowserFamily: "chromium" | "firefox"
  BrowserName: "chrome" | "chromium" | "edge" | "electron" | "firefox"
  InitState: "error" | "initialized" | "initializing" | "uninitialized"
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
  JSON: any
}

export interface NexusGenObjects {
  App: App;
  Browser: { // root type
    channel: NexusGenEnums['BrowserChannel']; // BrowserChannel!
    displayName: string; // String!
    family: NexusGenEnums['BrowserFamily']; // BrowserFamily!
    majorVersion?: number | null; // Int
    minSupportedVersion?: number | null; // Int
    name: NexusGenEnums['BrowserName']; // BrowserName!
    path: string; // String!
    version: string; // String!
  }
  InitStatus: { // root type
    message?: string | null; // String
    state: NexusGenEnums['InitState']; // InitState!
  }
  Mutation: {};
  Project: { // root type
    isCurrent: boolean; // Boolean!
    isOpen: boolean; // Boolean!
    plugins?: NexusGenRootTypes['InitStatus'] | null; // InitStatus
    projectRoot: string; // String!
    server?: NexusGenRootTypes['InitStatus'] | null; // InitStatus
  }
  Query: {};
  Wizard: Wizard;
}

export interface NexusGenInterfaces {
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars & NexusGenEnums

export interface NexusGenFieldTypes {
  App: { // field return type
    isFirstOpen: boolean; // Boolean!
  }
  Browser: { // field return type
    channel: NexusGenEnums['BrowserChannel']; // BrowserChannel!
    displayName: string; // String!
    family: NexusGenEnums['BrowserFamily']; // BrowserFamily!
    majorVersion: number | null; // Int
    minSupportedVersion: number | null; // Int
    name: NexusGenEnums['BrowserName']; // BrowserName!
    path: string; // String!
    version: string; // String!
  }
  InitStatus: { // field return type
    message: string | null; // String
    state: NexusGenEnums['InitState']; // InitState!
  }
  Mutation: { // field return type
    addProject: NexusGenRootTypes['Project']; // Project!
    initializePlugins: NexusGenRootTypes['Project']; // Project!
    initializeServer: NexusGenRootTypes['Project']; // Project!
    launchRunner: NexusGenRootTypes['Project']; // Project!
  }
  Project: { // field return type
    isCurrent: boolean; // Boolean!
    isOpen: boolean; // Boolean!
    plugins: NexusGenRootTypes['InitStatus'] | null; // InitStatus
    projectRoot: string; // String!
    server: NexusGenRootTypes['InitStatus'] | null; // InitStatus
  }
  Query: { // field return type
    app: NexusGenRootTypes['App'] | null; // App
    browsers: Array<NexusGenRootTypes['Browser'] | null>; // [Browser]!
    openProject: NexusGenRootTypes['Project'] | null; // Project
    projects: Array<NexusGenRootTypes['Project'] | null>; // [Project]!
  }
  Wizard: { // field return type
    todo: boolean | null; // Boolean
  }
}

export interface NexusGenFieldTypeNames {
  App: { // field return type name
    isFirstOpen: 'Boolean'
  }
  Browser: { // field return type name
    channel: 'BrowserChannel'
    displayName: 'String'
    family: 'BrowserFamily'
    majorVersion: 'Int'
    minSupportedVersion: 'Int'
    name: 'BrowserName'
    path: 'String'
    version: 'String'
  }
  InitStatus: { // field return type name
    message: 'String'
    state: 'InitState'
  }
  Mutation: { // field return type name
    addProject: 'Project'
    initializePlugins: 'Project'
    initializeServer: 'Project'
    launchRunner: 'Project'
  }
  Project: { // field return type name
    isCurrent: 'Boolean'
    isOpen: 'Boolean'
    plugins: 'InitStatus'
    projectRoot: 'String'
    server: 'InitStatus'
  }
  Query: { // field return type name
    app: 'App'
    browsers: 'Browser'
    openProject: 'Project'
    projects: 'Project'
  }
  Wizard: { // field return type name
    todo: 'Boolean'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    addProject: { // args
      input: NexusGenInputs['AddProjectInput']; // AddProjectInput!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
}

export interface NexusGenTypeInterfaces {
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = keyof NexusGenEnums;

export type NexusGenInterfaceNames = never;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    isTypeOf: false
    resolveType: true
    __typename: false
  }
}

export interface NexusGenTypes {
  context: any;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}