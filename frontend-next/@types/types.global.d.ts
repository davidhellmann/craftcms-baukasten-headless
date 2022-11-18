// Component
interface IComponentClasses {
    [key: string]: any
}

interface IComponentSettings {
    [key: string]: any
}

interface IComponent {
  propRootClasses?: string
}

// Verbb Navigation Link
interface INavigationLink {
  id: string
  url: string
  classes: string
  title: string
  customAttributes: string[]
  newWindow: string
  urlSuffix: string
}

