import connection from '@/lib/mysql';

export default async function handler(req, res) {
    try {
        const [rows, fields] = await connection.execute('SELECT id, title, description FROM notice');
        const data = rows.map(row => ({
            id: row.id,
            title: row.title,
            description: row.description
        }));

        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to fetch data from DB' });
    }
}