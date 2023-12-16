interface IBaseObject {
  [key: string]: any;
}

interface IComponent extends IBaseObject {}
interface IComponentClasses extends IBaseObject {}
interface IComponentSettings extends IBaseObject {
  root: string,
  rootClasses: string,
  variants: {
    [key: string]: {
      [key: string]: string
    }
  }
}
interface ITranslations extends IBaseObject {}
interface IViews extends IBaseObject {}
interface IPreviewParams extends IBaseObject {
  [key: string]: string;
}

