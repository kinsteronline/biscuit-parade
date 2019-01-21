export default function dateFormat (date) {
  if (!date) throw new Error('Date required to format')
  const d = new Date(date)
  return `${d.getMonth() + 1}/${d.getDate()}/${d.getFullYear()}`
}
