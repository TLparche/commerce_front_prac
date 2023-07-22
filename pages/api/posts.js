import connection from '@/lib/mysql';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { title, description, password, name } = req.body;
        const currentDate = new Date();
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0');
        const day = String(currentDate.getDate()).padStart(2, '0');
        const hours = String(currentDate.getHours()).padStart(2, '0');
        const minutes = String(currentDate.getMinutes()).padStart(2, '0');
        const seconds = String(currentDate.getSeconds()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        const formattedTime = `${hours}:${minutes}:${seconds}`;
        const query = `INSERT INTO notice (title, description, password, name, date, time) VALUES (?, ?, ?, ?, ?, ?)`;
        const values = [title, description, password, name, formattedDate, formattedTime];
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
