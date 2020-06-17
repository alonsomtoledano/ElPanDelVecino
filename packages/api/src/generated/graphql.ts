import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Upload: any;
};


export type User = {
  __typename?: 'User';
  _id: Scalars['ID'];
  userName: Scalars['String'];
  token?: Maybe<Scalars['String']>;
};

export type FileInput = {
  url: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};

export type File = {
  __typename?: 'File';
  url: Scalars['String'];
  mimetype: Scalars['String'];
  encoding: Scalars['String'];
};

export type Recipe = {
  __typename?: 'Recipe';
  _id: Scalars['ID'];
  title: Scalars['String'];
  description: Scalars['String'];
  steps?: Maybe<Array<Scalars['String']>>;
  images?: Maybe<Array<File>>;
  date: Scalars['String'];
  ingredients: Array<Ingredient>;
  mainImage: File;
  author: Scalars['ID'];
};

export type Ingredient = {
  __typename?: 'Ingredient';
  _id: Scalars['ID'];
  name: Scalars['String'];
  recipes: Array<Maybe<Recipe>>;
};

export type Query = {
  __typename?: 'Query';
  recipes: Array<Maybe<Recipe>>;
  recipe: Recipe;
  ingredients: Array<Maybe<Ingredient>>;
  ingredient: Ingredient;
};


export type QueryRecipeArgs = {
  id: Scalars['ID'];
};


export type QueryIngredientArgs = {
  id: Scalars['ID'];
};

export type Mutation = {
  __typename?: 'Mutation';
  login: User;
  logout: User;
  signin: User;
  uploadFile: File;
  addRecipe: Recipe;
  addIngredient: Ingredient;
  removeRecipe: Recipe;
  removeIngredient: Ingredient;
};


export type MutationLoginArgs = {
  userName: Scalars['String'];
  pwd: Scalars['String'];
};


export type MutationLogoutArgs = {
  userid: Scalars['ID'];
  token: Scalars['String'];
};


export type MutationSigninArgs = {
  userName: Scalars['String'];
  pwd: Scalars['String'];
};


export type MutationUploadFileArgs = {
  userid: Scalars['ID'];
  token: Scalars['String'];
  upload: Scalars['Upload'];
};


export type MutationAddRecipeArgs = {
  userid: Scalars['ID'];
  token: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  steps: Array<Scalars['String']>;
  images: Array<FileInput>;
  ingredients: Array<Scalars['ID']>;
  mainImage: FileInput;
};


export type MutationAddIngredientArgs = {
  userid: Scalars['ID'];
  token: Scalars['String'];
  name: Scalars['String'];
};


export type MutationRemoveRecipeArgs = {
  userid: Scalars['ID'];
  token: Scalars['String'];
  id: Scalars['ID'];
};


export type MutationRemoveIngredientArgs = {
  userid: Scalars['ID'];
  token: Scalars['String'];
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}> = (obj: T, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Upload: ResolverTypeWrapper<Scalars['Upload']>;
  User: ResolverTypeWrapper<User>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  String: ResolverTypeWrapper<Scalars['String']>;
  FileInput: FileInput;
  File: ResolverTypeWrapper<File>;
  Recipe: ResolverTypeWrapper<Recipe>;
  Ingredient: ResolverTypeWrapper<Ingredient>;
  Query: ResolverTypeWrapper<{}>;
  Mutation: ResolverTypeWrapper<{}>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Upload: Scalars['Upload'];
  User: User;
  ID: Scalars['ID'];
  String: Scalars['String'];
  FileInput: FileInput;
  File: File;
  Recipe: Recipe;
  Ingredient: Ingredient;
  Query: {};
  Mutation: {};
  Boolean: Scalars['Boolean'];
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload';
}

export type UserResolvers<ContextType = any, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type FileResolvers<ContextType = any, ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']> = {
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  mimetype?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  encoding?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type RecipeResolvers<ContextType = any, ParentType extends ResolversParentTypes['Recipe'] = ResolversParentTypes['Recipe']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  steps?: Resolver<Maybe<Array<ResolversTypes['String']>>, ParentType, ContextType>;
  images?: Resolver<Maybe<Array<ResolversTypes['File']>>, ParentType, ContextType>;
  date?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  ingredients?: Resolver<Array<ResolversTypes['Ingredient']>, ParentType, ContextType>;
  mainImage?: Resolver<ResolversTypes['File'], ParentType, ContextType>;
  author?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type IngredientResolvers<ContextType = any, ParentType extends ResolversParentTypes['Ingredient'] = ResolversParentTypes['Ingredient']> = {
  _id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  recipes?: Resolver<Array<Maybe<ResolversTypes['Recipe']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  recipes?: Resolver<Array<Maybe<ResolversTypes['Recipe']>>, ParentType, ContextType>;
  recipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<QueryRecipeArgs, 'id'>>;
  ingredients?: Resolver<Array<Maybe<ResolversTypes['Ingredient']>>, ParentType, ContextType>;
  ingredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<QueryIngredientArgs, 'id'>>;
};

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  login?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationLoginArgs, 'userName' | 'pwd'>>;
  logout?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationLogoutArgs, 'userid' | 'token'>>;
  signin?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationSigninArgs, 'userName' | 'pwd'>>;
  uploadFile?: Resolver<ResolversTypes['File'], ParentType, ContextType, RequireFields<MutationUploadFileArgs, 'userid' | 'token' | 'upload'>>;
  addRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationAddRecipeArgs, 'userid' | 'token' | 'title' | 'description' | 'steps' | 'images' | 'ingredients' | 'mainImage'>>;
  addIngredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<MutationAddIngredientArgs, 'userid' | 'token' | 'name'>>;
  removeRecipe?: Resolver<ResolversTypes['Recipe'], ParentType, ContextType, RequireFields<MutationRemoveRecipeArgs, 'userid' | 'token' | 'id'>>;
  removeIngredient?: Resolver<ResolversTypes['Ingredient'], ParentType, ContextType, RequireFields<MutationRemoveIngredientArgs, 'userid' | 'token' | 'id'>>;
};

export type Resolvers<ContextType = any> = {
  Upload?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
  File?: FileResolvers<ContextType>;
  Recipe?: RecipeResolvers<ContextType>;
  Ingredient?: IngredientResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
