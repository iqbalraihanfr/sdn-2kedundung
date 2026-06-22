const { Pool } = require('pg')

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

async function main() {
  const client = await pool.connect()
  try {
    const res = await client.query("SELECT policyname, qual, with_check FROM pg_policies WHERE schemaname = 'storage' AND tablename = 'objects';")
    console.log(JSON.stringify(res.rows, null, 2))
  } catch (err) {
    console.error(err)
  } finally {
    client.release()
    await pool.end()
  }
}

main()
