// app/api/offers/[id]/route.js
import { NextResponse } from 'next/server';
import connectDB from '@/app/lib/mongodb';
import Offer from '@/app/models/Offer';

// PUT: Update an offer
export async function PUT(request, { params }) {
  try {
    await connectDB();
    const data = await request.json();
    const updatedOffer = await Offer.findByIdAndUpdate(params.id, data, { new: true });
    if (!updatedOffer) {
      return NextResponse.json({ error: 'Offer not found' }, { status: 404 });
    }
    return NextResponse.json(updatedOffer, { status: 200 });
  } catch (error) {
    console.error('PUT Error:', error);
    return NextResponse.json({ error: 'Failed to update offer' }, { status: 500 });
  }
}

// DELETE: Delete an offer
export async function DELETE(request, { params }) {
  try {
    await connectDB();
    const deletedOffer = await Offer.findByIdAndDelete(params.id);
    if (!deletedOffer) {
      return NextResponse.json({ error: 'Offer not found' }, { status: 404 });
    }
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('DELETE Error:', error);
    return NextResponse.json({ error: 'Failed to delete offer' }, { status: 500 });
  }
}