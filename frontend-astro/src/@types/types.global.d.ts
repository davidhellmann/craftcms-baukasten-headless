interface IBaseObject {
  [key: string]: any;
}

interface IComponent extends IBaseObject {}
interface IComponentClasses extends IBaseObject {
  root: string,
  rootClasses: string,
  variants: {
    [key: string]: {
      [key: string]: string
    }
  }
}
interface IComponentSettings extends IBaseObject {}
interface ITranslations extends IBaseObject {}
interface IViews extends IBaseObject {}
