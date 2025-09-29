// app/api/services/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Service from '@/app/models/Service';

// GET: Fetch all services
export async function GET() {
  try {
    await connectDB();
    const services = await Service.find({});
    return NextResponse.json(services, { status: 200 });
  } catch (error) {
    console.error('GET Error:', error);
    return NextResponse.json({ error: 'Failed to fetch services', details: error.message }, { status: 500 });
  }
}

// POST: Create a new service
export async function POST(request) {
  try {
    await connectDB();
    const data = await request.json();
    console.log('Received POST data:', data);
    const newService = new Service(data);
    console.log('New Service:', newService);
    await newService.save();
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error('POST Error:', error);
    return NextResponse.json(
      { error: 'Failed to create service', details: error.message },
      { status: 500 }
    );
  }
}