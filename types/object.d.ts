import type { Ref } from 'vue'

import type {
  NucActivityObjectInterface,
  NucArticleObjectInterface,
  NucCardObjectInterface,
  NucContactObjectInterface,
  NucFeatureObjectInterface,
  NucFileObjectInterface,
  NucLinkObjectInterface,
  NucMoneyObjectInterface,
  NucQuestionObjectInterface,
  NucTaskObjectInterface,
  NucTechnologyObjectInterface,
  NucUserObjectInterface,
} from 'atomic'

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

  type SelectedObjectType = Ref<ObjectType>
}
