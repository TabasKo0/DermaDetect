
import { NextResponse } from 'next/server';

export async function POST(req) {
	try {
		// Parse the incoming image (assume multipart/form-data)
		const formData = await req.formData();
		const imageFile = formData.get('image');
		if (!imageFile) {
			return NextResponse.json({ error: 'No image provided' }, { status: 400 });
		}

		// Prepare image for sending to Python backend
		const buffer = await imageFile.arrayBuffer();
		const blob = new Blob([buffer], { type: imageFile.type });
		const form = new FormData();
		form.append('image', blob, imageFile.name || 'image.jpg');

		// Send to Python backend
		const response = await fetch('http://127.0.0.1:5000/predict', {
			method: 'POST',
			body: form,
		});

		if (!response.ok) {
			return NextResponse.json({ error: 'Backend error' }, { status: 502 });
		}
		const result = await response.json();
		return NextResponse.json(result);
	} catch (err) {
		return NextResponse.json({ error: err.message }, { status: 500 });
	}
}
