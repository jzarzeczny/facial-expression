import pkg from 'pg';
import { POSTGRES_USER, POSTGRES_DB, POSTGRES_PASSWORD } from '$env/static/private';
import type { ImageQuestionWithAnswer } from '$lib/interfaces/image';
const { Pool } = pkg;

export const pool = new Pool({
	user: POSTGRES_USER,
	host: 'localhost',
	database: POSTGRES_DB,
	password: POSTGRES_PASSWORD,
	port: 5432
});

const tableName = 'results';

export const getData = async (): Promise<ImageQuestionWithAnswer[] | undefined> => {
	const client = await pool.connect();

	const query = `SELECT * FROM ${tableName}`;

	try {
		const result = await client.query(query);
		return result.rows;
	} catch (error) {
		console.error('Error while getting data from query: ', error);
		throw new Error('Something went wrong');
	} finally {
		client.release();
	}
};

export const insertData = async (answersData: ImageQuestionWithAnswer[]) => {
	const client = await pool.connect();
	try {
		const values = answersData.map((data) => [data.imageSrc, data.imageName, data.answer]);
		const query = `
      INSERT INTO "${tableName}" ("imageSrc", "imageName", "answer")
      VALUES ${values.map((_, index) => `($${index * 3 + 1}, $${index * 3 + 2}, $${index * 3 + 3})`).join(', ')}
      RETURNING *`;

		await client.query(query, values.flat());
	} catch (error) {
		console.error('Error inserting data: ', error);
	} finally {
		client.release();
	}
};
