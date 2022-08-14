import {useCapitalizeFirstLetter as uCFL} from '@composables/useCapitalizeFirstLetter'

import Home from '@components/Views/Home.astro'


interface IUseSetSectionAndEntryTypeAstro {
  handle: string;
  type: string;
}

export const useSetSectionAndEntryType = (params: IUseSetSectionAndEntryTypeAstro) => {
    let finalView = `${uCFL({string: params.handle})}${uCFL({string: params.type})}`;
    
    switch (finalView) {
        case 'HomeHome':
            return Home
            break;
    }
}