interface IGetLocalDateFromUtc {
  date: string,
}

export const useGetLocalDateFromUtc = (params: IGetLocalDateFromUtc) => {
  const { locale, timeZone } = new Intl.DateTimeFormat().resolvedOptions()
  const currentDate = new Date(Date.parse(params.date))

  return currentDate.toLocaleString(locale, {
    hour: '2-digit',
    minute: '2-digit',
    timeZone,
    timeZoneName: 'short'
  })
}
