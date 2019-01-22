const set = new Set()

export async function create (record) {
  set.add(record)
  return record
}

export async function all() {
  return [...set.values()]
}

export async function clean () {
  set.clear()
  return true
}

