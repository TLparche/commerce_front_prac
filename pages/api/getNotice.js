import connection from '@/lib/mysql';

export default async function handler(req, res) {
    const {method, query} = req;

    if (method === "GET") {
        try {
            let rows = [];
            if (query?.id) {
                const id = parseInt(query.id); // 정수형으로 변환
                const [result, fields] = await connection.execute('SELECT id, title, description FROM notice WHERE id = ?', [id]);
                rows = result;
            } else {
                const [result, fields] = await connection.execute('SELECT id, title, description FROM notice');
                rows = result;
            }
            const data = rows.map(row => ({
                id: row.id,
                title: row.title,
                description: row.description
            }));
            res.status(200).json(data);
        } catch (error) {
            console.error(error);
            res.status(500).json({error: 'Internal Server Error'});
        }
    } else {
        res.status(405).json({error: 'Method Not Allowed'});
    }
}