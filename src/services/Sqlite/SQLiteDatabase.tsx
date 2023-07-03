import * as SQLite from 'expo-sqlite'

const db = SQLite.openDatabase("bloco-de-nota.db")

export default db