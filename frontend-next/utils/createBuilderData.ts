interface ICreateBuilderData {
  blocks: {
    [k: string]: any;
  };
}

interface IBlock {
  [k: string]: any;
}

export const createBuilderData = (params: ICreateBuilderData) => {
  const cleanedBlocks = params.blocks.filter((x: IBlock) => Object.keys(x).length !== 0);
  const builderData: IBlock = {};
  let currentSectionId = '0';

  cleanedBlocks.forEach((block: IBlock, index: number) => {
    if (index === 0 && block.typeHandle !== 'blockSection') {
      builderData[currentSectionId] = {
        settings: {
          typeHandle: 'blockSection',
          sectionBackgroundColor: 'transparent',
          sectionPaddingVertical: 'lg',
          spaceBetweenBlocks: 'md',
        },
        blocks: [],
      };
    } else if (block.typeHandle === 'blockSection') {
      currentSectionId = index.toString();
      builderData[currentSectionId] = {
        settings: block,
        blocks: [],
      };
    }

    // Get current section and push blocks
    const currentBlocks = builderData[currentSectionId]?.blocks;
    if (block.typeHandle !== 'blockSection' && currentBlocks) {
      currentBlocks.push(block);
    }
  });

  return Object.values(builderData);
};
