import connection from '@/lib/mysql';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, password } = req.body;
        const query = `INSERT INTO notice (title, description, password) VALUES (?, ?, ?)`;
        const values = [title, description, password];
        try {
            await connection.query(query, values);
            res.status(200).json({ success: true, message: 'Data saved successfully' })
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false, message: 'Failed to save data' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
