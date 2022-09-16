interface IResolveEntryComponent {
  entry: {
    sectionHandle: string,
    typeHandle: string,
  },
}

import {getCurrentInstance} from "vue";
import {useFirstLetterUppercase} from "~/composables/useFirstLetterUppercase";

export const useResolveEntryComponent = (params: IResolveEntryComponent) => {
  if (!params?.entry?.sectionHandle || !params?.entry?.typeHandle) return 'ViewsDefault'
  const instance = getCurrentInstance();
  const sectionHandle = useFirstLetterUppercase({text: params?.entry?.sectionHandle})
  const typeHandle = useFirstLetterUppercase({text: params?.entry?.typeHandle})

  const compToResolve = sectionHandle === typeHandle
    ? `Views${sectionHandle}`
    : `Views${sectionHandle}${typeHandle}`

  return typeof instance?.appContext.components === "object" &&
  compToResolve in instance.appContext.components ? compToResolve : 'ViewsDefault'
}
