import type {
  NucActivityObjectInterface,
  NucArticleObjectInterface,
  NucContactObjectInterface,
  NucFileObjectInterface,
  NucMoneyObjectInterface,
  NucQuestionObjectInterface,
  NucTechnologyObjectInterface,
  NucUserObjectInterface,
} from 'nucleify'

export {}

declare global {
  type ObjectType =
    | NucActivityObjectInterface
    | NucArticleObjectInterface
    | NucContactObjectInterface
    | NucFileObjectInterface
    | NucMoneyObjectInterface
    | NucQuestionObjectInterface
    | NucTechnologyObjectInterface
    | NucUserObjectInterface
    | undefined

  type ObjectNameType =
    | 'activity'
    | 'article'
    | 'contact'
    | 'file'
    | 'money'
    | 'question'
    | 'technology'
    | 'user'

  type SiteType = string

  type SelectedObjectType = ObjectType
}
