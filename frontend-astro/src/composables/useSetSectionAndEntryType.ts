import {useCapitalizeFirstLetter as uCFL} from '@composables/useCapitalizeFirstLetter'

import Home from '@components/Views/Home.svelte'

import PagesContentBuilder from '@components/Views/Pages/ContentBuilder.svelte'
import Default from '@components/Views/Pages/Default.svelte'

interface IUseSetSectionAndEntryType {
  handle: string;
  type: string;
}

export const useSetSectionAndEntryType = (params: IUseSetSectionAndEntryType) => {
    let finalView = `${uCFL({string: params.handle})}${uCFL({string: params.type})}`;
    
    switch (finalView) {
        case 'PagesContentBuilder':
            return PagesContentBuilder
            break;

        case 'HomeHome':
            return Home
            break;
    
        default:
            return Default
            break;
    }
}