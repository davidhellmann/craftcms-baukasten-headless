interface IOptions {
  timezone?: string,
  weekday?: 'long' | 'short' | 'narrow' | null,
  year?: 'numeric' | '2-digit' | null,
  month?: 'numeric' | '2-digit' | 'narrow' | 'short'  | 'long' | null,
  day?: 'numeric' | '2-digit' | null,
  hour?: 'numeric' | '2-digit' | null,
  minute?: 'numeric' | '2-digit' | null,
  second?: 'numeric' | '2-digit' | null,
}

interface IDate {
  date: string,
  locale?: string|string[],
  options?: IOptions
}

export const useFormatDate = (params = {
  locale: 'us',
  options: {
    timezone: 'America/New_York',
    weekday: 'long',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  }
} as IDate) => {
  return new Date(params.date).toLocaleString(params.locale, params.options)
}
