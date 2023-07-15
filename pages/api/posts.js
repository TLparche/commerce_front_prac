import connection from '@/lib/mysql';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, password, name } = req.body;
        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().slice(0, 19).replace('T', ' ');
        const query = `INSERT INTO notice (title, description, password, name, time) VALUES (?, ?, ?, ?, ?)`;
        const values = [title, description, password, name, formattedDate];
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
