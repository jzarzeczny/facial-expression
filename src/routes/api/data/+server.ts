import { insertData } from '../database';

export async function POST({ request }: { request: Request }): Promise<Response> {
	const data = await request.json();

	await insertData(data);

	return new Response();
}
