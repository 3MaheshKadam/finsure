// app/api/services/[id]/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Service from '@/app/models/Service';

// GET: Fetch a single service by id (e.g., 'personal')
export async function GET(request, { params }) {
  try {
    await connectDB();
    const {id} = await params
    const service = await Service.findOne({ _id: id });
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json(service, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch service' }, { status: 500 });
  }
}

// PUT: Update a service by id
export async function PUT(request, { params }) {
  try {
    await connectDB();
    
    // Await the params to get the id
    const { id } = await params;
    console.log('Updating service with ID:', id);
    
    const data = await request.json();
    console.log('Received PUT data:', data);

    // Clean up the data to remove MongoDB-specific fields that shouldn't be updated
    const { _id, __v, createdAt, updatedAt, ...updateData } = data;

    const updatedService = await Service.findOneAndUpdate(
      { _id: id }, 
      updateData, 
      { new: true, runValidators: true }
    );
    
    if (!updatedService) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    
    console.log('Successfully updated service:', updatedService);
    return NextResponse.json(updatedService);
    
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json(
      { error: 'Failed to update service', details: error.message },
      { status: 500 }
    );
  }
}

// DELETE: Delete a service by id
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const deletedService = await Service.findOneAndDelete({ _id: params.id });
    if (!deletedService) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json({ message: 'Service deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete service' }, { status: 500 });
  }
}