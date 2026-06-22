import { Pool } from 'pg'

const pool = new Pool({ connectionString: process.env.DATABASE_URL })

async function main() {
  const client = await pool.connect()
  try {
    await client.query(`
      DROP POLICY IF EXISTS "Authenticated Users can upload" ON storage.objects;
      DROP POLICY IF EXISTS "Authenticated Users can delete" ON storage.objects;
      
      CREATE POLICY "Allow public uploads" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'sipanda-images');
      CREATE POLICY "Allow public deletes" ON storage.objects FOR DELETE USING (bucket_id = 'sipanda-images');
      CREATE POLICY "Allow public updates" ON storage.objects FOR UPDATE USING (bucket_id = 'sipanda-images');
    `)
    console.log("Policies updated successfully!")
  } catch (err) {
    console.error(err)
  } finally {
    client.release()
    await pool.end()
  }
}

main()
